import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  margin-top: 38px;
  border-radius: 15px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({theme}) => theme.fonts.primary_700};
  color: ${({theme}) => theme.colors.primary_text};
  margin-left: 15px;
`

interface Recipe{
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export const RecipesList = styled(FlatList as new () => FlatList<Recipe>)`
`