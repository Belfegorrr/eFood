import { styled } from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.corHeader};
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`
export const LinkItem = styled.li`
  margin-right: 16px;

  a {
    color: ${cores.branco};
    text-decoration: none;
    font-weight: bold;
  }
`
