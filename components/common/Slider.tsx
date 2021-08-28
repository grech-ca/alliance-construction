import { FC, useState, useCallback } from 'react';

import { Container } from '@material-ui/core';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { StyledSlider, Image, Header, Content, Control, ControlIcon, ControlButton } from 'styles/Slider';

export interface Slide {
  image: string;
  onClick?: (index: number) => void;
}

interface SliderProps {
  slides: Slide[];
  autoSlide?: boolean;
}

const Slider: FC<SliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slide = slides[currentSlide];

  const nextSlide = useCallback(() => setCurrentSlide(prev => (prev + 1) % slides.length), [slides.length]);
  const prevSlide = useCallback(
    () => setCurrentSlide(prev => (prev - 1 < 0 ? slides.length - 1 : prev - 1)),
    [slides.length],
  );

  return (
    <StyledSlider>
      <Container>
        {slides.length > 1 && (
          <Header>
            <Control>
              <ControlButton onClick={prevSlide}>
                <ControlIcon as={MdChevronLeft} />
              </ControlButton>
              <ControlButton onClick={nextSlide}>
                <ControlIcon as={MdChevronRight} />
              </ControlButton>
            </Control>
          </Header>
        )}
      </Container>
      <Content>
        <Image src={slide.image} />
      </Content>
    </StyledSlider>
  );
};

export default Slider;
