import { Restaurante } from '../../pages/Home/index'
import Restaurant from '../Restaurant/index'
import { Container, List } from './styles'

//Configuração da tipagem das propriedades.
export type Props = {
  restaurantes: Restaurante[]
}

//Const principal do container de cards.
const RestaurantsList = ({ restaurantes }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurantes.map((restaurante) => (
          <Restaurant
            key={restaurante.id}
            id={restaurante.id}
            nota={restaurante.avaliacao}
            description={restaurante.descricao}
            image={restaurante.capa}
            tipo={restaurante.tipo}
            name={restaurante.titulo}
            destaque={restaurante.destacado}
          />
        ))}
      </List>
    </div>
  </Container>
)

//Exportações
export default RestaurantsList
