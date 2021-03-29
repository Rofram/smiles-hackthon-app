import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 24px;
  background-color: #FF5A00;
  border-bottom-width: 1px;
  border-color: #F55000;
  padding-top: 45px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export const TextContainer = styled.View`
  flex: 1;
  margin-left: 16px;
  justify-content: center;
`;

export const Description = styled.Text`
  color: #fff;
`;