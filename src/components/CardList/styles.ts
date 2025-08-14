import styled from 'styled-components';

export const Container = styled.div`
    width: 1024px;
    height: 1290px;
    background: #FFF8F2;
    position: relative;
    top: 440px;
    left: 171px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

export const Card = styled.div`
    width: 472px;
    background: #ffffff;
    border: 1px solid #E66767;
    display: flex;
    flex-direction: column;
`;

export const CardImage = styled.img`
    width: 472px;
    height: 217px;
    `;

export const CardContent = styled.div`
    width: 472px;
    height: 181px;
    background: #ffffff;
    padding: 10px;
`;

export const CardTitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #E66767;
    margin-bottom: 10px;
`;

export const CardDescription = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #E66767;
`;