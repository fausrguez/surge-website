import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface MapPoint {
  name: string;
  address: string;
  lat: number;
  lng: number;
  kind: 'tienda' | 'gimnasio';
}

@Component({
  selector: 'app-store-map',
  template: `
    <div
      #mapContainer
      class="mapa-real"
      role="application"
      aria-label="Mapa de puntos de venta y gimnasios en Las Palmas de Gran Canaria"
    ></div>
    <p class="mapa-real__nota">
      Mapa real de Las Palmas de Gran Canaria. Toca un punto para ver la dirección. Datos del mapa:
      © OpenStreetMap.
    </p>
  `,
  styles: `
    :host {
      display: block;
    }

    .mapa-real {
      width: 100%;
      height: clamp(340px, 48vw, 480px);
      border: 1px solid var(--linea);
      border-radius: var(--radio-md);
      background: #e8efe4;
      z-index: 0;
    }

    .mapa-real__nota {
      margin-top: 8px;
      color: var(--secundario);
      font-size: 0.7rem;
      text-align: right;
    }
  `,
})
export class StoreMap implements AfterViewInit, OnDestroy {
  readonly points = input.required<MapPoint[]>();

  private readonly platformId = inject(PLATFORM_ID);
  private readonly mapContainer = viewChild<ElementRef<HTMLDivElement>>('mapContainer');
  private map: import('leaflet').Map | null = null;

  async ngAfterViewInit(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const container = this.mapContainer()?.nativeElement;
    if (!container) {
      return;
    }

    const imported = await import('leaflet');
    const L = (imported as unknown as { default?: typeof imported }).default ?? imported;
    this.map = L.map(container, {
      scrollWheelZoom: false,
      zoomControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(this.map);

    const icon = L.divIcon({
      className: 'surge-pin',
      html: '',
      iconSize: [22, 22],
      iconAnchor: [11, 11],
      popupAnchor: [0, -12],
    });

    const coords: [number, number][] = [];
    for (const point of this.points()) {
      const marker = L.marker([point.lat, point.lng], {
        icon,
        title: point.name,
        alt: point.name,
      }).addTo(this.map);
      const markerElement = marker.getElement();
      markerElement?.setAttribute('aria-label', `${point.name}. ${point.address}`);
      marker.bindPopup(
        `<strong>${point.name}</strong><br>${point.address}<br><small>${point.kind === 'tienda' ? 'Punto de venta' : 'Gimnasio'}</small>`,
      );
      coords.push([point.lat, point.lng]);
    }

    if (coords.length > 1) {
      this.map.fitBounds(L.latLngBounds(coords), { padding: [36, 36], maxZoom: 14 });
    } else if (coords.length === 1) {
      this.map.setView(coords[0], 14);
    } else {
      this.map.setView([28.1248, -15.43], 12);
    }
  }

  ngOnDestroy(): void {
    this.map?.remove();
    this.map = null;
  }
}
