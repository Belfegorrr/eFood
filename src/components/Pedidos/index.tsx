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

type Props = {
  foto: string
  nome: string
  preco: number
  descricao: string
  porcao: string
}

const Pedidos = ({ foto, nome, preco, descricao, porcao }: Props) => {
  const [modalEstaAberto, setmodalEstaAberto] = useState(false)

  console.log()

  return (
    <>
      <div className="container">
        <CardPedido>
          <img src={foto} alt="Backgroud do Pedido" />
          <TituloMenu onClick={() => setmodalEstaAberto(true)}>
            {nome}
          </TituloMenu>
          {/* mudar descricao */}
          <DescricaoMenu>{descricao}</DescricaoMenu>
          <BotaoMenu onClick={() => setmodalEstaAberto(true)}>
            Mais Detalhes
          </BotaoMenu>
        </CardPedido>
        <Modal className={modalEstaAberto ? 'visivel' : ''}>
          <ModalContent>
            <div>
              <ModalImagem src={foto} alt="Imagem do pedido" />
            </div>
            <ModalPedido>
              <img
                src={close}
                alt="Close Icon"
                onClick={() => setmodalEstaAberto(false)}
              />
              <h2>{nome}</h2>
              <p>
                {descricao}
                <br />
                <br />
                Serve de {porcao}
              </p>
              <ModalBotao>Adicionar ao carrinho - R$ {preco}</ModalBotao>
            </ModalPedido>
          </ModalContent>
          <div className="overlay"></div>
        </Modal>
      </div>
    </>
  )
}

export default Pedidos
