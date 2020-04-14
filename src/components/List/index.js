import React from 'react';

import { MdAdd } from 'react-icons/md'; //ICONES DO MATERIAL DESING

import Card from '../Card/index'; //CARD

import { Container } from './styles';

export default function List({ data }) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{ data.title }</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#FFF"/>
          </button>
        )}
      </header>
      <ul>
          { data.cards.map(card => <Card key={card.id} data={card} />) }
          {/*TODO MAP PRECISA DE UMA key*/}  
      </ul>
    </Container>
  );
}
