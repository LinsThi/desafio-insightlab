import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';

import loginBackground from '~/shared/assets/loginBackground.png';

export const Container = styled(ImageBackground).attrs({
  source: loginBackground,
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerForm = styled.ScrollView`
  flex: 1;
  width: 80%;
`;

export const ContainerImg = styled.View`
  flex: 0.35;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin: 100px 0px 10px;
`;

export const ContainerInputs = styled.View``;

export const ContainerButtons = styled.View`
  margin: 30px 0px 10px;
  width: 100%;
  align-items: center;
`;

export const Image = styled.Image`
  width: 200px;
  height: 180px;
`;
