import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background: ${cores.corHeader};
  padding: 8px;

  a {
    padding: 8px;
  }
`

export const Titutlo = styled.h2`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin: 16px 0 8px 0;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
