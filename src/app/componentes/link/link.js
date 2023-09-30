"use client"
import { styled } from "styled-components";

export const Link = styled.a`
    margin: 8px;
    padding: 8px;
    color: white;
    

    @media (min-width: 768px) {
        font-size: 24px;
        margin: 10px 24px;
        padding: 10px 24px;
        &:hover{
            background-color: #005fa3;
        }    
    }
    @media (min-width: 1248px){
        margin: 12px auto;
        padding: 12px auto;
    }
`