import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCss } from './styles'

import Banner from './components/Banner'
import ProdutoLista from './components/ProdutoLista'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProdutoLista />
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
