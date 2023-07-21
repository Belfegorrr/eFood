import Banner from './components/Banner'
import Header from './components/Header'
import ProdutoLista from './components/ProdutoLista'
import { GlobalCss, Container } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
        <Banner />
        <ProdutoLista title="Promoções" />
      </Container>
    </>
  )
}
export default App
