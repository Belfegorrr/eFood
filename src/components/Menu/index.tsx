import { Cardapio, Restaurante } from '../../pages/Home'
import Pedidos from '../Pedidos'
import { ContainerMenu, ListaPedidos } from './styles'

type Props = {
  items: Cardapio[]
}
const Menu = ({ items }: Props) => {
  return (
    <ContainerMenu>
      <ListaPedidos>
        {items.map((items, id) => (
          <Pedidos
            key={id}
            foto={items.foto}
            nome={items.nome}
            preco={items.preco}
            descricao={items.descricao}
            porcao={items.porcao}
          />
        ))}
      </ListaPedidos>
    </ContainerMenu>
  )
}
export default Menu
