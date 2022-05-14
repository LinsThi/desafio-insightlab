import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';

import loginBackground from '~/shared/assets/loginBackground.png';

export const Container = styled(ImageBackground).attrs({
  source: loginBackground,
})`
  flex: 1;
  align-items: center;
`;

export const ContainerImg = styled.View`
  flex: 0.4;
  justify-content: flex-end;
`;

export const ContainerInputs = styled.View`
  flex: 0.3;
  margin-top: 40px;
  width: 80%;
  justify-content: center;
`;

export const ContainerButtons = styled.View`
  flex: 0.2;
  width: 226px;
  align-items: center;
  justify-content: space-evenly;
`;

export const Image = styled.Image`
  width: 200px;
  height: 180px;
`;
