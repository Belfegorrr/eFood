import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Restaurante } from '../Home'
import BannerMenu from '../../components/BannerMenu'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

const ListaMenu = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurante>()

  useEffect(() => {
    fetch(`fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <BannerMenu restaurant={restaurant} />
      <Menu />
      <Footer />
    </>
  )
}

export default ListaMenu
