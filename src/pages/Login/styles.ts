import styled from 'styled-components';
import loginBackground from '../../assets/loginBackground.jpg';

export const ContainerLogin = styled.div`
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const BorderedDiv = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 70vh;
  border: 1px solid rgb(0, 0, 0, 0.3);
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  border-radius: 20px;
`;

export const LeftDiv = styled.div`
  width: 58%;
  height: 100%;
  background: url(${loginBackground}) no-repeat;
  opacity: 0.5;
  border-radius: 20px 0 0 20px;
`;

export const RightDiv = styled.div`
  min-height: 100%;
  width: 42%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
`;
