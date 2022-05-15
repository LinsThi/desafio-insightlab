import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

type ContainerProps = {
  color: string;
};

type NameButtonProps = {
  colorText: string;
};

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 226px;
  background: ${({ color }) => color};
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
`;

export const NameButton = styled.Text<NameButtonProps>`
  color: ${({ colorText }) => colorText};
  font-weight: bold;
`;
