
import React from 'react';
import styled from 'styled-components';

interface SliderProps {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
}

const SliderContainer = styled.div`
  width: 100%;
  max-width: 300px;
  padding: 10px;
`;

const StyledSlider = styled.input`
  width: 800px;
  cursor: pointer;
`;

export const Slider: React.FC<SliderProps> = ({ min, max, step, value, onChange }) => {
  return (
    <SliderContainer>
      <StyledSlider
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(parseInt(e.target.value))}
      />
    </SliderContainer>
  );
};