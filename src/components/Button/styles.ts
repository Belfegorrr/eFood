import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  border: none;
  color: ${cores.branco};
  background-color: ${cores.corHeader};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
`
export const ButtonLink = styled(Link)`
  color: ${cores.branco};
  background-color: ${cores.corHeader};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
`
