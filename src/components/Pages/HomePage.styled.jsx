import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const ContactContainer = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  margin-top: 130px;
  position: relative;
  padding: 20px 30px;
  width: 470px;
  height: ${props => props.hg};
  background-color: aqua;
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  border-radius: 20px;
  background-color: #fdfdfd;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.12),
    0px 0px 5px 0px rgba(0, 0, 0, 0.12);
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
  /* transition: opacity 3000 cubic-bezier(0.4, 0, 0.2, 1); */
`;

export const Divi = styled.div`
  /* display: ${p => p.non}; */
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background-color: olive;
  margin-top: 20px;
  margin-left: 30px;
  opacity: ${p => p.opac};
  /* transition: 2000 cubic-bezier(0.4, 0, 0.2, 1); */
  transition: 400ms ease-in-out;
  transition-delay: 500ms;
  transition-property: opacity, transform;
  /* transition-delay: 2s; */
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

export const ContactInput = styled.input`
  width: 250px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  display: block;
  margin-top: 5px;

  /* :active {
    border: 1px solid #000;
  } */
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

export const DeleteButtin = styled.button``;

export const EditButton = styled.button``;

export const ContactButton = styled.button`
  cursor: pointer;
  width: 45px;
  height: 45px;
  border: 1px solid #100be3;
  border-radius: 100%;
  background-color: transparent;

  :not(:last-child) {
    margin-right: 15px;
  }
  /* flex-shrink: 0; */
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
  display: flex;
  flex-direction: column;
`;

export const EditContactButton = styled.button``;

export const Label = styled.label`
  color: #757575;
  font-family: ${p => p.theme.fonts.body};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.14px;
  margin-bottom: 12px;
  display: block;
`;

export const LabelImageInput = styled.label`
  width: 120px;
  height: 120px;
  background-color: #e4e4e4;
  border-radius: 100%;
  /* display: block; */
  cursor: pointer;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactInputImage = styled.input`
  display: none;
`;

export const Form = styled.form`
  opacity: ${p => p.opacity};
  /* transition: 2000 cubic-bezier(0.4, 0, 0.2, 1); */
  transition: 400ms ease-in-out;
  transition-delay: 300ms;
  transition-property: opacity, transform;
  /* transition-delay: 2s; */
  transform: scale(${p => p.scale});
  width: 250px;
`;

export const Svg = styled(ReactSVG)`
  width: 15px;
  height: 15px;
  fill: aqua;
`;
