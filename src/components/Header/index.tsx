import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import * as S from './styles';

interface HeaderProps {
  title?: string;
  Description?: string;
}

export default function Header({ title, Description }: HeaderProps) {
  const navigation = useNavigation();

  return (
    <S.Container>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#fff" />
      </BorderlessButton>
      <S.TextContainer>
        <S.Title>{title}</S.Title>
        {Description && <S.Description>{Description}</S.Description>}
      </S.TextContainer>
    </S.Container>
  );
}