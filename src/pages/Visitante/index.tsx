import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import * as S from './styles';

import logo from '../../assets/img/Logo_Partiu-02.png';

export default function Visitante() {
  const navigation = useNavigation();


  return (
    <S.Container>
      <S.Logo source={logo} />
      <S.Description>O Sonho que cabe no seu bolso.</S.Description>
      <S.Description>Vamos começar?</S.Description>
      <S.IconsContainer>
        <TouchableOpacity onPress={() => navigation.navigate('ConsultarMilhas')} style={{ width: 150, height: 80, backgroundColor: '#f00' }} />
        <TouchableOpacity onPress={() => navigation.navigate('PlanejarViagem')} style={{ width: 150, height: 80, backgroundColor: '#ff9000' }} />
      </S.IconsContainer>
    </S.Container>
  );
}