import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  margin-top: 32px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.View`
  margin-bottom: ${RFValue(40)}px;
`

export const Subtitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_700};
  color: ${({theme}) => theme.colors.secondary_text};
  text-transform: uppercase;
  font-size: ${RFValue(10)}px;
  letter-spacing: 2px;
`
export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_700};
  font-size: 60px;
`
export const ButtonConfirm = styled(RectButton)`
  width: 45%;
  background-color: ${({theme}) => theme.colors.green};
  border-radius: 36px;
  align-items: center;
  padding: 18px 35px;
  margin-top: 10px;
`
export const ButtonText = styled.Text`
  font-family:  ${({theme}) => theme.fonts.primary_700};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.background};
`