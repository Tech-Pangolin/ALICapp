import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';
import './ImageCarousel.css';

interface ImageCarouselProps {
  headerText?: string;
  images: string[];
  options?: EmblaOptionsType;
  className?: string;
  showDots?: boolean;
  showArrows?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  objectFit?: 'cover' | 'contain';
  loop?: boolean;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  headerText = '',
  images,
  options = {},
  className = '',
  showDots = true,
  showArrows = true,
  autoPlay = false,
  autoPlayInterval = 3000,
  objectFit = 'contain',
  loop = true
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    loop
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || !emblaApi) return;

    const autoplay = emblaApi.plugins().autoplay as any;
    if (autoplay) {
      autoplay.play();
    }

    return () => {
      if (autoplay) {
        autoplay.stop();
      }
    };
  }, [emblaApi, autoPlay, autoPlayInterval]);

  if (!images || images.length === 0) {
    return <div className="image-carousel-empty">No images to display</div>;
  }

  return (
    <>
    {headerText && <h4>{headerText}</h4>}
    <div className={`image-carousel ${className}`}>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <img
                  src={image}
                  alt={`Carousel image ${index + 1}`}
                  className="embla__slide__img"
                  style={{ objectFit }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {showArrows && images.length > 1 && (
        <>
          <button
            className="embla__prev"
            onClick={scrollPrev}
            aria-label="Previous image"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="embla__next"
            onClick={scrollNext}
            aria-label="Next image"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}

      {showDots && images.length > 1 && (
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected' : ''}`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ImageCarousel;
