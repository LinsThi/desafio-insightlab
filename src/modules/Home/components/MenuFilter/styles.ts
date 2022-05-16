import styled from 'styled-components/native';
import Icon from '~/shared/components/Icon';

type IconProps = {
  name?: string;
  type?: string;
};

export const IconMenu = styled(Icon).attrs<IconProps>(
  ({ name, type, theme }) => ({
    name,
    type,
    size: theme.Sizes.ICON_HEADER_BUTTON,
    color: theme.Colors.ICON_HEADER_COLOR,
  }),
)``;
