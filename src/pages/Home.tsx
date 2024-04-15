import styled from "styled-components";
import { Slider } from "../util/DiscreteSlider";
import { useState } from "react";
import { Slider2 } from "../util/DiscreateSlider2";
import { Slider3 } from "../util/DiscreateSlider3";

// import React from 'react';
export default function Home() {
  const [value, setValue] = useState(30);
  const min = 0;
  const max = 30;
  const step = 5;

  return (
    <HomeContainer>
      <Slider
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(newValue: number) => setValue(newValue)}
      />

      <Slider2
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(newValue: number) => setValue(newValue)}
      />

      <Slider3
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(newValue: number) => setValue(newValue)}
      />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  padding: 1em;
  width: 100%;
  height: 100%;
  min-height: 1000px;
  color: white;

  background-color: #111e44;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
