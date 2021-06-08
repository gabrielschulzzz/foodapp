import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

import { RecipeCard } from '../../components/RecipeCard';

import {
  Container,
  Title,
  InputGroup,
  Input,
  SearchIcon,
  RecipeCardsList,
} from './styles';

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

export function Dashboard(){
  const [categories, setCategories] = useState<Category[]>([])
  const navigation = useNavigation()

  useEffect(() => {
    async function getCategories() {
      try {
        const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        setCategories(data.categories)        
      } catch (error) {
       console.log(error)
    }
  }

    getCategories()
  }, [])

  function handleCategoryDetails(item: Category) {
    navigation.navigate('CategoryDetails', { item })
  }

  return (
      <Container>
          <Title>What would you{'\n'} 
          like to cook?</Title>
          <InputGroup>
            <SearchIcon name="search"/>
            <Input />
          </InputGroup>

          {
            categories.length > 1 ?
            <RecipeCardsList
              horizontal={false}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              data={categories}
              keyExtractor={item => item.idCategory}
              renderItem={({ item }) =>
                <RecipeCard 
                  image={item.strCategoryThumb} 
                  title={item.strCategory}
                  onPress={() => handleCategoryDetails(item)}
                />
              }
            />
            : <Title>Loading...</Title>
          }

      </Container>
  );
}