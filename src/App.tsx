import { GlobalCss } from './styles'

import Header from './components/Header/index'
import Banner from './components/Banner'

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Banner />
    </>
  )
}
export default App
