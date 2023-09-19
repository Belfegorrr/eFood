import { styled } from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  padding: 32px 0;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 500px;
  }
`

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 100px;
  margin-top: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    row-gap: 50px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 25px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    row-gap: 50px;
    margin-bottom: 50px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
