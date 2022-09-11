import styled from "styled-components"
import "../index.css"

export const Title = styled.h1`
    align-items: center;
    color: #181818;
    display: flex;
    flex-direction: column;
    padding: 15px;
    text-align: center;
    span {
        font-size: .7rem;
        color: #181818c9;
    }
`

export const Navbar = styled.nav`
    background-color: #f0fb4e;
    display: flex;
    font-weight: 600;
    justify-content: space-between;

    ul {
        align-items: center;
        display: flex;
        padding: 15px;

        li {
            margin: 0 10px;

            a {
                color: inherit;
                text-decoration: none;

                :hover {
                    text-decoration: underline;
                }
            }
        }
    }

    li {
        list-style-type: none;
    }
`

export const MainContent = styled.main`
    background-color: #f5f5f5;
    padding: 20px;
    margin: auto;
    width: 90%;

    p {
        padding: 10px 0;
    }

    img {
        object-fit: contain;
        height: 30vh;
        width: 100%;
    }
`

export const Footer = styled.footer`
    background-color: #181818;
    color: white;
    padding: 10px 0;
    text-align: center;
`