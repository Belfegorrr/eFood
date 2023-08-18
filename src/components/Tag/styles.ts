import { styled } from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  position: absolute;
  top: 0;
  right: 0;

  background-color: ${cores.corHeader};
  color: ${cores.branco};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weigth: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  display: inline-block;
`
