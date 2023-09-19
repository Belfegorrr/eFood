import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  display: none;
  color: ${cores.corHeader};
  justify-content: flex-end;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &.is-open {
    display: flex;
  }
`
export const SideBar = styled.aside`
  max-width: 360px;
  width: 100%;
  background-color: ${cores.corHeader};
  z-index: 1;
`
export const ListaItem = styled.ul`
  display: flex;
  justify-content: center;
`
export const DescricaoItem = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 0 8px;
  color: ${cores.corBody};
  margin: 16px 8px;
`
export const ButtonCart = styled.button`
  max-width: 345px;
  width: 100%;

  border: none;

  color: ${cores.corHeader};
  background-color: ${cores.corBody};

  font-size: 16px;
  font-weight: bold;
  text-decoration: none;

  padding: 8px 16px;
  margin: 10px 7px 5px 7px;
`
export const CartItem = styled.li`
  position: relative;
  background-color: ${cores.corBody};
  justify-content: flex-start;
  display: flex;
  width: 344px;
  padding: 8px 0;
  margin: 8px 0;

  img {
    margin: 0 10px 0 7px;
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    p {
      margin: 16px 0;
    }
    img {
      position: absolute;
      top: 76px;
      right: 0;
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }
`
