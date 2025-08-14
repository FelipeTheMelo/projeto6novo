import React from 'react';
import Hero from '../../components/Hero';
import CardList from '../../components/CardList';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
    return (
        <>
        <Hero />
        <CardList />
        <Footer />
        </>
    );
};

export default Home;