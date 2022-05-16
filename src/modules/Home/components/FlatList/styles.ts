import styled from 'styled-components/native';
import vacinne from '~/shared/assets/vaccine.png';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.Colors.WHITE};
  margin-top: 30px;
  padding: 10px 20px;
  border-radius: 20px;
`;

export const ContainerInfoCitizen = styled.View`
  flex: 1;
`;

export const ContainerVacinne = styled.View``;

export const NameCitizen = styled.Text`
  color: ${({ theme }) => theme.Colors.NAME_CITIZEN};
  font-weight: bold;
  font-size: 18px;
`;

export const InformationCitizenCPF = styled.Text`
  color: ${({ theme }) => theme.Colors.BLACK};
  font-size: 13px;

  margin-top: 15px;
`;

export const InformationCitizenBirthday = styled.Text`
  color: ${({ theme }) => theme.Colors.BLACK};
  font-size: 13px;
`;

export const VacinneImage = styled.Image.attrs({ source: vacinne })`
  width: 38px;
  height: 38px;
`;

export const InformationCitizenDose = styled.Text`
  color: ${({ theme }) => theme.Colors.BLACK};
  font-size: 13px;

  margin-top: 5px;
`;

export const ActivityIndicatorLoading = styled.ActivityIndicator.attrs(
  ({ theme }) => ({
    size: 'large',
    color: theme.Colors.ACTIVITY_INDICATOR,
  }),
)``;

export const FlatList = styled.FlatList`
  width: 90%;
  margin-top: 10px;
`;
