import React from 'react';
import { Container, Card, CardImage, CardContent, CardTitle, CardDescription } from './styles';
import sushiImg from '../../assets/sushi.png';
import ladolceImg from '../../assets/ladolce.png';

interface CardData {
    title: string;
    description: string;
    image: string;
}

const cards: CardData[] = [
    {
        title: 'Hioki Sushi',
        description:
        'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
        image: sushiImg,
    },
    {
        title: 'La Dolce Vita',
        description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: ladolceImg,
    },
    {
        title: 'La Dolce Vita',
        description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: ladolceImg,
    },
    {
        title: 'La Dolce Vita',
        description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: ladolceImg,
    },
    {
        title: 'La Dolce Vita',
        description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: ladolceImg,
    },
    {
        title: 'La Dolce Vita',
        description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: ladolceImg,
    },
];

const CardList: React.FC = () => {
    return (
        <Container>
        {cards.map((card, index) => (
            <Card key={index}>
            <CardImage src={card.image} alt={card.title} />
            <CardContent>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
            </CardContent>
            </Card>
        ))}
        </Container>
    );
};

export default CardList;