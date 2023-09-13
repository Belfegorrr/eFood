import Button from '../Button'
import Tag from '../Tag'
import {
  Card,
  Descricao,
  Titutlo,
  NavLink,
  NavBar,
  TagDestacado
} from './styles'

import estrela from '../../assets/images/estrela.svg'

type Props = {
  id: number
  title: string
  category: string
  description: string
  infos: number
  image: string
  destacados: string[]
}

const Produto = ({
  id,
  title,
  category,
  description,
  infos,
  image,
  destacados
}: Props) => {
  return (
    <Card>
      <img src={image} alt={title} className="capa" />
      <NavBar>
        <NavLink to={`/menu/${id}`}>
          <Titutlo>{title}</Titutlo>
        </NavLink>
        <section className="classificacao">
          {infos}
          <img src={estrela} alt="classificaçao" />
        </section>
      </NavBar>
      <Tag>{category}</Tag>
      <div>
        {destacados.map((destacado) => (
          <TagDestacado key={destacado}>{destacado}</TagDestacado>
        ))}
      </div>
      <Descricao>{description}</Descricao>
      <Button type="link" title="Detalhes" to={`/menu/${id}`}>
        Saiba mais
      </Button>
    </Card>
  )
}

export default Produto
