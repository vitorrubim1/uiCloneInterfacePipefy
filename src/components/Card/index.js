import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd'; //DRAG AND DROP

import BoardContext from '../Board/context'; 

import { Container, Label } from './styles';

export default function Card({ data, index, listIndex }) {

  const ref = useRef();
  const { move } = useContext(BoardContext);

  {/*dragRef É A REFERENCIA DO ELEMENTO QUE SERÁ ARRASTADO*/}
  const [{isDragging}, dragRef] = useDrag({
    item: { type: 'CARD', index, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  });
  {/*collect: COLETAR INFORMAÇÕES SOBRE O DRAG, EX: SE ESTA SENDO ARRASTADO AQUELE ITEM NO MOMENTO*/}


  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor){
      //item: QUAL O CARD QUE EU ARRASTO, monitor: INFORMAÇOES

      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex; //A LISTA QUE RECEBE A INFORMAÇAO

      const draggedIndex = item.index; //QUAL O INDEX DO ITEM Q TA SENDO CARREGADO
      const targetIndex = index; //O CARD "ALVO"

      if(draggedIndex === targetIndex && draggedListIndex === targetListIndex){
        return;
      }
      
      //TAMANHO DO ELEMENTO
      const targetSize = ref.current.getBoundingClientRect();
      //POSIÇAO CENTRAL DO CARD
      const targetCenter = (targetSize.bottom - targetSize.top) /2;
      //DISTANCIA QUE EU ARRASTEI DO EIXO Y
      const draggedOffset = monitor.getClientOffset();
      //O QUANTO FOI MOVIDO PRO CARD "ALVO"
      const draggedTop = draggedOffset.y - targetSize.top;

      /*
        SE O draggedIndex FOR MENOR QUE O targetIndex, OU SEJA SE O ITEM QUE ESTOU
        ARRASTANDO ELE VEM ANTES DO ITEM "ALVO" E A POSIÇÃO DO draggedTop FOR MENOR
        QUE O CENTRO DO ITEM (targetCenter) EU NÃO VOU FAZER NADA, EVITANDO
        CALCULOS BESTAS
      */ 
      
      if(draggedIndex < targetIndex && draggedTop < targetCenter){
        return;
      }

      //AGORA A MESMA COISA PRO ITEM QUE ESTIVER DEPOIS, E FOR ARRASTADO PRA DPS
      if(draggedIndex > targetIndex && draggedTop > targetCenter){
        return;
      }
      
      //QUAL ITEM ESTOU MOVENDO, E PARA ONDE QUE ESTOU MOVENDO ELE
      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);
      
      //TIRANDO O BUG
      item.index = targetIndex;
      item.listIndex = targetListIndex;

    }
  });
  {/*accept: PROPRIEDADE OBRIGATÓRIA, PARA QUE SEJA POSSIVEL ARRASTAR CARDS PRA CIMA DE CARDS*/}

  //ISSO PARA PODER PASSAR PARA O CONTAINER TANTO A REFERENCIA DO DRAG QUANTO DO DROP
  dragRef(dropRef(ref));
  
  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        {data.labels.map(label => <Label key={label} color={label} />)}
        
      </header>
      <p>{ data.content }</p>

      { data.user && <img src={data.user} alt=""/>}
      {/*PARA MOSTRAR ESTA INFORMAÇÃO SOMENTE SE HOUVER AVATAR*/}
    </Container>
  );
}
