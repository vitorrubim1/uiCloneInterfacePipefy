import React, { useState } from 'react';
import produce from 'immer';

import BoardContext from './context';

import { loadLists } from '../../services/api'; //API DAS FUNÇÕES COM OS DADOS

import List from '../List'; //IMPORTANDO AS LISTAS, QUE É OQ VAI TER CONTÉUDO

import { Container } from './styles';

const data = loadLists(); //AS LISTAS DE DENTRO DA API 

export default function Board() {

  const [lists, setLists] = useState(data);

  function move(fromList, toList, from, to){
    //FUNÇAO QUE MOVE O CARD
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from];

      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged)
    }))

    /*
      produce RECEBE UMA INFORMAÇÃO, QUE É A LISTA. O SEGUNDO PARAMETRO É UMA FUNÇÃO
      draft = rascunho. AGORA ESSE DRAFT É UMA COPIA DA LISTA, TODA ALTERAÇÃO QUE 
      HOUVER NO DRAFT, O PRODUCE COMPUTA NO LIST
    */
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
    {/*ESSE PROVIDER É PRA FORNECER UM VALOR PRO CONTEXTO*/}
      <Container>
        {lists.map((list, index) => <List key={list.title} index={index} data={list}/>)}     
        {/*TODO MAP PRECISA DE UMA key*/}
      </Container>
    </BoardContext.Provider>
  );
}
