import { styled } from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  width: 100%;
  height: 300px;

  background-size: cover;
  font-weigth: bold;
  padding-top: 50px;

  .container {
    position: relative;
    padding-top
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

export const Titulos = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 36px;

  padding-top: 90px;
  color: ${cores.corDestaque};
`

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-evenly;
`
