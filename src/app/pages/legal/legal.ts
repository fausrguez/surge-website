import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CONTACT_EMAIL } from '../../core/content';
import { SeoService } from '../../core/seo.service';

interface LegalBlock {
  title: string;
  paragraphs?: string[];
  list?: string[];
}

interface LegalPage {
  title: string;
  description: string;
  kicker: string;
  intro: string;
  blocks: LegalBlock[];
}

const PAGES: Record<string, LegalPage> = {
  privacidad: {
    title: 'Política de privacidad · SURGE',
    description:
      'Cómo trata SURGE tus datos personales en esta web: responsable, finalidad, base legal, conservación y derechos.',
    kicker: 'Legal · Privacidad',
    intro:
      'Esta política explica qué datos recogemos cuando usas esta web, para qué los usamos y cómo puedes ejercer tus derechos. Es un texto provisional que debe revisarse antes de publicar.',
    blocks: [
      {
        title: '1. Responsable del tratamiento',
        paragraphs: [
          'El responsable es SURGE, con domicilio en Las Palmas de Gran Canaria, Canarias, España. Puedes contactar en hola@surge.es.',
          'Esta web es un sitio informativo y de demostración. Todavía no hay un servicio de envío de formularios conectado, por lo que los mensajes que escribas no se almacenan en servidores de SURGE.',
        ],
      },
      {
        title: '2. Qué datos tratamos',
        list: [
          'Datos que escribes en el formulario de contacto: nombre, email, asunto y mensaje.',
          'Datos técnicos necesarios para servir la web: dirección IP y registro del proveedor de alojamiento.',
          'Preferencias guardadas en tu navegador: carrito y aceptación del aviso de cookies.',
        ],
      },
      {
        title: '3. Para qué los usamos',
        list: [
          'Responder a tu consulta o propuesta.',
          'Gestionar tu interés en vender SURGE o en la Bestial Race.',
          'Mantener el carrito mientras navegas.',
          'Cumplir obligaciones legales cuando corresponda.',
        ],
      },
      {
        title: '4. Base legal',
        paragraphs: [
          'La base para responder a tu mensaje es tu consentimiento y el interés legítimo en atender consultas comerciales. Para el carrito, la base es la ejecución de la relación precontractual. Para el alojamiento, el interés legítimo en mantener la web segura.',
        ],
      },
      {
        title: '5. Conservación',
        paragraphs: [
          'Los mensajes se conservarán el tiempo necesario para responderte y, después, durante los plazos legales aplicables. Al no haber un servicio de envío conectado, los mensajes de esta versión no se conservan.',
          'El carrito se guarda en tu navegador hasta que lo borres o vacíes el carrito.',
        ],
      },
      {
        title: '6. Destinatarios',
        paragraphs: [
          'No cedemos tus datos a terceros para publicidad. Podemos usar proveedores técnicos de alojamiento y correo que actúan como encargados del tratamiento, con contratos que cumplen el RGPD.',
        ],
      },
      {
        title: '7. Tus derechos',
        paragraphs: [
          'Puedes solicitar acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a hola@surge.es. También puedes reclamar ante la Agencia Española de Protección de Datos.',
        ],
      },
      {
        title: '8. Cambios',
        paragraphs: [
          'Podemos actualizar esta política cuando cambie la web o la normativa. La fecha de la última revisión aparece al final de la página.',
        ],
      },
    ],
  },
  'aviso-legal': {
    title: 'Aviso legal · SURGE',
    description: 'Información legal sobre el titular, el contenido y el uso de la web de SURGE.',
    kicker: 'Legal · Aviso legal',
    intro:
      'Este aviso regula el uso de la web de SURGE. Es un texto provisional que debe revisarse antes de publicar.',
    blocks: [
      {
        title: '1. Titular',
        paragraphs: [
          'La web pertenece a SURGE, marca de bebidas energéticas naturales con domicilio en Las Palmas de Gran Canaria, Canarias, España. Contacto: hola@surge.es.',
        ],
      },
      {
        title: '2. Objeto',
        paragraphs: [
          'La web presenta la marca, los sabores, los packs y los canales de venta de SURGE. La información es informativa y no constituye una oferta contractual mientras no exista una pasarela de pago conectada.',
        ],
      },
      {
        title: '3. Propiedad intelectual',
        paragraphs: [
          'El logotipo, los textos, las imágenes, los modelos 3D y el diseño están protegidos por derechos de propiedad intelectual e industrial. No se permite su reproducción sin autorización, salvo para uso personal y no comercial.',
        ],
      },
      {
        title: '4. Responsabilidad',
        paragraphs: [
          'SURGE trabaja para que la información sea correcta y esté actualizada, pero no garantiza la ausencia de errores. No se responsabiliza de daños derivados de un uso indebido de la web o de la indisponibilidad del servicio.',
        ],
      },
      {
        title: '5. Enlaces externos',
        paragraphs: [
          'La web enlaza a Instagram, Linktree, Vercel y a la web de Bestial Race. SURGE no controla esos sitios ni sus políticas de privacidad.',
        ],
      },
      {
        title: '6. Legislación aplicable',
        paragraphs: [
          'Este aviso se rige por la legislación española. Cualquier controversia se someterá a los juzgados de Las Palmas de Gran Canaria, salvo que la ley disponga otro fuero.',
        ],
      },
    ],
  },
  cookies: {
    title: 'Política de cookies · SURGE',
    description:
      'Qué almacenamiento local usa la web de SURGE, para qué sirve y cómo puedes borrarlo.',
    kicker: 'Legal · Cookies',
    intro:
      'Esta web no usa cookies de publicidad ni de analítica de terceros. Solo guarda datos técnicos en tu navegador para que el carrito y tus preferencias funcionen.',
    blocks: [
      {
        title: '1. Qué guardamos',
        list: [
          'surge_cart_v1: tu carrito de packs, para que no se pierda al recargar.',
          'surge_cookies_v1: tu decisión sobre este aviso.',
          'surge_bestial_promo: si has cerrado el aviso de Bestial Race.',
        ],
      },
      {
        title: '2. Para qué sirve',
        paragraphs: [
          'Son datos técnicos y necesarios para el funcionamiento de la web. No se usan para perfilarte, no se comparten con terceros y no activan publicidad.',
        ],
      },
      {
        title: '3. Cookies de terceros',
        paragraphs: [
          'No cargamos cookies de Google Analytics, Meta Pixel ni redes publicitarias. Las fuentes tipográficas se cargan desde Google Fonts; si quieres evitarlo, puedes bloquearlas en tu navegador y la web usará las fuentes del sistema.',
        ],
      },
      {
        title: '4. Cómo borrarlas',
        paragraphs: [
          'Puedes borrar el almacenamiento local desde los ajustes de tu navegador. Al hacerlo se vaciará el carrito y volverás a ver el aviso de cookies.',
        ],
      },
      {
        title: '5. Cambios',
        paragraphs: [
          'Si en el futuro añadimos analítica o publicidad, actualizaremos esta política y pediremos consentimiento antes de activarlas.',
        ],
      },
    ],
  },
};

@Component({
  selector: 'app-legal',
  imports: [RouterLink],
  templateUrl: './legal.html',
  styleUrl: './legal.scss',
})
export class Legal {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);

  page: LegalPage = PAGES['privacidad'];
  readonly email = CONTACT_EMAIL;
  readonly updated = 'Noviembre de 2026';

  constructor() {
    const slug = this.route.snapshot.data['slug'] as string;
    this.page = PAGES[slug] ?? PAGES['privacidad'];
    this.seo.setPage({
      title: this.page.title,
      description: this.page.description,
      path: `/legal/${slug ?? 'privacidad'}`,
    });
  }
}
