import { Imagem, Restaurante, Titulos } from './styles'
import bgImage from '../../assets/images/bgImage.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bgImage})` }}>
    <Titulos>
      <i>Italiana</i>
    </Titulos>

    <Restaurante>La Dolce Vita Trattoria</Restaurante>
  </Imagem>
)

export default Banner
