import { styled } from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  position: relative;
  background: ${cores.branco};
  margin-top: 40px;
  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titutlo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-left: 5px;
  text-decoration: none;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${cores.corHeader};
`

export const NavBar = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;

  .classificacao {
    display: flex;
    align-items: flex-end;
  }
  img {
    margin: 0 10px 0 5px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`
