import { HeaderBar, LinkItem, Links } from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar>
    <nav>
      <Links>
        <LinkItem>
          <a href="#">Restaurantes</a>
        </LinkItem>
      </Links>
    </nav>
    <img src={logo} alt="eFood" />
    <nav>
      <Links>
        <LinkItem>
          <a href="#">0 produto(s) no carrinho</a>
        </LinkItem>
      </Links>
    </nav>
  </HeaderBar>
)

export default Header
