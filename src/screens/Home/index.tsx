import React from 'react'

import Cooking from '../../assets/cooking.svg'

import {
  Container,
  Subtitle,
  Title,
  ButtonConfirm,
  ButtonText,
  Header
} from './styles';

export function Home(){
  function handleLoginPage() {
    
  }

  return (
      <Container>
        <Cooking                         
          width={260}
          height={298}
        />
        <Header>
          <Subtitle>25k premium recipes</Subtitle>
          <Title>It's {'\n'}
            Cooking {'\n'}
            Time!
            </Title>
          <ButtonConfirm>
            <ButtonText>Get started</ButtonText>
          </ButtonConfirm>
        </Header>
      </Container>
  );
}