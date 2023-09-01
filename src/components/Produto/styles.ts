import { styled } from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  position: relative;
  background: ${cores.branco};
  margin-top: 40px;
  border: solid 1px;

  .capa {
    width: 472px;
    height: 217px;
  }
`

export const Titutlo = styled.h3`
  display: block;

  font-weight: bold;
  font-size: 18px;
  text-decoration: none;

  margin-left: 5px;
  margin-top: 2px;
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
  display: block;

  margin-top: 16px;
  margin-bottom: 16px;
  padding: 7px;

  font-size: 14px;
  line-height: 22px;
`
