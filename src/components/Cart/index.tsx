import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Menu'
import {
  ButtonCart,
  CartContainer,
  CartItem,
  DescricaoItem,
  ListaItem,
  Overlay,
  SideBar
} from './styles'

import delet from '../../assets/images/delete.svg'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ListaItem>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
                <img
                  onClick={() => removeItem(item.id)}
                  src={delet}
                  alt="Botao Delete"
                />
              </div>
            </CartItem>
          ))}
        </ListaItem>
        <DescricaoItem>
          Total <span>{formataPreco(getTotalPrice())} </span>
        </DescricaoItem>

        <ButtonCart title="Clique aqui para continuar com a compra">
          Continuar a entrega
        </ButtonCart>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
