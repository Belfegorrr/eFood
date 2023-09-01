import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import ProdutoLista from '../../components/ProdutoLista'

import Footer from '../../components/Footer'

export interface Cardapio {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Home = () => {
  const [promocoes, setPromocoes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))
  }, [])
  return (
    <>
      <Banner />
      <ProdutoLista restaurantes={promocoes} />
      <Footer />
    </>
  )
}
export default Home
