import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import car1 from "../assets/images/cars3.jpeg";
import car2 from "../assets/images/cars4.jpeg";
import car3 from "../assets/images/cars1.jpeg";

const cars = [car1, car2, car3];

export default function CarCarousel() {
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-5xl mx-auto px-4">

        {/* Title */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Unsere Fahrzeuge
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-400">
            Moderne, gepflegte Fahrzeuge für Flughafentransfer, Stadtfahrten
            und Business Service – 24/7 verfügbar.
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-2xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            effect="fade"
            loop
            speed={900}
            autoplay={{ delay: 2800, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            className="rounded-3xl overflow-hidden border border-neutral-800 shadow-[0_0_40px_rgba(0,0,0,0.8)]"
          >

            {cars.map((car, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full max-w-2xl mx-auto 
                                h-[460px] md:h-[540px] lg:h-[600px]
                                bg-black overflow-hidden rounded-3xl">

                  <img
                    src={car}
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />

                  {/* Text */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">

                    <div>
                      <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-yellow-400">
                        Lübecks Taxi
                      </p>
                      <h3 className="mt-1 text-lg md:text-2xl font-semibold text-white">
                      </h3>
                    </div>

                    <div className="hidden md:flex items-center gap-3 text-right">
                      <span className="text-3xl font-semibold text-yellow-400">
                        24/7
                      </span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-[0.25em]">
                        Sofort buchbar
                      </span>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnails */}
          <div className="mt-4 hidden md:flex justify-center gap-3">
            {cars.map((car, i) => (
              <div
                key={i}
                className="w-20 h-14 rounded-xl overflow-hidden border border-neutral-700 bg-neutral-900"
              >
                <img
                  src={car}
                  alt=""
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
