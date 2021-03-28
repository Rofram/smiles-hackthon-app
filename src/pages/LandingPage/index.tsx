import React from 'react';

import * as S from './styles';

import background from '../../assets/img/landscape-rio-de-janeiro-surrounded-by-sea-blue-sky-brazil.jpg';

import Logo from '../../assets/img/Logo_Partiu-03.png';

export default function Landing() {
  return (
    <S.Container >
      <S.ImgBackground source={background}>
        <S.ImgLogo source={Logo} />
        <S.ButtonsContainer>
          <S.ButtonFazerParte>
            <S.TextOrange>Fazer Parte</S.TextOrange>
          </S.ButtonFazerParte>
          <S.ButtonEntrar>
            <S.TextWhite>Entrar</S.TextWhite>
          </S.ButtonEntrar>
        </S.ButtonsContainer>
      </S.ImgBackground>
      
    </S.Container>
  );
}

