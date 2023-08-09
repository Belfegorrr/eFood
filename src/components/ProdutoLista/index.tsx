import Produto from '../Produto'
import { Container, Lista } from './styles'

type Props = {
  title: string
}

const ProdutoLista = ({ title }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <Lista>
        <Produto />
        <Produto />
      </Lista>
    </div>
  </Container>
)
export default ProdutoLista
