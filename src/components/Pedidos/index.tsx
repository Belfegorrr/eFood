import bgpedido from '../../assets/images/image 3.png'
import { BotaoMenu, CardPedido, DescricaoMenu, TituloMenu } from './styles'

const Pedidos = () => (
  <div className="container">
    <CardPedido>
      <img src={bgpedido} alt="Backgroud do Pedido" />
      <TituloMenu>Pizza Marguerita</TituloMenu>
      <DescricaoMenu>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </DescricaoMenu>
      <BotaoMenu>Adicionar ao carrinho</BotaoMenu>
    </CardPedido>
  </div>
)

export default Pedidos
