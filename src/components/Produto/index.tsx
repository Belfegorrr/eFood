import Button from '../Button'
import Tag from '../Tag'
import { Card, Descricao, Titutlo, NavLink, NavBar } from './styles'

import estrela from '../../assets/images/estrela.svg'

type Props = {
  title: string
  category: string
  description: string
  infos: number
  image: string
}

const Produto = ({ title, category, description, infos, image }: Props) => (
  <Card>
    <img src={image} alt={title} className="capa" />
    <NavBar>
      <NavLink to="/menu">
        <Titutlo>{title}</Titutlo>
      </NavLink>
      <section className="classificacao">
        {infos}
        <img src={estrela} alt="classificaçao" />
      </section>
    </NavBar>
    <Tag>{category}</Tag>
    <Descricao>{description}</Descricao>
    <Button type="button" title="nova">
      Saiba mais
    </Button>
  </Card>
)

export default Produto
