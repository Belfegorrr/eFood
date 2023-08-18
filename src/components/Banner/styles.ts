import { styled } from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  width: 100%;
  height: 300px;

  background-size: cover;
  font-weight: bold;
  padding-top: 50px;

  .container {
    position: relative;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

export const Titulos = styled.h2`
  display: flex;
  justify-content: center;
  text-align: center;

  font-size: 36px;
  margin-top: 90px;

  color: ${cores.corHeader};
`

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
