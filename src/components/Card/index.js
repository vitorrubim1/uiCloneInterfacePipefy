import React from 'react';

import { useDrag } from 'react-dnd'; //DRAG AND DROP

import { Container, Label } from './styles';

export default function Card({ data }) {

  {/*dragRef É A REFERENCIA DO ELEMENTO QUE SERÁ ARRASTADO*/}
  const [{isDragging}, dragRef] = useDrag({
    item: { type: 'CARD' },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  });
  {/*collect: COLETAR INFORMAÇÕES SOBRE O DRAG, EX: SE ESTA SENDO ARRASTADO AQUELE ITEM NO MOMENTO*/}

  return (
    <Container ref={dragRef} isDragging={isDragging}>
      <header>
        {data.labels.map(label => <Label key={label} color={label} />)}
        
      </header>
      <p>{ data.content }</p>

      { data.user && <img src={data.user} alt=""/>}
      {/*PARA MOSTRAR ESTA INFORMAÇÃO SOMENTE SE HOUVER AVATAR*/}
    </Container>
  );
}
