import { styled } from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.corDestaque};
  color: ${cores.corHeader};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weigth: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  display: inline-block;
`