import { Imagem, Titulos } from './styles'
import bannerImg from '../../assets/images/bg.png'
import Tag from '../Tag'
import { HeaderBar } from './styles'

import logo from '../../assets/images/logo.png'

const Banner = () => (
  <div className="container">
    <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
      <HeaderBar>
        <img src={logo} alt="E-food" />
      </HeaderBar>
      {/* <Tag size="big">.</Tag> */}
      <Titulos>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </Titulos>
    </Imagem>
  </div>
)

export default Banner
