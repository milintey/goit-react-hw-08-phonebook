import styled from 'styled-components';

export const Div = styled.div`
  margin-top: 130px;
  width: 470px;
  height: ${props => props.hg};
  background-color: aqua;
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
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
  width: 200px;
  height: 50px;
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
  display: none;
`;

export const Input = styled.input`
  height: 50px;
  width: 310px;
  border-color: black;
`;
