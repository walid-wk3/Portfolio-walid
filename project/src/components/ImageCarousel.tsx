import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

interface ImageCarouselProps {
  images: {
    url: string;
    alt: string;
  }[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="w-full h-64 rounded-xl overflow-hidden"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-contain" // Changer object-cover par object-contain
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
