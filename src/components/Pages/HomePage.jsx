import { Div, DivNone, Divi, Input } from './HomePage.styled';
import { useState } from 'react';

export const HomePage = () => {
  const [height, setHeight] = useState('100px');
  // const [none, setNone] = useState('none');
  // const [opacity, setOpacity] = useState('0');

  const heightFun = () => {
    setHeight('500px');
    // setNone('block');
    // setOpacity('1');
  };

  const heightFunk = () => {
    setHeight('100px');
    // setNone('none');
    // setOpacity('0');
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
        <DivNone></DivNone>
      </Div>
      <Input type="file" />
      <Divi></Divi>
    </div>
  );
};
