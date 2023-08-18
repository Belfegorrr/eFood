import Produto from '../Produto'
import { Container, Lista } from './styles'

const ProdutoLista = () => (
  <Container>
    <div className="container">
      <Lista>
        <Produto />
        <Produto />
      </Lista>
    </div>
  </Container>
)
export default ProdutoLista
