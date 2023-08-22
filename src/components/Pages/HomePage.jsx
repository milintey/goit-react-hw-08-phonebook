// import foto from '../../Фото.jpg';
// import { ReactSVG } from 'react-svg';
// import svgIcon from '../../image/serch.svg';
import { Formik } from 'formik';

import pensilIcon from '../../image/pencil2.svg';
import deleteIcon from '../../image/remove.svg';
import personIcon from '../../image/person.svg';
import phoneIcon from '../../image/phone.svg';
import photocamera from '../../image/photocamera.svg';

import {
  ContactContainer,
  EditButton,
  DeleteButton,
  ContactImg,
  ContactName,
  ContactPhone,
  Div,
  DivContact,
  ContactInput,
  ContactTitle,
  Label,
  FormContact,
  Svg,
  LabelImageInput,
  ContactInputImage,
  Img,
  FormField,
  EditContactButton,
  SvgIcon,
  SvgPhoto,
  SvgIconDelete,
  FormButtonContainer,
  Diviii,
} from './HomePage.styled';
import { useState } from 'react';

const initialValues = {
  name: '',
  phone: '',
  foto: '',
};

export const HomePage = () => {
  const [height, setHeight] = useState('100px');
  const [opacity, setOpacity] = useState('0');
  const [scale, setScale] = useState('0.7');
  const [image, setImage] = useState(null);
  const [delayForm, setDelayForm] = useState('');
  const [delayContact, setDelayContact] = useState('');

  const editContact = () => {
    setHeight('375px');
    setOpacity('1');
    setScale('1');
    setDelayForm('400ms');
    setDelayContact('0ms');
  };

  const heightFunk = () => {
    setHeight('100px');
    setOpacity('0');
    setScale('0.7');
    setDelayForm('0ms');
    setDelayContact('400ms');
  };

  const changeFunction = event => {
    console.log(event.target.files[0]);
    if (event.target.files[0]) {
      const foto = URL.createObjectURL(event.target.files[0]);
      console.log('foto', foto);
      setImage(foto);
    }
  };

  const submitFort = (value, { resetForm }, event) => {
    console.log(value);
    console.log(event);
    setImage(null);
    resetForm();
  };

  return (
    <ContactContainer hg={height} delaycontact={delayContact}>
      <DivContact>
        <Div>
          <ContactImg />
          <div>
            <ContactName>Игорь Демьянинко</ContactName>
            <ContactPhone>+38(066)-108-14-55</ContactPhone>
          </div>
        </Div>

        <div>
          <EditButton type="button" onClick={editContact}>
            <SvgIcon src={pensilIcon} className={'icon'} />
          </EditButton>
          <DeleteButton type="button">
            <SvgIconDelete src={deleteIcon} className={'icon'} />
          </DeleteButton>
        </div>
      </DivContact>

      <Formik initialValues={initialValues} onSubmit={submitFort}>
        <FormContact opacity={opacity} scale={scale} delayform={delayForm}>
          <ContactTitle>Edit contact</ContactTitle>
          <Diviii>
            <div>
              <Label>
                Name
                <FormField>
                  <ContactInput type="text" name="name" />
                  <Svg src={personIcon} className={'ico'} />
                </FormField>
              </Label>
              <Label>
                Phone
                <FormField>
                  <ContactInput type="text" name="phone" />
                  <Svg src={phoneIcon} className={'ico'} />
                </FormField>
              </Label>
            </div>

            <LabelImageInput onChange={changeFunction}>
              <ContactInputImage
                type="file"
                name="foto"
                id="foto"
                onClick={changeFunction}
              />
              {image ? (
                <Img src={image} />
              ) : (
                <SvgPhoto src={photocamera} className={'photo'} />
              )}
            </LabelImageInput>
          </Diviii>

          <FormButtonContainer>
            <EditContactButton type="submit">Edit</EditContactButton>
            <EditContactButton type="button" onClick={heightFunk}>
              Exit
            </EditContactButton>
          </FormButtonContainer>
        </FormContact>
      </Formik>
    </ContactContainer>
  );
};

/* <Input type="file" />
      <Divi opac={opacity} scal={scale}></Divi>
      <Input /> */
