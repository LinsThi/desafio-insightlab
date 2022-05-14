import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';

import homeBackground from '~/shared/assets/homeBackground.png';

export const Container = styled(ImageBackground).attrs({
  source: homeBackground,
  resizeMode: 'cover',
})`
  flex: 1;
  padding: 10px;
`;
