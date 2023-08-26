import Pedidos from '../Pedidos'
import { ContainerMenu, ListaPedidos } from './styles'

const Menu = () => (
  <ContainerMenu>
    <ListaPedidos>
      <Pedidos />
      <Pedidos />
      <Pedidos />
      <Pedidos />
      <Pedidos />
      <Pedidos />
    </ListaPedidos>
  </ContainerMenu>
)
export default Menu
