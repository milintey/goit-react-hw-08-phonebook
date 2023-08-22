import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import { Form, Field } from 'formik';

export const ContactContainer = styled.div`
  margin-top: 130px;
  position: relative;
  padding: 20px 30px;
  width: 470px;
  height: ${props => props.hg};
  /* background-color: aqua; */

  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${props => props.delaycontact};

  overflow: hidden;
  margin-left: 50px;

  border-radius: 20px;
  background-color: #fdfdfd;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.12),
    0px 0px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const FormContact = styled(Form)`
  opacity: ${p => p.opacity};
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${props => props.delayform};
  transition-property: opacity, transform;
  transform: scale(${p => p.scale});
`;

export const DivNone = styled.div`
  width: 200px;
  height: 150px;
  background-color: black;
  opacity: ${p => p.opac};
  margin-top: 200px;
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 400ms;
  transform: scale(1.1);
`;

export const Divi = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background-color: olive;
  margin-top: 20px;
  margin-left: 30px;
  opacity: ${p => p.opac};
  transition: 400ms ease-in-out;
  transition-delay: 500ms;
  transition-property: opacity, transform;
  transform: scale(${p => p.scal});
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const ContactInput = styled(Field)`
  width: 250px;
  height: 40px;
  font-size: 16px;
  font-family: ${p => p.theme.fonts.body};
  border-radius: 20px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  display: block;
  margin-top: 5px;
  padding-left: 35px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;

  &:focus + .ico {
    fill: ${p => p.theme.colors.accent};
  }

  &:focus {
    border: 1px solid #100be3;
  }
`;

export const ContactName = styled.p`
  color: #000;
  font-family: ${p => p.theme.fonts.body};
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.51px;
  margin-bottom: 6px;
`;

export const ContactPhone = styled.p`
  color: #757575;
  font-family: ${p => p.theme.fonts.body};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
`;

export const ContactImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: #7f75f2;
  margin-right: 15px;
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border: 1px solid #c70808;
  border-radius: 100%;
  background-color: transparent;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :not(:last-child) {
    margin-right: 15px;
  }

  &:hover .icon {
    fill: white;
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    background-color: #c70808;
  }
`;

export const EditButton = styled.button`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border: 1px solid #ffa800;
  border-radius: 100%;
  background-color: transparent;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :not(:last-child) {
    margin-right: 15px;
  }

  &:hover .icon {
    fill: white;
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    background-color: #ffa800;
  }
`;

export const ContactTitle = styled.p`
  color: #000;
  font-family: ${p => p.theme.fonts.body};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.6px;
  margin-bottom: 15px;
`;

export const FormField = styled.div`
  position: relative;
`;

export const EditContactButton = styled.button`
  cursor: pointer;
  height: 45px;
  width: 90px;
  /* margin-right: auto; */
  /* margin-left: auto; */
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: calc(30 / 16);
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.06em;
  background-color: transparent;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  color: #100be3;
  border-radius: 100px;
  border: 1px solid #100be3;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${p => p.theme.colors.accent};
    color: white;
  }

  :not(:last-child) {
    margin-right: 30px;
  }
`;

export const Label = styled.label`
  color: #757575;
  font-family: ${p => p.theme.fonts.body};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.14px;
  display: block;
  position: relative;

  :not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const LabelImageInput = styled.label`
  width: 125px;
  height: 125px;
  background-color: #e4e4e4;
  border-radius: 100%;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover .photo {
    fill: ${p => p.theme.colors.accent};
  }
`;

export const ContactInputImage = styled(Field)`
  display: none;
`;

export const Svg = styled(ReactSVG)`
  width: 14px;
  height: 14px;
  fill: black;
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
`;

export const SvgIcon = styled(ReactSVG)`
  width: 20px;
  height: 20px;
  fill: ${p => p.theme.colors.yellow};
`;

export const SvgIconDelete = styled(ReactSVG)`
  width: 20px;
  height: 20px;
  fill: ${p => p.theme.colors.red};
`;

export const SvgPhoto = styled(ReactSVG)`
  width: 50px;
  height: 50px;
  fill: black;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Img = styled.img`
  width: 125px;
  height: 125px;
  object-fit: cover;
`;

export const FormButtonContainer = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
`;

export const Diviii = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
