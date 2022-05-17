import { Popable } from 'react-native-popable';
import styled from 'styled-components/native';
import Icon from '~/shared/components/Icon';

type IconProps = {
  name?: string;
  type?: string;
};

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px 0px;
`;

export const ContainerUser = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
`;

export const ContainerPopable = styled.TouchableOpacity`
  padding: 5px 0px;
  width: 50px;
  justify-content: center;
  align-items: center;
`;

export const TextPopable = styled.Text`
  color: ${({ theme }) => theme.Colors.WHITE};
`;

export const TextUser = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.Colors.WHITE};

  margin-left: 10px;
  font-weight: bold;
`;

export const ButtonFilter = styled.TouchableOpacity`
  margin-right: 20px;
`;

export const Button = styled.TouchableOpacity``;

export const PopableView = styled(Popable).attrs({ position: 'bottom' })`
  top: 0px;
  width: 50px;
`;

export const IconHeader = styled(Icon).attrs<IconProps>(
  ({ name, type, theme }) => ({
    name,
    type,
    size: theme.Sizes.ICON_HEADER_BUTTON,
    color: theme.Colors.ICON_HEADER_COLOR,
  }),
)``;
