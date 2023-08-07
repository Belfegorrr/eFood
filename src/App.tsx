import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCss } from './styles'

import Header from './components/Banner'
import Banner from './components/Banner'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Banner />
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
