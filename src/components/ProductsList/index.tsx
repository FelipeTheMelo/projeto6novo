import Product from '../Produtc/index'
import { Container, List } from './styles'
import { Cardapio } from '../../pages/Home/index'

//Configuração da tipagem das propriedades.
export type Props = {
  pratos: Cardapio[]
}

//Const principal do container de cards.
const ProductsList = ({ pratos }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {pratos.map((prato) => (
            <Product
              key={prato.id}
              id={prato.id}
              descricao={prato.descricao}
              nome={prato.nome}
              foto={prato.foto}
              porcao={prato.porcao}
              preco={prato.preco}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

//Exportações
export default ProductsList
