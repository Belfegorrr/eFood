import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

import { ContainerFooter, DescricaoFooter } from './styles'

const Footer = () => (
  <div className="container">
    <ContainerFooter>
      <div>
        <img className="logo" src={logo} alt="Logo efood" />
      </div>
      <div>
        <img className="social--links" src={instagram} alt="Insta" />
        <img className="social--links" src={facebook} alt="Face" />
        <img className="social--links" src={twitter} alt="Twit" />
      </div>
      <DescricaoFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </DescricaoFooter>
    </ContainerFooter>
  </div>
)
export default Footer
