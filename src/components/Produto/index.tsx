import Button from '../Button'
import Tag from '../Tag'
import { Card, Descricao, Titutlo } from './styles'

type Props = {
  title: string
  category: string
  description: string
  infos: string
  image: string
}

const Produto = ({ title, category, description, infos, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titutlo>{title}</Titutlo>
    <Tag>{category}</Tag>
    <Descricao>{description}</Descricao>
    <div>{infos}</div>
    <Button type="button" title="nova">
      Saiba mais
    </Button>
  </Card>
)

export default Produto
