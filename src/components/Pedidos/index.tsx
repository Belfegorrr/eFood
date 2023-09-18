import { useState } from 'react'

import {
  BotaoMenu,
  CardPedido,
  DescricaoMenu,
  Modal,
  ModalBotao,
  ModalContent,
  ModalImagem,
  ModalPedido,
  TituloMenu
} from './styles'

import close from '../../assets/images/close.svg'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { Cardapio } from '../../pages/Home'
import { useParams } from 'react-router-dom'

type Props = {
  id: number
  foto: string
  nome: string
  preco: number
  descricao: string
  porcao: string
}
interface ModalState {
  isVisible: boolean
}

const Pedidos = ({ foto, nome, preco, descricao, porcao }: Props) => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const [selectedProduct, setSelectedProduct] = useState<Cardapio>()
  const addToCart = () => {
    dispatch(add(selectedProduct!))
    dispatch(open())
    setModal({
      isVisible: false
    })
  }

  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 123) {
      return descricao.slice(0, 120) + '...'
    }
    return descricao
  }

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }
  const openModal = () => {
    setSelectedProduct(selectedProduct!)
    setModal({
      isVisible: true
    })
  }

  return (
    <>
      <div className="container">
        <CardPedido>
          <img src={foto} alt="Backgroud do Pedido" />
          <TituloMenu onClick={() => openModal()}>{nome}</TituloMenu>
          <DescricaoMenu>{getDescricao(descricao)}</DescricaoMenu>
          <BotaoMenu onClick={() => openModal()}>Mais Detalhes</BotaoMenu>
        </CardPedido>
        <Modal className={modal.isVisible ? 'visivel' : ''}>
          <ModalContent>
            <div>
              <ModalImagem src={foto} alt="Imagem do pedido" />
            </div>
            <ModalPedido>
              <img src={close} alt="Close Icon" onClick={() => closeModal()} />
              <h2>{nome}</h2>
              <p>
                {descricao}
                <br />
                <br />
                Serve {porcao}
              </p>
              <ModalBotao onClick={addToCart}>
                Adicionar ao carrinho - {formataPreco(preco)}
              </ModalBotao>
            </ModalPedido>
          </ModalContent>
          <div onClick={() => closeModal()} className="overlay"></div>
        </Modal>
      </div>
    </>
  )
}

export default Pedidos
