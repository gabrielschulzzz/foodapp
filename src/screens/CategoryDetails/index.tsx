import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios';
import { BigCard } from '../../components/BigCard';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';

import {
  Container,
  Title,
  RecipesList
} from './styles';

interface Params {
  item: {
    strCategory: string;
  }
}

interface RecipeProps{
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export function CategoryDetails(){
  const route = useRoute();
  const [recipe, setRecipe] = useState<RecipeProps[]>([])
  const [loading, setLoading] = useState(false);
  let { item } = route.params as Params
  const navigation = useNavigation()

  function handleRecipe(item: RecipeProps) {
    navigation.navigate('Recipe', { item })
  }

  async function getRecipes() {
    try {
      setLoading(true)
      const { data } = await axios.get(`http://www.themealdb.com/api/json/v1/1/filter.php?c=${item.strCategory}`)
      setRecipe(data.meals)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getRecipes()
  }, [item])


  return (
      <Container>
          <Title>Recipes</Title>

          {
            recipe.length > 1 && loading === false ?
            <RecipesList
              horizontal={false}
              showsVerticalScrollIndicator={false}
              data={recipe}
              keyExtractor={item => item.idMeal}
              renderItem={({ item }) =>
                <BigCard 
                  image={item.strMealThumb} 
                  title={item.strMeal}
                  onPress={() => handleRecipe(item)}
                />
              }
            />
            : <Title>Loading...</Title>
          }
      </Container>
  );
}