// Tell TypeScript these CSS side-effect imports exist (e.g. from swiper)
declare module 'swiper/css';
declare module 'swiper/css/pagination';
declare module 'swiper/css/navigation';
declare module 'swiper/css/effect-fade';

// Fallback for any other plain CSS imports in the project
declare module '*.css' {
  const content: { [className: string]: string } | string;
  export default content;
}
