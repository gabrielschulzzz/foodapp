import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  CardTitle,
  CardImage
} from './styles';

interface Props extends RectButtonProps {
  image: string;
  title: string;
}

export function RecipeCard({ image, title, ...rest }:Props){
  return (
      <Container {...rest}>
        <CardImage 
          resizeMode='contain'
          source={{ uri: image }} 
        />
        <CardTitle>{title}</CardTitle>
      </Container>
  );
}