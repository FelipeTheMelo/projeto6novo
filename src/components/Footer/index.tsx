import React from 'react';
import { Container, Logo, Socials, SocialIcon, FooterText } from './styles';
import logoImg from '../../assets/logo.png';
import facebookIcon from '../../assets/Facebook.png';
import instagramIcon from '../../assets/instagram.png';
import twitterIcon from '../../assets/twitter.png';

const Footer: React.FC = () => {
    return (
        <Container>
        <Logo src={logoImg} alt="EFOOD Logo" />
        <Socials>
            <SocialIcon src={facebookIcon} alt="Facebook" />
            <SocialIcon src={instagramIcon} alt="Instagram" />
            <SocialIcon src={twitterIcon} alt="Twitter" />
        </Socials>
        <FooterText>
            A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela
            entrega, qualidade dos produtos é toda do estabelecimento contratado.
        </FooterText>
        </Container>
    );
};

export default Footer;