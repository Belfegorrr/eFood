import { styled } from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const CardPedido = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;

  background-color: ${cores.corHeader};
  color: ${cores.branco};

  width: 320px;
  height: 338px;
  @media (min-width: ${breakpoints.mobile}) {
    width: 270px;
  }

  img {
    object-fit: cover;
    position: absolute;
    top: 5px;
    left: 8px;

    width: 304px;
    height: 167px;

    @media (min-width: ${breakpoints.mobile}) {
      width: 254px;
    }
  }
`
export const BotaoMenu = styled.button`
  width: 304px;
  height: 24px;

  margin: 10px 0 10px 8px;
  border: none;

  background-color: ${cores.corBody};
  color: ${cores.corHeader};

  @media (min-width: ${breakpoints.mobile}) {
    width: 90%;
  }
`
export const DescricaoMenu = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 0 0 10px 8px;
  color: ${cores.corBody};

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 13px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
  }
`
export const TituloMenu = styled.h3`
  margin: 0 0 8px 8px;
  color: ${cores.corBody};
`
