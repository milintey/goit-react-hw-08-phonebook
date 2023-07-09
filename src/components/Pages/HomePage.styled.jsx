import styled from 'styled-components';

export const Div = styled.div`
  width: 500px;
  height: ${props => props.hg};
  background-color: aqua;
  transition: 1000ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
`;

export const DivNone = styled.div`
  width: 200px;
  height: 50px;
  background-color: black;
  display: ${p => p.non};
  margin-top: 300px;
  /* transition: opacity 3000 cubic-bezier(0.4, 0, 0.2, 1); */
  transition: margin-left 4s ease-in-out 1s;
  opacity: 1;
`;

export const Divi = styled.div`
  width: 200px;
  height: 50px;
  background-color: olive;
  transform: translateX(0);
  margin-top: 20px;
`;

export const Input = styled.input`
  height: 50px;
  width: 310px;
  border-color: black;
`;
