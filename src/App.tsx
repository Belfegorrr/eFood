import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCss } from './styles'

import Header from './components/Banner'
import Banner from './components/Banner'
import Produto from './components/Produto'
import ProdutoLista from './components/ProdutoLista'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProdutoLista title="Promoçoes" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container"></div>

      <RouterProvider router={rotas} />
    </>
  )
}
export default App
