import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BannerMenu from '../../components/BannerMenu'
import { Restaurante } from '../Home'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'

const Product = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <BannerMenu restaurant={restaurant} />
      <Menu items={restaurant.cardapio} />
      <Footer />
    </>
  )
}

export default Product
