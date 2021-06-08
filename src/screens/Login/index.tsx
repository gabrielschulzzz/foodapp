import React from 'react'

import User from '../../assets/user.svg'

import {
  Container
} from './styles';

export function Login(){
  return (
      <Container>
        <User           
          width={260}
          height={298}
        />
      </Container>
  );
}