import { styled } from 'styled-components'
import { cores } from '../../styles'

export const CardPedido = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;

  background-color: ${cores.corHeader};
  color: ${cores.branco};

  width: 320px;
  height: 338px;

  img {
    position: absolute;
    top: 5px;
    left: 8px;

    width: 304px;
    height: 167px;
  }
`
export const BotaoMenu = styled.button`
  width: 304px;
  height: 24px;

  margin: 10px 0 10px 8px;
  border: none;

  background-color: ${cores.corBody};
  color: ${cores.corHeader};
`
export const DescricaoMenu = styled.p`
  margin: 0 0 10px 8px;
  color: ${cores.corBody};
`
export const TituloMenu = styled.h3`
  margin: 10px 0 8px 8px;
  color: ${cores.corBody};
`
