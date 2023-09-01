import Produto from '../Produto'
import { Restaurante } from '../../pages/Home'

import { Container, Lista } from './styles'

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
            title={restaurante.titulo}
            category={restaurante.tipo}
            description={restaurante.descricao}
            image={restaurante.capa}
            infos={restaurante.avaliacao}
          />
        ))}
      </Lista>
    </div>
  </Container>
)
export default ProdutoLista
