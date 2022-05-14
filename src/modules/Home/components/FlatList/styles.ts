import styled from 'styled-components/native';
import vacinne from '~/shared/assets/vaccine.png';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const ContainerItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: #fff;
  margin-top: 30px;
  padding: 10px 20px;
  border-radius: 20px;
`;

export const ContainerInfoCitizen = styled.View``;

export const ContainerVacinne = styled.View``;

export const NameCitizen = styled.Text`
  color: #1b2735;
  font-weight: bold;
  font-size: 18px;
`;

export const InformationCitizenCPF = styled.Text`
  color: #000;
  font-size: 13px;

  margin-top: 15px;
`;

export const InformationCitizenBirthday = styled.Text`
  color: #000;
  font-size: 13px;
`;

export const VacinneImage = styled.Image.attrs({ source: vacinne })`
  width: 38px;
  height: 38px;
`;

export const InformationCitizenDose = styled.Text`
  color: #000;
  font-size: 13px;

  margin-top: 5px;
`;

export const FlatList = styled.FlatList`
  width: 90%;
`;
