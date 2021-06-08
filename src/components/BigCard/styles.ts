import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled(RectButton)`
  width: 100%;
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 15px;
  background-color: ${({theme}) => theme.colors.background}
`;

export const CardImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 15px;
`

export const MealName = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_400};
  font-size: ${RFValue(14)}px;
  width: 68%;
`
