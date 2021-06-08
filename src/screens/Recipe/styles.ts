import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
  margin-top: 28px;
  padding: 20px;
  margin-bottom: 10px;
`;

export const RecipeName = styled.Text`
  text-align: center;
  font-family: ${({theme}) => theme.fonts.primary_700};
  color: ${({theme}) => theme.colors.primary_text};
  font-size: ${RFValue(40)}px;
`

export const RecipePhoto = styled.Image`
  width: 200px;
  height: 200px;
  align-self: center;
  border-radius: 100px;
  margin-top: 20px;
`

export const RecipeAttributes = styled.View`
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  width: 80%;
  margin-top: 20px;
  padding: 18px;
  background-color: ${({theme}) => theme.colors.background};
  border-radius: 8px;
`

export const Category = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_400};
  font-size: ${RFValue(20)}px;
`

export const Area = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_400};
  font-size: ${RFValue(20)}px;
`

export const Ingredients = styled.View`
  margin-top: 10px;
  padding: 20px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.background};
  border-radius: 8px;
`

export const IngredientsHeader = styled.View`
  flex-direction: row;
  margin-top: 40px;
  align-items: center;
`

export const IngredientsHeaderText = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(20)}px;
  margin-right: 8px;
`

export const Ingredient = styled.View`
  margin: 10px 0;
`

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_400};
  color: ${({theme}) => theme.colors.primary_text};
  font-size: ${RFValue(16)}px;
  text-transform: capitalize;
`

export const Quantity = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_400};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.secondary_text};
`

export const InstructionsHeader = styled.View`
  flex-direction: row;
  margin-top: 40px;
  align-items: center;
`

export const InstructionsHeaderText = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(20)}px;
  margin-right: 8px;
`

export const Instructions = styled.View`
  margin-top: 10px;
  padding: 20px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.background};
  border-radius: 8px;
`

export const Instruction = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(14)}px;
  margin: 10px 0;
`