import React from 'react';

import { Container } from './styles';

/*
  COMPONENTE É TUDO AQUILO QUE PODE SER SEPARADO DA APLICAÇÃO
  SEM COMPROMETER O FUNCIONAMENTO, EX: HEADER, CARDS .. 
*/

export default function Header() {
  return (
    <Container>
      <h1>RocketFy</h1>
    </Container>
  );
}
