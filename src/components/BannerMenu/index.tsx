import { Link } from 'react-router-dom'

import { BannerBg, HeaderBar, Image, TituloMenu } from './styles'

import logo from '../../assets/images/logo.png'
import bannerImg from '../../assets/images/bg.png'

import { Restaurante } from '../../pages/Home'

type Props = {
  restaurant: Restaurante
}

const BannerMenu = ({ restaurant }: Props) => {
  return (
    <div className="container">
      <Image style={{ backgroundImage: `url(${bannerImg})` }}>
        <HeaderBar>
          <Link to="/">Restaurantes</Link>
          <img src={logo} alt="Logo" />
          <a href="#">0 produto(s) no carrinho</a>
        </HeaderBar>
        <BannerBg
          style={{
            backgroundImage: `url(${restaurant.capa})`
          }}
        >
          <TituloMenu>
            <h3>
              <i>Italiana</i>
            </h3>
            <h2>La Dolce Vita Trattoria</h2>
          </TituloMenu>
        </BannerBg>
      </Image>
    </div>
  )
}

export default BannerMenu
