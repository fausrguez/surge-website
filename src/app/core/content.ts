export type FlavorId = 'flama' | 'mentisimo' | 'cocus';
export type PackSize = 6 | 12 | 24;
export type PackMode = 'single' | 'sub';

export interface Flavor {
  id: FlavorId;
  name: string;
  moment: string;
  slogan: string;
  ingredients: string;
  caffeine: string;
  sugar: string;
  temperature: string;
  color: string;
  tint: string;
  textColor: string;
  model: string;
  image: string;
  description: string;
  pattern: 'flames' | 'leaves' | 'crystals';
  patternImage: string;
  particles: 'fire' | 'wind' | 'ice';
  decorLeft: string;
  decorRight: string;
}

export interface Pack {
  size: PackSize;
  name: string;
  price: number;
  singlePrice?: number;
  pricePerCan: number;
  tag: string;
  blurb: string;
}

export const FLAVORS: Flavor[] = [
  {
    id: 'flama',
    name: 'Flama',
    moment: 'PUSH',
    slogan: 'Energía que impulsa.',
    ingredients: 'Té negro, mango, jengibre, pimienta negra y guaraná',
    caffeine: '80 mg',
    sugar: 'Sin azúcar añadido',
    temperature: 'Fría o caliente',
    color: '#B23A2B',
    tint: '#F6E1DB',
    textColor: '#7A241A',
    model: 'assets/models/flama.glb',
    image: 'assets/img/modelo-flama.webp',
    description:
      'Té negro al frente, jengibre en medio y pimienta al final. El mango redondea. La lata que empuja antes de entrenar, sin pedir permiso.',
    pattern: 'flames',
    patternImage: 'assets/patterns/patron-flama.webp',
    particles: 'fire',
    decorLeft: 'assets/flavors/mango.webp',
    decorRight: 'assets/flavors/jengibre.webp',
  },
  {
    id: 'mentisimo',
    name: 'Mentisimo',
    moment: 'MORNING',
    slogan: 'Enfoque natural.',
    ingredients: 'Té verde, menta, lima y guaraná',
    caffeine: '65 mg',
    sugar: 'Sin azúcar',
    temperature: 'Fría o caliente',
    color: '#2D6A4F',
    tint: '#E4F1E9',
    textColor: '#1D4A36',
    model: 'assets/models/mentisimo.glb',
    image: 'assets/img/modelo-mentisimo.webp',
    description:
      'Té verde, menta fresca y un final de lima. La lata diaria para empezar sin chute y seguir con la cabeza clara.',
    pattern: 'leaves',
    patternImage: 'assets/patterns/patron-mentisimo.webp',
    particles: 'wind',
    decorLeft: 'assets/flavors/menta.webp',
    decorRight: 'assets/flavors/lima.webp',
  },
  {
    id: 'cocus',
    name: 'Cocus',
    moment: 'NOON',
    slogan: 'Calma que te impulsa.',
    ingredients: 'Agua de coco, lima, jengibre y guaraná',
    caffeine: '50 mg',
    sugar: 'Sin azúcar añadido',
    temperature: 'Solo fría',
    color: '#1F4E5F',
    tint: '#E2EFF4',
    textColor: '#153A47',
    model: 'assets/models/cocus.glb',
    image: 'assets/img/modelo-cocus.webp',
    description:
      'Coco suave, lima al frente y jengibre al final. Mucho hielo. La pausa fresca para después del deporte o de la tarde.',
    pattern: 'crystals',
    patternImage: 'assets/patterns/patron-cocus.webp',
    particles: 'ice',
    decorLeft: 'assets/flavors/coco.webp',
    decorRight: 'assets/flavors/hielo.webp',
  },
];

export const PACKS: Record<PackSize, Pack> = {
  6: {
    size: 6,
    name: 'Starter',
    price: 12.9,
    pricePerCan: 2.15,
    tag: 'Para probar',
    blurb: 'Dos de cada. La forma más rápida de saber cuál repites.',
  },
  12: {
    size: 12,
    name: 'Equilibrio',
    price: 24.9,
    pricePerCan: 2.08,
    tag: 'El más elegido',
    blurb: 'Cuatro de cada, o el reparto que tú quieras. La caja del día a día.',
  },
  24: {
    size: 24,
    name: 'Rutina',
    price: 49.9,
    singlePrice: 59.9,
    pricePerCan: 2.08,
    tag: 'Mejor precio por lata',
    blurb: 'Ocho de cada, o tu mezcla. SURGE Club: suscripción mensual o compra única.',
  },
};

export const SHIPPING = {
  cost: 4,
  freeFrom: 39.95,
};

export const NAV_LINKS = [
  { label: 'Inicio', path: '/' },
  { label: 'Bestial Race', path: '/bestial-race' },
  { label: 'Sobre nosotros', path: '/sobre-nosotros' },
  { label: 'Dónde comprar', path: '/donde-comprar' },
];

export const SOCIALS = {
  instagram: 'https://www.instagram.com/surge.es/',
  linktree: 'https://linktr.ee/surge.es',
  bestialInstagram: 'https://www.instagram.com/bestial_race/',
  bestialWeb: 'https://ocrbestial.com',
};

export const CONTACT_EMAIL = 'hola@surge.es';

export const CAFFEINE_WARNING =
  'Contenido elevado de cafeína. No recomendado para niños ni para mujeres embarazadas o en período de lactancia.';

export const CONTACT_SUBJECTS = [
  'Pedido o envío',
  'Quiero vender SURGE',
  'Colaboración o prensa',
  'Bestial Race',
  'Otro',
];

export const INSTAGRAM_POSTS = [
  {
    image: 'assets/img/inicial.webp',
    alt: 'Las tres latas de SURGE juntas sobre piedra clara',
    caption: 'Tres momentos, una familia.',
  },
  {
    image: 'assets/img/modelo-flama.webp',
    alt: 'Lata Flama de SURGE',
    caption: 'PUSH · Antes de entrenar.',
  },
  {
    image: 'assets/img/modelo-mentisimo.webp',
    alt: 'Lata Mentisimo de SURGE',
    caption: 'MORNING · Hoy empieza contigo.',
  },
  {
    image: 'assets/img/modelo-cocus.webp',
    alt: 'Lata Cocus de SURGE',
    caption: 'NOON · La pausa que te despeja.',
  },
  {
    image: 'assets/img/caja-pack.webp',
    alt: 'Caja Variety Pack de SURGE con seis latas',
    caption: 'Seis latas. Tres formas de parar.',
  },
  {
    image: 'assets/img/fondo-producto.webp',
    alt: 'Fondo neutro de SURGE con sombras de palmera',
    caption: 'Energy from the earth.',
  },
];

export const formatPrice = (value: number): string =>
  new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(value);
