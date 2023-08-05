import { Imagem, Titulos } from './styles'
import bannerImg from '../../assets/images/bg.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Titulos>Viva experiências gastronômicas no conforto da sua casa</Titulos>
    </div>
  </Imagem>
)

export default Banner
