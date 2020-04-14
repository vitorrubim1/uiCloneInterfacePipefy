import React from 'react';

import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'

import GlobalStyle from './styles/global';

import Header from './components/Header/index'; //HEADER DA APLICAÇÃO
import Board from './components/Board/index'; //BOARD DA APLICAÇÃO

function App(){
  return(
  <DndProvider backend={HTML5Backend}> {/*UTILIZANDOA A API DE DRAG AND DROP DO HTML5*/} 
  {/* E NO LUGAR DO DndProvider PODE SER O FRAGMENT <> </>, UMA DIV QUE ENGLOBA TUDO QUE
  É MOSTRADO, MAS NÃO É EXIBIDA*/}
      <Header />
      <Board />

      <GlobalStyle />
  </DndProvider>
  );
}


export default App;
