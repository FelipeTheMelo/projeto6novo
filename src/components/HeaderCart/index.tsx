import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootReducer } from '../../store/index'
import { Headerbar, Textos, TextCart } from './styles'
import effodLogo from '../../assets/logos/logo.png'
import background from '../../assets/pratos/background.png'
import { open } from '../../store/reducers/cart'

//Const principal do Cabeçalho.
const HeaderCart = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Headerbar style={{ backgroundImage: `url(${background})` }}>
      <div className="container">
        {/* Restaurantes */}
        <Textos to="/">Restaurantes</Textos>

        {/* logo */}
        <Link to="/">
          <img src={effodLogo} alt="Efood" />
        </Link>

        {/* Carrinho */}
        <TextCart onClick={openCart}>
          {items.length} produto(s) no carrinho
        </TextCart>
      </div>
    </Headerbar>
  )
}

//Exportações
export default HeaderCart
