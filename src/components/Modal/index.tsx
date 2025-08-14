import {
    Overlay,
    ModalContainer,
    CloseButton,
    ModalTitle,
    ModalDescription,
    ModalPrice,
    AddButton
} from "./styles";

type ModalProps = {
    title: string;
    description: string;
    price: number;
    onClose: () => void;
};

export default function Modal({
    title,
    description,
    price,
    onClose
}: ModalProps) {
    return (
        <Overlay>
        <ModalContainer>
            <CloseButton onClick={onClose}>X</CloseButton>
            <ModalTitle>{title}</ModalTitle>
            <ModalDescription>{description}</ModalDescription>
            <ModalPrice>R$ {price.toFixed(2)}</ModalPrice>
            <AddButton>Adicionar ao carrinho</AddButton>
        </ModalContainer>
        </Overlay>
    );
    }