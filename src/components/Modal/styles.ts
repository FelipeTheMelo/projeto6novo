import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
`;

export const ModalContainer = styled.div`
    background: #fff;
    width: 600px;
    padding: 24px;
    border-radius: 8px;
    position: relative;
`;

export const CloseButton = styled.button`
    position: absolute;
    right: 16px;
    top: 16px;
    background: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
`;

export const ModalTitle = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 20px;
    margin: 0;
`;

export const ModalDescription = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    margin-top: 16px;
`;

export const ModalPrice = styled.span`
    display: block;
    margin-top: 16px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 16px;
`;

export const AddButton = styled.button`
    margin-top: 16px;
    padding: 8px 12px;
    background-color: #e66767;
    color: #fff;
    border: none;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    cursor: pointer;
`;