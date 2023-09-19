import { useParams } from 'react-router-dom'
import { useGetFeaturedRestaurantMenuQuery } from '../../services/api'

import BannerMenu from '../../components/BannerMenu'
import Menu from '../../components/Menu'

const Product = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetFeaturedRestaurantMenuQuery(id!)
  if (!restaurant) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <BannerMenu restaurant={restaurant} />
      <Menu items={restaurant.cardapio} />
    </>
  )
}

export default Product
