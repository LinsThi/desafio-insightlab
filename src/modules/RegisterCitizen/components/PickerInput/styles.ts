import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const ContainerPicker = styled.View`
  background: ${({ theme }) => theme.Colors.BACKGROUND_PICKER_INPUT};
  border-radius: 20px;
  padding-left: 5px;
`;

export const LabelInput = styled.Text`
  margin: 15px 0px 5px 7px;
  font-size: 17px;
  font-weight: bold;
`;
