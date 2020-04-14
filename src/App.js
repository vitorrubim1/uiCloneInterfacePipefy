import React from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header/index'; //HEADER DA APLICAÇÃO
import Board from './components/Board/index'; //BOARD DA APLICAÇÃO

function App(){
  return(
  <> {/*FRAGMENT, UMA DIV QUE ENGLOBA TUDO QUE É MOSTRADO, MAS NÃO É EXIBIDA*/}
      <Header />
      <Board />

      <GlobalStyle />
  </>
  );
}


export default App;
