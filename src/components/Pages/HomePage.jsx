import { Div, DivNone, Divi } from './HomePage.styled';
import { useState } from 'react';

export const HomePage = () => {
  const [height, setHeight] = useState('100px');
  const [opacity, setOpacity] = useState('0');
  const [scale, setScale] = useState('0.3');

  const heightFun = () => {
    setHeight('390px');
    setOpacity('1');
    setScale('1');
  };

  const heightFunk = () => {
    setHeight('100px');
    setOpacity('0');
    setScale('0.3');
  };

  return (
    <div>
      <Div hg={height}>
        <button type="button" onClick={heightFun}>
          max
        </button>
        <button type="button" onClick={heightFunk}>
          min
        </button>
        <DivNone opac={opacity}></DivNone>
      </Div>
      {/* <Input type="file" /> */}
      <Divi opac={opacity} scal={scale}></Divi>
    </div>
  );
};
