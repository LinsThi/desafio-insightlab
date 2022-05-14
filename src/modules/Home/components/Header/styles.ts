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
  padding: 30px 20px 0px;
`;

export const ContainerUser = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerPopable = styled.View`
  padding: 5px 0px;
  width: 50px;
  justify-content: center;
  align-items: center;
`;

export const TextPopable = styled.Text`
  color: #fff;
`;

export const TextUser = styled.Text`
  font-size: 20px;
  color: #fff;

  margin-left: 10px;
`;

export const Button = styled.TouchableOpacity``;

export const IconHeader = styled(Icon).attrs<IconProps>(({ name, type }) => ({
  name,
  type,
  size: 40,
  color: '#fff',
}))``;
