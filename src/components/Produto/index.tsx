import { Card, Titutlo, Descricao } from './styles'

const Produto = () => (
  <Card>
    <img src="//placehold.it/304x167" />
    <Titutlo>Pizza Marguerita</Titutlo>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ex, totam
      illum nulla, rem fugiat tempora velit commodi illo deserunt cum alias
      esse? Explicabo vero excepturi assumenda esse libero cumque.
    </Descricao>
    <a href="#">Adicionar ao carrinho</a>
  </Card>
)

export default Produto
