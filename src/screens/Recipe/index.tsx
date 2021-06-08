import { useRoute } from '@react-navigation/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { useScrollToTop } from '@react-navigation/native';


import {
  Container,
  RecipeName,
  RecipePhoto,
  RecipeAttributes,
  Category,
  Area,
  Ingredients,
  IngredientsHeader,
  IngredientsHeaderText,
  Ingredient,
  Name,
  Quantity,
  Instructions,
  Instruction,
  InstructionsHeader,
  InstructionsHeaderText
} from './styles';

interface Params {
  item: { strMeal: string }
}

interface RecipeProps {
  strCategory: string;
  strArea: string;
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
}

export function Recipe(){
  const route = useRoute();
  const [recipe, setRecipe] = useState<RecipeProps>({} as RecipeProps);
  const [loading, setLoading] = useState(false);
  let { item } = route.params as Params
  const ref = React.useRef(null);
  useScrollToTop(ref);

  async function getRecipe() {
    try {
      setLoading(true)
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item.strMeal}`)
      setRecipe(data.meals[0])
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getRecipe()
  }, [item])

  return (
    <Container 
      showsVerticalScrollIndicator={false} 
      ref={ref}
    >
      {
        recipe.strCategory &&
        <>
          <RecipeName>{recipe.strMeal}</RecipeName>
          <RecipePhoto 
            source={{uri: recipe.strMealThumb}}
          />
          <RecipeAttributes>
            <Category>{recipe.strCategory}</Category>
            <Area>{recipe.strArea}</Area>
          </RecipeAttributes>
          <IngredientsHeader>
            <IngredientsHeaderText>Ingredients</IngredientsHeaderText>
            <MaterialCommunityIcons name="silverware-fork-knife" size={24} color="black" />
          </IngredientsHeader>
          <Ingredients>
            {
              recipe.strIngredient1 ?            
              <Ingredient>
                <Name>{recipe.strIngredient1}</Name>
                <Quantity>{recipe.strMeasure1}</Quantity>
              </Ingredient> : null
            }
            {
              recipe.strIngredient2 ?           
              <Ingredient>
                <Name>{recipe.strIngredient2}</Name>
                <Quantity>{recipe.strMeasure2}</Quantity>
              </Ingredient> : null
            }
            {
              recipe.strIngredient3 ?             
              <Ingredient>
                <Name>{recipe.strIngredient3}</Name>
                <Quantity>{recipe.strMeasure3}</Quantity>
              </Ingredient> : null
            }
            {
              recipe.strIngredient4 ?             
              <Ingredient>
                <Name>{recipe.strIngredient4}</Name>
                <Quantity>{recipe.strMeasure4}</Quantity>
              </Ingredient> : null
            }
            {
              recipe.strIngredient5 ?            
              <Ingredient>
                <Name>{recipe.strIngredient5}</Name>
                <Quantity>{recipe.strMeasure5}</Quantity>
              </Ingredient> : null
            }
            {
              recipe.strIngredient6 ?            
              <Ingredient>
                <Name>{recipe.strIngredient6}</Name>
                <Quantity>{recipe.strMeasure6}</Quantity>
              </Ingredient> : null
            }
            {
              recipe.strIngredient7 ?             
              <Ingredient>
                <Name>{recipe.strIngredient7}</Name>
                <Quantity>{recipe.strMeasure7}</Quantity>
              </Ingredient> : null
            }
            {
              recipe.strIngredient8 ?             
              <Ingredient>
                <Name>{recipe.strIngredient8}</Name>
                <Quantity>{recipe.strMeasure8}</Quantity>
              </Ingredient> : null
            }
            {
              recipe.strIngredient9 ?             
              <Ingredient>
                <Name>{recipe.strIngredient9}</Name>
                <Quantity>{recipe.strMeasure9}</Quantity>
              </Ingredient> : null
            }
            {
              recipe.strIngredient10 ?            
              <Ingredient>
                <Name>{recipe.strIngredient10}</Name>
                <Quantity>{recipe.strMeasure10}</Quantity>
              </Ingredient> : null
            }
            {
              recipe.strIngredient11 ?           
              <Ingredient>
                <Name>{recipe.strIngredient11}</Name>
                <Quantity>{recipe.strMeasure11}</Quantity>
              </Ingredient> : null
            }
            {
              recipe.strIngredient12 ?             
              <Ingredient>
                <Name>{recipe.strIngredient12}</Name>
                <Quantity>{recipe.strMeasure12}</Quantity>
              </Ingredient> : null
            }
            {
              recipe.strIngredient13 ?            
              <Ingredient>
                <Name>{recipe.strIngredient13}</Name>
                <Quantity>{recipe.strMeasure13}</Quantity>
              </Ingredient> : null
            }
            {
              recipe.strIngredient14 ?            
              <Ingredient>
                <Name>{recipe.strIngredient14}</Name>
                <Quantity>{recipe.strMeasure14}</Quantity>
              </Ingredient> : null
            }
            {
              recipe.strIngredient15 ?             
              <Ingredient>
                <Name>{recipe.strIngredient15}</Name>
                <Quantity>{recipe.strMeasure15}</Quantity>
              </Ingredient> : null
            }
            {
              recipe.strIngredient16 ?        
              <Ingredient>
                <Name>{recipe.strIngredient2}</Name>
                <Quantity>{recipe.strMeasure2}</Quantity>
              </Ingredient> : null
            }
            {
              recipe.strIngredient17 ?             
              <Ingredient>
                <Name>{recipe.strIngredient17}</Name>
                <Quantity>{recipe.strMeasure17}</Quantity>
              </Ingredient> : null
            }
            {
              recipe.strIngredient18 ?             
              <Ingredient>
                <Name>{recipe.strIngredient18}</Name>
                <Quantity>{recipe.strMeasure18}</Quantity>
              </Ingredient> : null
            }
            {
              recipe.strIngredient19 ?          
              <Ingredient>
                <Name>{recipe.strIngredient19}</Name>
                <Quantity>{recipe.strMeasure19}</Quantity>
              </Ingredient> : null
            }
            {
              recipe.strIngredient20 ?            
              <Ingredient>
                <Name>{recipe.strIngredient20}</Name>
                <Quantity>{recipe.strMeasure20}</Quantity>
              </Ingredient> : null
            }
          </Ingredients>

          <InstructionsHeader>
            <InstructionsHeaderText>Instructions</InstructionsHeaderText>
            <AntDesign name="infocirlceo" size={24} color="black" />
          </InstructionsHeader>
          <Instructions>
          {
            recipe.strInstructions
              .split('.')
              .filter(Boolean)
              .map(s => s.trim())
              .map((instruction) => (
                <Instruction key={instruction}>
                  - { instruction }
                </Instruction>
              ))
          }
          </Instructions>
        </>
      }
    </Container>
  )
}