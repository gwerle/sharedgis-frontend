import styled from 'styled-components';
import loginBackground from '../../assets/loginBackground.jpg';

export const LeftDiv = styled.div`
  width: 58%;
  height: 100%;
  background: url(${loginBackground}) no-repeat;
  opacity: 0.5;
  border-radius: 20px 0 0 20px;

  @media(max-width: 800px) {
    display: none;
  }
`;

export const RightDiv = styled.div`
  min-height: 100%;
  width: 42%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;

  @media(max-width: 800px) {
    width: 100%;
  }
`;
