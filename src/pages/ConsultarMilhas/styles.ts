import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
	padding: 50px 30px;
	background: #FFF;
	flex: 1;
`;

export const Card = styled.View`
`;

export const CardContainer = styled.View`
	background: #F6F6F6;

	border-radius: 21px;
	padding: 14px 20px;
	margin-bottom: 30px;
	elevation: 20;
`;

export const FirstTexT = styled.Text`
	font-size: 20px;
	color: #7C7C7C;
	margin-bottom: 14px;
`;

export const Value = styled.Text`
	color: #FF5A00;
	font-size: 60px;
`;

export const TextValue = styled.Text`
	color: #7C7C7C;
	font-size: 20px;
	margin-bottom: 20px;
`;

export const Note  = styled.Text`
	color: #7C7C7C;
`;

export const Line = styled.View`
  height: 2px;
  background: #f2f2f2;
	margin-bottom: 30px;
`;

export const TextSecondary = styled.Text`
	color: #7C7C7C;
	font-size: 18px;
	margin-bottom: 30px;
`;

export const TextWhite = styled.Text`
  color: #FFFFFF;
  text-transform: uppercase;
`;

export const ContainerButton = styled.View`
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
`;

export const ButtonComprar = styled(RectButton)`
  width: 143px;
  height: 55px;
  border-radius: 7px;
  background: #FF5A00;
  justify-content: center;
  align-items: center;
`;

export const ButtonResgatar = styled(RectButton)`
  width: 143px;
  height: 55px;
  border-radius: 7px;
  background: #FF5A00;
  justify-content: center;
  align-items: center;
`;