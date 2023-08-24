import { BannerBg, HeaderBar, Image, TituloMenu } from './styles'

import logo from '../../assets/images/logo.png'
import bannerImg from '../../assets/images/bg.png'
import bgImage from '../../assets/images/bgImage.png'
import { Link } from 'react-router-dom'

const BannerMenu = () => (
  <div className="container">
    <Image style={{ backgroundImage: `url(${bannerImg})` }}>
      <HeaderBar>
        <Link to="/">Restaurantes</Link>
        <img src={logo} alt="Logo" />
        <a href="#">0 produto(s) no carrinho</a>
      </HeaderBar>
      <BannerBg style={{ backgroundImage: `url(${bgImage})` }}>
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

export default BannerMenu
