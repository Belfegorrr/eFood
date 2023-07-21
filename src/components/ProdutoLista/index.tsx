import Produto from '../Produto'
import { Container, Lista } from './styles'

type Props = {
  title: string
}

const ProdutoLista = ({ title }: Props) => (
  <Container>
    <h2>{title}</h2>
    <Lista>
      <Produto />
      <Produto />
      <Produto />
    </Lista>
  </Container>
)

export default ProdutoLista
