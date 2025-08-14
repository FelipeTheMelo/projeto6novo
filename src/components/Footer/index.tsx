import { Container, Copyright, FooterSection, Link, Links } from './styles'
import efoodLogo from '../../assets/logos/logo.png'
import instagramIcon from '../../assets/logos/instagram.png'
import facebookIcon from '../../assets/logos/Facebook.png'

//Const para controle de atualização do ano.
const currentYear = new Date().getFullYear()

//Const principal do rodapé.
const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <img src={efoodLogo} alt="Efood" />
        <Links>
          <li>
            <Link>
              <img src={instagramIcon} alt="Icone instagram" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={facebookIcon} alt="Icone facebook" />
            </Link>
          </li>
        </Links>
        <Copyright>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado. {currentYear} - &copy; efood Todos os
          direitos reservados.
        </Copyright>
      </FooterSection>
    </div>
  </Container>
)

//Exportações.
export default Footer
