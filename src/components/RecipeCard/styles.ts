import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled(RectButton)`
  margin: 15px 5px;
  background-color: ${({theme}) => theme.colors.light_green};
  border-radius: 20px;
  width: 45%;
  height: 130px;
  align-items: center;
  justify-content: center;
  border: .5px solid ${({theme}) => theme.colors.secondary_text};
  padding: 10px;
`;

export const CardTitle = styled.Text`
  margin-top: 10px;
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.secondary_400};
`

export const CardImage = styled.Image`
  width: 100%;
  height: 70%;
`