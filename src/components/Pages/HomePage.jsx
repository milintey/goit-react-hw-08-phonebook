// import foto from '../../Фото.jpg';
// import { ReactSVG } from 'react-svg';
import svgIcon from '../../serch.svg';
import {
  ContactContainer,
  ContactButton,
  ContactImg,
  ContactName,
  ContactPhone,
  Div,
  DivContact,
  ContactInput,
  ContactTitle,
  // FormField,
  Label,
  Form,
  Svg,
  // LabelImageInput,
  // ContactInputImage,
} from './HomePage.styled';
import { useState } from 'react';

export const HomePage = () => {
  const [height, setHeight] = useState('100px');
  const [opacity, setOpacity] = useState('0');
  const [scale, setScale] = useState('0.3');
  // const [image, setImage] = useState(foto);

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

  // const changeFunction = event => {
  //   console.log(event.target.files[0]);
  //   const foto = URL.createObjectURL(event.target.files[0]);
  //   console.log(foto);
  //   setImage(foto);
  // };

  return (
    <ContactContainer hg={height}>
      <DivContact>
        <Div>
          <ContactImg />
          <div>
            <ContactName>Игорь Демьянинко</ContactName>
            <ContactPhone>+38(066)-108-14-55</ContactPhone>
          </div>
        </Div>

        <div>
          <ContactButton type="button" onClick={heightFun}>
            edit
          </ContactButton>
          <ContactButton type="button" onClick={heightFunk}>
            del
          </ContactButton>
        </div>
      </DivContact>

      <Form opacity={opacity} scale={scale}>
        <ContactTitle>Edit contact</ContactTitle>

        <Label>
          Name
          <ContactInput type="text" name="name" />
        </Label>
        <Label>
          Phone
          <ContactInput type="text" name="phone" />
        </Label>

        <Svg src={svgIcon} />

        {/* <LabelImageInput onChange={changeFunction}>
          <ContactInputImage type="file" name="foto" id="foto" />
          <img src={image} alt="fotograf" />
        </LabelImageInput> */}
      </Form>

      {/* <DivNone opac={opacity}></DivNone> */}
    </ContactContainer>
  );
};

/* <Input type="file" />
      <Divi opac={opacity} scal={scale}></Divi>
      <Input /> */
