import styled from 'styled-components'

export const Container = styled.div`
    background: #FFEBD9;
    min-height: 100vh;
    padding: 24px 330px 40px 24px; /* reserva área do sidebar */
`

export const Title = styled.h2`
    color: #E66767; margin-bottom: 16px; text-align: center;
`

export const Field = styled.input`
    display: block; width: 100%; max-width: 560px;
    padding: 10px 12px; margin: 8px 0;
    border-radius: 6px; border: 1px solid #e5c6b0;
`

export const Button = styled.button`
    background: #E66767; color: #FFEBD9;
    border: none; border-radius: 6px; padding: 10px 16px;
    font-weight: 700; cursor: pointer; margin-top: 12px;
    &:disabled { opacity: .5; cursor: not-allowed; }
`