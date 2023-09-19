import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Image = styled.div`
  object-fit: cover;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-size: cover;
  font-weight: bold;
  padding-top: 50px;

  a {
    text-decoration: none;
    color: ${cores.corHeader};
    font-size: 18px;
    font-weight: 900;
  }
`

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  a {
    cursor: pointer;
  }
`
export const BannerBg = styled.div`
  width: 100%;
  height: 300px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${cores.branco};
`
export const TituloMenu = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;

  h3 {
    font-weight: 100;
    position: absolute;
    font-size: 32px;
    top: 30px;
    left: 170px;
  }
  h2 {
    font-weight: bold;
    position: absolute;
    font-size: 32px;
    top: 240px;
    left: 170px;
  }
`
