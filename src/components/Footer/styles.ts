import styled from 'styled-components';

export const Container = styled.div`
    width: 1366px;
    height: 298px;
    background: #FFEBD9;
    position: relative;
    top: 1850px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.img`
    width: 125px;
    height: 57.5px;
    margin-top: 10px;
`;

export const Socials = styled.div`
    display: flex;
    gap: 10px;
    margin: 20px 0;
`;

export const SocialIcon = styled.img`
    width: 24px;
    height: 24px;
`;

export const FooterText = styled.p`
    width: 480px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 10px;
    text-align: center;
    color: #000;
`;