import Tag from '../Tag'
import { Card, Descricao, Titutlo } from './styles'

const Produto = () => (
  <Card>
    <img src="//placehold.it/472x217" alt="" />
    <Titutlo>La Dolce Vita Trattoria</Titutlo>
    <Tag>Categoria</Tag>
    {/* <Button>Saiba mais</Button> */}
    <Descricao>
      A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
      Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo
      no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor
      inesquecível. Peça já!
    </Descricao>
  </Card>
)

export default Produto
