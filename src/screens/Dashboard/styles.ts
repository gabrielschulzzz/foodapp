import styled from 'styled-components/native'
import { FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 32px;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({theme}) => theme.fonts.primary_700}
`

export const InputGroup = styled.View`
  background-color: ${({theme}) => theme.colors.gray};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  margin-top: 16px;
  border: .5px solid ${({theme}) => theme.colors.secondary_text}
`

export const Input = styled.TextInput`
  width: 100%;  
  font-size: ${RFValue(16)}px;
  margin-left: 10px;
`

export const SearchIcon = styled(Feather)`
	color: ${({theme}) => theme.colors.primary_text};
  font-size: ${RFValue(25)}px;
`

export const RecipeCardsWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

export const RecipeCardsList = styled(FlatList as new () => FlatList<Category>)`
`