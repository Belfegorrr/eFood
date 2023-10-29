import { Link } from 'react-router-dom'

import { BannerBg, HeaderBar, Image, TituloMenu } from './styles'

import logo from '../../assets/images/logo.png'
import bannerImg from '../../assets/images/bg.png'

import { Restaurante } from '../../pages/Home'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

type Props = {
  restaurant: Restaurante
}

const BannerMenu = ({ restaurant }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const toUpperCase = (tipo: string) => {
    if (tipo === restaurant.tipo) {
      return restaurant.tipo[0].toUpperCase() + restaurant.tipo.substring(1)
    }
  }

  const openCart = () => {
    dispatch(open())
  }
  return (
    <div className="container">
      <Image style={{ backgroundImage: `url(${bannerImg})` }}>
        <HeaderBar>
          <Link to="/" className="link-home">
            Restaurantes
          </Link>
          <img src={logo} alt="Logo" />
          <a onClick={openCart}>
            {items.length} {''} produto(s) <span>no carrinho</span>
          </a>
        </HeaderBar>
        <BannerBg
          style={{
            backgroundImage: `url(${restaurant.capa})`
          }}
        >
          <TituloMenu>
            <h3>
              <i>{toUpperCase(restaurant.tipo)}</i>
            </h3>
            <h2>{restaurant.titulo}</h2>
          </TituloMenu>
        </BannerBg>
      </Image>
    </div>
  )
}

export default BannerMenu
