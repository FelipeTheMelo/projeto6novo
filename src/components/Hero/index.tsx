import React from 'react';
import { Container, Logo, Text } from './styles';
import logoImg from '../../assets/logo.png';

const Hero: React.FC = () => {
    return (
        <Container>
        <Logo src={logoImg} alt="EFOOD Logo" />
        <Text>Viva experiências gastronômicas<br />no conforto da sua casa</Text>
        </Container>
    );
};

export default Hero;