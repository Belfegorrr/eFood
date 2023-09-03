import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Restaurante } from '../../pages/Home'

import { BannerBg, HeaderBar, Image, TituloMenu } from './styles'

import logo from '../../assets/images/logo.png'
import bannerImg from '../../assets/images/bg.png'

const BannerMenu = () => {
  const [cardapio, setCardapio] = useState<Restaurante>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [])

  if (!cardapio) {
    return <h3>Carregando ...</h3>
  }
  console.log(cardapio)

  return (
    <div className="container">
      <Image style={{ backgroundImage: `url(${bannerImg})` }}>
        <HeaderBar>
          <Link to="/">Restaurantes</Link>
          <img src={logo} alt="Logo" />
          <a href="#">0 produto(s) no carrinho</a>
        </HeaderBar>
        <BannerBg
          style={{
            backgroundImage: `url(${cardapio.capa})`
          }}
        >
          <TituloMenu>
            <h3>
              <i>Italiana</i>
            </h3>
            <h2>La Dolce Vita Trattoria</h2>
          </TituloMenu>
        </BannerBg>
      </Image>
    </div>
  )
}

export default BannerMenu
