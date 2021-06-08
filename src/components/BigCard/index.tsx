import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  CardImage,
  MealName,
} from './styles';

interface Props extends RectButtonProps {
  image: string;
  title: string;
}

export function BigCard({ image, title, ...rest }: Props){
  return (
      <Container {...rest}>
        <CardImage 
          resizeMode='contain'
          source={{ uri: image }} 
        />
        <MealName>{title}</MealName>
      </Container>
  );
}