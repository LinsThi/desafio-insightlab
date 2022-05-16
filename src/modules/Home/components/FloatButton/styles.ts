import styled from 'styled-components/native';
import Icon from '~/shared/components/Icon';

type IconProps = {
  name?: string;
  type?: string;
};

export const Container = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.Colors.FLOAT_BUTTON_BACKGROUND};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 30px;
  right: 30px;
`;

export const IconButton = styled(Icon).attrs<IconProps>(
  ({ name, type, theme }) => ({
    name,
    type,
    size: 25,
    color: theme.Colors.WHITE,
  }),
)``;
