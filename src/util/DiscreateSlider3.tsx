import React from 'react';
import styled from 'styled-components';

interface SliderProps {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
}

export const Slider3: React.FC<SliderProps> = ({ min, max, step, value, onChange }) => {
  const breakPointNumber = ((max - min) / step);
  const stepPercentage = 100 / breakPointNumber;

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
      {Array.from({ length: breakPointNumber + 1 }, (_, index) => (
        <BreakPoint position={index * stepPercentage} index={index} lastindex={breakPointNumber}/> 
      ))}
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;
  height: 0.9em;
  background-color: #8c61c0;
  padding: 0;
  margin: 0;
`;

const StyledSlider = styled.input`
  width: 100%;
  cursor: pointer;

  padding: 0;
  margin: 0;

  // 슬라이더 트랙
  -webkit-appearance: none;
  appearance: none;
  height: 0.9em; // 슬라이더 트랙의 높이
  background: #aaaaaa;
  /* border: 2px solid #7fc491; */
  border-radius: 5px;

  // 슬라이더 엄지
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    position: relative;
    z-index: 5;// 눈금 표시선보다 z-index 높게함
    appearance: none;
    height: 1.5em;
    width: 2.5em;
    background: #319057;
    border: 1px solid #c5c9cb;
    cursor: pointer;
    border-radius: 0.9em; // 원형에서 사각형으로 변경
  }

  &::-moz-range-thumb {
    height: 20px;
    width: 20px;
    background: #ffffff;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 0; // 원형에서 사각형으로 변경
  }
`;

const BreakPoint = styled.div<{ position: number, index: number, lastindex: number }>`
  position: absolute;
  z-index: 4;
  display: ${props => (props.index === 0) || (props.index === props.lastindex) ? 'none' : ''};
  top: 50%;
  left: ${props => props.position}%;
  transform: translateX(-50%) translateY(-50%);
  padding: 0;
  margin: 0;
  width: 0.2em;
  height: 0.5em;
  border-radius: 50%;
  background-color: #97105a;
`;