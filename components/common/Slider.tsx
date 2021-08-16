import { FC, useState } from 'react';

export enum SliderVariant {
  project = 'project',
  src = 'src',
}

interface SliderProps {
  slides: string[] | object[];
  variant: SliderVariant;
}

const Slider: FC<SliderProps> = ({ slides, variant }) => {
  const [slide, setSlide] = useState(0);

  const minusSlide = () => {
    let temp = slide - 1;

    if (temp < 0) {
      temp = slides.length - 1;
    } else if (temp > slides.length - 1) {
      temp = 0;
    }
    setSlide(temp);
  };

  const plusSlide = () => {
    let temp = slide + 1;

    if (temp < 0) {
      temp = slides.length - 1;
    } else if (temp > slides.length - 1) {
      temp = 0;
    }
    setSlide(temp);
  };

  return (
    <div className='slider_wrapper'>
      <div className='buttons'>
        <span className='slider_btn' onClick={minusSlide}>
          &#706;
        </span>
        {variant == SliderVariant.project ? <span className='project-name'>{slides[slide].name}</span> : ''}
        <span className='slider_btn' onClick={plusSlide}>
          &#707;
        </span>
      </div>
      <div className='slider'>
        {variant == SliderVariant.project ? (
          <div className='slide'>
            <img src={slides[slide].src[0]} alt='slide' />
          </div>
        ) : (
          <div className='slide'>
            <img src={slides[slide]} alt='slide' />
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
