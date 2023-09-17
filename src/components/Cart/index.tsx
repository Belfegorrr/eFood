import Button from '../Button'
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
import bgitem from '../../assets/images/image 3.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ListaItem>
          <CartItem>
            <img src={bgitem} alt="" />
            <div>
              <h3>Nome do jogo</h3>
              <p>R$ 60,90</p>
              <img src={delet} alt="" />
            </div>
          </CartItem>
        </ListaItem>
        <DescricaoItem>
          Total <span>R$ 250,00 </span>
        </DescricaoItem>

        <ButtonCart title="Clique aqui para continuar com a compra">
          Continuar a entrega
        </ButtonCart>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
