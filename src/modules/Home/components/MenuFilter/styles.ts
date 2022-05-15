import styled from 'styled-components/native';
import Icon from '~/shared/components/Icon';

type IconProps = {
  name?: string;
  type?: string;
};

export const IconMenu = styled(Icon).attrs<IconProps>(({ name, type }) => ({
  name,
  type,
  size: 30,
  color: '#fff',
}))``;
