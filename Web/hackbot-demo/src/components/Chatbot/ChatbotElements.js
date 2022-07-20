
import styled from 'styled-components';

export const BotButton = styled.div`
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    position: fixed;
    bottom:5%;
    left:2%;
    z-index:10;
    background: #7AD7F0;
    white-space: nowrap;
    color: #010606;
    font-size: 40px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
    @media (max-width: 1366px) {
        display : none;
    }
    @media (max-width: 1024px) {
        display : none;
    }
`