import styled from 'styled-components/native';
import Icon from '~/shared/components/Icon';

type IconProps = {
  name?: string;
  type?: string;
};

export const Container = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: #4add95;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 70px;
  right: 30px;
`;

export const IconButton = styled(Icon).attrs<IconProps>(({ name, type }) => ({
  name,
  type,
  size: 25,
  color: '#fff',
}))``;
