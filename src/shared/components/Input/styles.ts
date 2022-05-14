import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import Icon from '../Icon';

type IconProps = {
  name?: string;
  type?: string;
};

type ContainerInputProps = {
  border?: boolean;
};

export const Container = styled.View`
  width: 100%;
`;

export const ContainerInput = styled.View<ContainerInputProps>`
  background: #fff;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  padding: 10px 10px;
  border: ${({ border }) => (border ? 1 : 0)}px;
`;

export const Input = styled(TextInput)`
  flex: 1;
  margin: 0px 5px;
`;

export const IconInput = styled(Icon).attrs<IconProps>(({ name, type }) => ({
  name,
  type,
  size: 25,
  color: '#1B2735',
}))<IconProps>``;

export const ButtonIcon = styled.TouchableOpacity``;

export const LabelInput = styled.Text`
  margin-bottom: 10px;
  font-size: 17px;
  font-weight: bold;
`;
