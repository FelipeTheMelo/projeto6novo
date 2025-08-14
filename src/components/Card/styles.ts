import styled from 'styled-components'

export const Container = styled.div`
    width: 472px;
    display: flex;
    flex-direction: column;
    margin: 16px;
    border: 1px solid #e66767;
`

export const Image = styled.img`
    width: 472px;
    height: 217px;
    object-fit: cover;
`

export const Info = styled.div`
    width: 472px;
    height: 181px;
    background-color: #ffffff;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: none;
`

export const Title = styled.h2`
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    color: #e66767;
`

export const Description = styled.p`
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #e66767;
    margin-top: 8px;
    flex: 1;
`

export const Button = styled.button`
    width: 70px;
    height: 16px;
    background-color: #ffebd9;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    border: none;
    cursor: pointer;
`