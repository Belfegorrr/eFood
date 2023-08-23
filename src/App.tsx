import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCss } from './styles'

import Home from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
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
