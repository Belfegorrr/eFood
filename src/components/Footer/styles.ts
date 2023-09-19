import { styled } from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${cores.corBody};

  .logo {
    margin: 50px 0 20px 0;
  }
  .social--links {
    margin: 0 5px 40px 5px;
  }
`
export const DescricaoFooter = styled.p`
  width: 480px;
  margin: 40px 0;

  font-weight: 400;
  font-size: 10px;
  line height: 11.72px;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    width: 90vw;
    font-size: 11px;
  }
`
