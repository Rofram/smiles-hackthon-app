import React from 'react';

import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

import background from '../../assets/img/landscape-rio-de-janeiro-surrounded-by-sea-blue-sky-brazil.jpg';

import Logo from '../../assets/img/Logo_Partiu-03.png';

export default function Landing() {

  const navigation = useNavigation();

  function handleNavigateToLogin() {
    navigation.navigate('LoginPage');
  }

  function handleNavigateToVisitante() {
    navigation.navigate('VisitantePage');
  }

  return (
    <S.Container >
      <S.ImgBackground source={background}>
        <S.ImgLogo source={Logo} />
        <S.BemvindoText>Bem-vindo!</S.BemvindoText>
        <S.ButtonsContainer>
          <S.ButtonFazerParte>
            <S.TextOrange>Fazer Parte</S.TextOrange>
          </S.ButtonFazerParte>
          <S.ButtonEntrar onPress={handleNavigateToLogin}>
            <S.TextWhite>Entrar</S.TextWhite>
          </S.ButtonEntrar>
        </S.ButtonsContainer>
        <S.VisitanteLink onPress={handleNavigateToVisitante}>
          <S.VisitanteText>Entrar como Visitante</S.VisitanteText>
        </S.VisitanteLink>
      </S.ImgBackground>
    </S.Container>
  );
}

