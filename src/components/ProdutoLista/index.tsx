import Produto from '../Produto'
import { Container, Lista } from './styles'

import jap from '../../assets/images/image 2.png'
import italiana from '../../assets/images/image 1.png'

const ProdutoLista = () => (
  <Container>
    <div className="container">
      <Lista>
        <Produto
          title="Hioki Sushi"
          category="Japonesa"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa!"
          image={jap}
          infos="4.9"
        />
        <Produto
          title="Hioki Sushi"
          category="Japonesa"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa!"
          image={italiana}
          infos="4.9"
        />
      </Lista>
    </div>
  </Container>
)
export default ProdutoLista
