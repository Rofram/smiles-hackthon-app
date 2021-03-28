import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const ImgBackground = styled.ImageBackground`
  flex: 1;
  justify-content: space-between;
`;

export const ImgLogo = styled.Image`
  top: 53px;
  left: 82px;
  width: 211px;
  height: 119px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 100px;
`;

export const ButtonFazerParte = styled(RectButton)`
  width: 143px;
  height: 55px;
  border-radius: 7px;
  background: #FFFFFF;
  justify-content: center;
  align-items: center;
`;

export const ButtonEntrar = styled(RectButton)`
  width: 143px;
  height: 55px;
  border-radius: 7px;
  background: #FF5A00;
  justify-content: center;
  align-items: center;
`;

export const TextWhite = styled.Text`
  color: #FFFFFF;
  text-transform: uppercase;
`;

export const TextOrange = styled.Text`
  color: #FF5A00;
  text-transform: uppercase;
`;