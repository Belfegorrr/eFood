import { Link } from 'react-router-dom'

import { BannerBg, HeaderBar, Image, TituloMenu } from './styles'

import logo from '../../assets/images/logo.png'
import bannerImg from '../../assets/images/bg.png'

import { Restaurante } from '../../pages/Home'

import { open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

type Props = {
  restaurant: Restaurante
}

const BannerMenu = ({ restaurant }: Props) => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }
  return (
    <div className="container">
      <Image style={{ backgroundImage: `url(${bannerImg})` }}>
        <HeaderBar>
          <Link to="/">Restaurantes</Link>
          <img src={logo} alt="Logo" />
          <a onClick={openCart}>0 produto(s) no carrinho</a>
        </HeaderBar>
        <BannerBg
          style={{
            backgroundImage: `url(${restaurant.capa})`
          }}
        >
          <TituloMenu>
            <h3>
              <i>{restaurant.tipo}</i>
            </h3>
            <h2>{restaurant.titulo}</h2>
          </TituloMenu>
        </BannerBg>
      </Image>
    </div>
  )
}

export default BannerMenu
