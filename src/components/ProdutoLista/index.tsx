import Produto from '../Produto'
import { Container, Lista } from './styles'

import Restaurante from '../../models/Restaurante'

export type Props = {
  restaurantes: Restaurante[]
}

const ProdutoLista = ({ restaurantes }: Props) => (
  <Container>
    <div className="container">
      <Lista>
        {restaurantes.map((restaurante) => (
          <Produto
            key={restaurante.id}
            title={restaurante.title}
            category={restaurante.category}
            description={restaurante.description}
            image={restaurante.image}
            infos={restaurante.infos}
          />
        ))}
      </Lista>
    </div>
  </Container>
)
export default ProdutoLista
