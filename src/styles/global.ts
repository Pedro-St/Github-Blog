import { createGlobalStyle } from "styled-components";
 
export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;

        html {
        @media (max-width: 1080px) { 
            font-size: 93.75% //15px
        }

        @media (max-width: 720px) {
            font-size: 87.5% //14px
        }
    }
        
    }

    :focus{
        outline: 0;

    }

    body {
        background: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-title']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem Nunito, sans-serif;
    }



`