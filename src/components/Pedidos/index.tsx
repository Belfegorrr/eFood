import { useState } from 'react'
import bgpedido from '../../assets/images/image 3.png'
import close from '../../assets/images/close.svg'
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

const Pedidos = () => {
  const [modalEstaAberto, setmodalEstaAberto] = useState(false)

  return (
    <>
      <div className="container">
        <CardPedido>
          <img src={bgpedido} alt="Backgroud do Pedido" />
          <TituloMenu onClick={() => setmodalEstaAberto(true)}>
            Pizza Marguerita
          </TituloMenu>
          <DescricaoMenu>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </DescricaoMenu>
          <BotaoMenu onClick={() => setmodalEstaAberto(true)}>
            Adicionar ao carrinho
          </BotaoMenu>
        </CardPedido>
        <Modal className={modalEstaAberto ? 'visivel' : ''}>
          <ModalContent>
            <div>
              <ModalImagem src={bgpedido} alt="Imagem do pedido" />
            </div>
            <ModalPedido>
              <img
                src={close}
                alt="Close Icon"
                onClick={() => setmodalEstaAberto(false)}
              />
              <h2>Pizza Marguerita</h2>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
                <br />
                <br />
                Serve: de 2 a 3 pessoas
              </p>
              <ModalBotao>Adicionar ao carrinho - R$ 60,90</ModalBotao>
            </ModalPedido>
          </ModalContent>
          <div className="overlay"></div>
        </Modal>
      </div>
    </>
  )
}

export default Pedidos
