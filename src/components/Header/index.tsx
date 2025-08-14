import { Link } from 'react-router-dom'
import { Headerbar, Slogan } from './styles'
import effodLogo from '../../assets/logos/logo.png'
import background from '../../assets/pratos/background.png'

const Header = () => (
  <Headerbar style={{ backgroundImage: `url(${background})` }}>
    <div className="container">
      {/* logo */}
      <Link to="/">
        <img src={effodLogo} alt="Efood" />
      </Link>

      {/* links de menu */}
      <Slogan>Viva experiências gastronômicas no conforto da sua casa</Slogan>
    </div>
  </Headerbar>
)

//Exportações
export default Header
