import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCss } from './styles'

import Home from './pages/Home'
import ListaMenu from './pages/Menu'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/menu',
    element: <ListaMenu />
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
