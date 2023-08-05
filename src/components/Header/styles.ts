import { styled } from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.corDestaque};

  display: flex;
`

// parte 2//////
export const Links = styled.ul`
  margin-left: 40px;
`
//parte 2/////
export const LinkItem = styled.li`
  margin-right: 16px;

  a {
    color: ${cores.branco};
    text-decoration: none;
    font-weight: bold;
  }
`
