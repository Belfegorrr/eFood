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

/*-------------------------- */

export const Modal = styled.div`
  position: fixed;
  top: 100px;
  left: 300px;
  width: 100%;
  height: 100%;
`
export const ModalContent = styled.div`
  width: 1024px;
  height: 344px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${cores.corHeader};
  color: ${cores.branco};
`
export const ModalPedido = styled.div`
  position: relative;
  padding: 20px;

  img {
    position: absolute;
    top: 0;
    right: 25px;
  }

  h2 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 30px;
  }

  p {
    line-height: 22px;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 10px;
  }
`
export const ModalImagem = styled.img`
  margin-left: 30px;
  width: 280px;
  height: 280px;
  top: 0;
  right: 0;
`
export const ModalBotao = styled.button`
  border: none;
  width: 218px;
  height: 24px;
  padding: 2px;

  font-weight: 700;
  font-size: 14px;

  background-color: ${cores.corBody};
  color: ${cores.corHeader};
`
