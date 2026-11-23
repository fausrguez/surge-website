import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type ParticleKind = 'fire' | 'wind' | 'ice';

interface Particle {
  x: string;
  y: string;
  size: string;
  duration: string;
  delay: string;
  drift: string;
  spin: string;
  opacity: string;
}

const seeded = (seed: number) => {
  let state = seed;
  return () => {
    state = (state * 48271) % 2147483647;
    return state / 2147483647;
  };
};

const build = (
  seed: number,
  count: number,
  ranges: {
    x: [number, number];
    y: [number, number];
    size: [number, number];
    duration: [number, number];
    drift: [number, number];
    spin: [number, number];
    opacity: [number, number];
  },
): Particle[] => {
  const random = seeded(seed);
  const pick = ([min, max]: [number, number]) => min + random() * (max - min);

  return Array.from({ length: count }, () => ({
    x: `${pick(ranges.x).toFixed(1)}%`,
    y: `${pick(ranges.y).toFixed(1)}%`,
    size: `${pick(ranges.size).toFixed(1)}px`,
    duration: `${pick(ranges.duration).toFixed(2)}s`,
    delay: `-${pick([0, 9]).toFixed(2)}s`,
    drift: `${pick(ranges.drift).toFixed(0)}px`,
    spin: `${pick(ranges.spin).toFixed(0)}deg`,
    opacity: pick(ranges.opacity).toFixed(2),
  }));
};

const PARTICLES: Record<ParticleKind, Particle[]> = {
  fire: build(17, 30, {
    x: [3, 97],
    y: [30, 98],
    size: [5, 12],
    duration: [7, 13],
    drift: [-36, 36],
    spin: [0, 0],
    opacity: [0.55, 0.95],
  }),
  wind: build(43, 20, {
    x: [0, 96],
    y: [2, 58],
    size: [9, 17],
    duration: [9, 17],
    drift: [46, 150],
    spin: [180, 420],
    opacity: [0.35, 0.7],
  }),
  ice: build(71, 22, {
    x: [2, 98],
    y: [0, 34],
    size: [5, 12],
    duration: [6, 12],
    drift: [-46, 46],
    spin: [180, 360],
    opacity: [0.35, 0.8],
  }),
};

@Component({
  selector: 'app-flavor-particles',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span
      class="particulas"
      [class.particulas--fire]="kind() === 'fire'"
      [class.particulas--wind]="kind() === 'wind'"
      [class.particulas--ice]="kind() === 'ice'"
      aria-hidden="true"
    >
      @for (particle of particles(); track $index) {
        <span
          class="particula"
          [style.left]="particle.x"
          [style.top]="particle.y"
          [style.width]="particle.size"
          [style.height]="particle.size"
          [style.animation-duration]="particle.duration"
          [style.animation-delay]="particle.delay"
          [style.--drift]="particle.drift"
          [style.--spin]="particle.spin"
          [style.--op]="particle.opacity"
        ></span>
      }
    </span>
  `,
  styles: `
    :host {
      position: absolute;
      inset: 0;
      z-index: 1;
      display: block;
      overflow: hidden;
      pointer-events: none;
    }

    .particulas {
      position: absolute;
      inset: 0;
    }

    .particula {
      position: absolute;
      opacity: 0;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      will-change: transform, opacity;
    }

    .particulas--fire .particula {
      border-radius: 50% 50% 46% 46% / 62% 62% 38% 38%;
      background: linear-gradient(
        180deg,
        #fff6c9 0%,
        #ffc247 34%,
        #f47b20 68%,
        rgba(178, 58, 43, 0) 100%
      );
      box-shadow:
        0 0 12px 3px rgba(244, 123, 32, 0.55),
        0 0 22px 6px rgba(255, 194, 71, 0.28);
      animation-name: brasa;
    }

    .particulas--wind .particula {
      border-radius: 62% 0 62% 0;
      background: linear-gradient(135deg, #2d6a4f 0%, #73c58c 55%, #b7e4c7 100%);
      box-shadow: inset 0 0 0 1px rgba(29, 74, 54, 0.18);
      animation-name: hoja;
    }

    .particulas--ice .particula {
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.98) 0%,
        rgba(178, 226, 240, 0.9) 48%,
        rgba(92, 168, 194, 0.55) 100%
      );
      filter: drop-shadow(0 0 6px rgba(178, 226, 240, 0.8));
      animation-name: cristal;
    }

    @keyframes brasa {
      0% {
        opacity: 0;
        transform: translate3d(0, 14px, 0) scale(0.45);
      }
      12% {
        opacity: var(--op);
      }
      55% {
        opacity: var(--op);
        transform: translate3d(calc(var(--drift) * 0.55), -46vh, 0) scale(1);
      }
      100% {
        opacity: 0;
        transform: translate3d(var(--drift), -96vh, 0) scale(0.15);
      }
    }

    @keyframes hoja {
      0% {
        opacity: 0;
        transform: translate3d(0, 0, 0) rotate(0deg);
      }
      12% {
        opacity: var(--op);
      }
      50% {
        transform: translate3d(calc(var(--drift) * 0.5), -22px, 0)
          rotate(calc(var(--spin) * 0.5));
      }
      86% {
        opacity: var(--op);
      }
      100% {
        opacity: 0;
        transform: translate3d(var(--drift), 26px, 0) rotate(var(--spin));
      }
    }

    @keyframes cristal {
      0% {
        opacity: 0;
        transform: translate3d(0, -28px, 0) rotate(0deg);
      }
      12% {
        opacity: var(--op);
      }
      100% {
        opacity: 0;
        transform: translate3d(var(--drift), 92vh, 0) rotate(var(--spin));
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .particula {
        display: none;
      }
    }
  `,
})
export class FlavorParticles {
  readonly kind = input.required<ParticleKind>();
  readonly particles = computed(() => PARTICLES[this.kind()]);
}
