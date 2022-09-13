import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkLayout = styled(Link)`
  display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 2.5rem;
   
    margin-bottom: 20px;


    div{
        display: flex;
        flex-direction: column;
        width: 510px;
        margin-left: calc(50% - 444px/2 - 285px);
        height: 280px;
        padding: 2rem;
        
        
        background: ${(props) => props.theme['base-post']};
        border-radius: 10px;
        cursor: pointer;

        &:focus{
            border: 1px solid ${(props) => props.theme['base-label']};
        }

        h1{
            display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 64px;
        margin-top: -5px;
        text-decoration: none;

        font-family: 'Nunito';
        font-weight: 700;
        line-height: 32px;
        font-size: 20px;

        color: ${(props) => props.theme['base-title']};

        span{
            display: flex; 
            width: 53px;
            height: 22px;
            margin-right: 22px;

            font-family: 'Nunito';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            

            color: ${(props) => props.theme['base-span']}
        }
     }

        h2{
            display: flex;
            margin-top: 20px;
            margin-bottom: 32px;
            overflow: hidden;

            font-family: 'Nunito';
            font-weight: 400;
            font-size: 1rem;
            line-height: 26px;

            color: ${(props) => props.theme['base-text']}
        }
    }
`
