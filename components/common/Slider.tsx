import { FC, useState, useCallback } from 'react';

import { Container } from '@material-ui/core';
import LeftIcon from '@material-ui/icons/ArrowBackIos';
import RightIcon from '@material-ui/icons/ArrowForwardIos';

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
                <ControlIcon as={LeftIcon} />
              </ControlButton>
              <ControlButton onClick={nextSlide}>
                <ControlIcon as={RightIcon} />
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
