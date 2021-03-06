import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';

import registerBackground from '~/shared/assets/registerBackground.png';

export const Container = styled(ImageBackground).attrs({
  source: registerBackground,
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerForm = styled.ScrollView`
  width: 80%;
  margin-top: 60px;
`;

export const ContainerInputs = styled.View``;

export const ContainerButtons = styled.View`
  margin: 30px 0px 10px;
  width: 100%;
  align-items: center;
`;
