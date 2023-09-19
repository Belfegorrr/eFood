import { useGetFeaturedRestaurantQuery } from '../../services/api'

import Banner from '../../components/Banner'
import ProdutoLista from '../../components/ProdutoLista'

export interface Cardapio {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Home = () => {
  const { data: restaurantes } = useGetFeaturedRestaurantQuery()

  if (restaurantes) {
    return (
      <>
        <Banner />
        <ProdutoLista restaurantes={restaurantes} />
      </>
    )
  }
  return <h3>Carregando</h3>
}
export default Home
