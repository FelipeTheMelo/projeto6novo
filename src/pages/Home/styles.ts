import styled from "styled-components";

export const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

/* HERO */
export const HeroSection = styled.section`
  position: absolute;
  top: -24px;
  width: 2031.81px;
  height: 384px;
  background-color: #ffebd9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoHero = styled.img`
  width: 125px;
  height: 57.5px;
  margin-bottom: 20px;
`;

export const HeroTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 36px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
`;

/* LISTAGEM */
export const Listagem = styled.section`
  position: absolute;
  top: 440px;
  left: 171px;
  width: 1024px;
  height: 1290px;
  background-color: #fff8f2;
  border: 1px solid #ccc;
`;

/* RODAPÉ */
export const Rodape = styled.footer`
  position: absolute;
  top: 1850px;
  width: 1366px;
  height: 298px;
  background-color: #ffebd9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoFooter = styled.img`
  width: 125px;
  height: 57.5px;
  margin-bottom: 20px;
`;

export const RedesSociais = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const TextoFooter = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 100%;
  text-align: center;
  color: #000;
`;