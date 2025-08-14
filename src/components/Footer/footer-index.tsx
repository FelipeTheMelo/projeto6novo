//Arquivo de criação e configuração do rodapé da página.
import {
  Container,
  Copyright,
  FooterSection,
  Link,
  Links
} from './footer-styles'
import efoodLogo from '../../assets/images/pratos/efood-logo.png'
import instagramIcon from '../../assets/images/icones/instagram-icon.png'
import facebookIcon from '../../assets/images/icones/facebook-icon.png'

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
