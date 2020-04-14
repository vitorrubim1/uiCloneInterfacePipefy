import React from 'react';

import { loadLists } from '../../services/api'; //API DAS FUNÇÕES COM OS DADOS

import List from '../List'; //IMPORTANDO AS LISTAS, QUE É OQ VAI TER CONTÉUDO

import { Container } from './styles';

const lists = loadLists(); //AS LISTAS DE DENTRO DA API 

export default function Board() {
  return (
    <Container>
      {lists.map(list => <List key={list.title} data={list}/>)}     
      {/*TODO MAP PRECISA DE UMA key*/}
    </Container>
  );
}
