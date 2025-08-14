import styled, { css } from 'styled-components'

export const Aside = styled.aside`
    position: fixed;
    right: 0; top: 0; bottom: 0;
    width: 300px;
    background: #FFEBD9;
    border-left: 1px solid #e5c6b0;
    padding: 20px;
    overflow-y: auto;
`

export const Title = styled.h2`
    color: #E66767; text-align: center; margin-top: 10px;
`

export const Item = styled.div`
    border-bottom: 1px solid #e5c6b0;
    padding: 10px 0; margin-bottom: 10px;
    color: #E66767;
`

export const Row = styled.div`
    display: flex; justify-content: space-between; align-items: center;
`

export const Name = styled.span` font-weight: 700; `
export const Qty = styled.span` opacity: 0.8; `
export const Price = styled.span` font-weight: 700; `

export const Total = styled.p`
    color: #E66767; font-size: 16px; font-weight: 900; margin: 20px 0;
`

export const Actions = styled.div`
    display: flex; gap: 10px; flex-direction: column;
`

export const Button = styled.button<{ variant?: 'ghost'; disabled?: boolean }>`
    border: none; cursor: pointer; border-radius: 6px;
    padding: 10px 16px; font-weight: 700;

    ${({ variant }) =>
        variant === 'ghost'
        ? css`background: transparent; color: #E66767; border: 1px solid #E66767;`
        : css`background: #E66767; color: #FFEBD9;`}

    &:disabled {
        opacity: .5; cursor: not-allowed;
    }
`