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
  display: flex;
  background-color: green;
  position: relative;
  width: 100%;
  max-width: 300px;
  /* padding: 10px; */
`;

const StyledSlider = styled.input`
  display: inline-block;
  width: 100%;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  height: 10px; // Reduced the height for a cleaner thumb track
  background: #ddd;
  border-radius: 5px;
  outline: none;
  position: relative; // Ensures the thumb overlaps the track correctly

  /* &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    border: 1px solid #cccccc;
    margin-top: -7px; // Adjusts thumb to slide over the track smoothly
  }

  &::-moz-range-thumb {
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    border: 1px solid #cccccc;
    margin-top: -7px;
  } */
`;

const BreakPoint = styled.div<{ position: number }>`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: ${props => props.position}%;
  transform: translateX(-50%) translateY(-50%);
  width: 5px;
  height: 5px;
  background-color: rgba(0, 0, 0, 0.5); // Using black for better visibility
  border-radius: 50%;
`;

export const Slider2: React.FC<SliderProps> = ({ min, max, step, value, onChange }) => {
  const numberOfSteps = (max - min) / step;
  const stepPercentage = 100 / numberOfSteps;

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
      {Array.from({ length: numberOfSteps + 1 }, (_, index) => (
        <BreakPoint key={index} position={index * stepPercentage} />
      ))}
    </SliderContainer>
  );
};
