import React from "react"
import styled from "styled-components"

const HeaderBox = styled.header`
    background-color: lightblue;
    color:#0C9AED;
    color: #f5072e;
    height:20vh;
`

const Ul = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 28px;
    height: 20vh;
`

export default function Header(){
    return(
        <HeaderBox>
            <nav>
                <Ul>
                    <li>Inicio</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </Ul>
            </nav>
        </HeaderBox>
    )
}