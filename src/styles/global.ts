import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Josefin Slab';
    }

    body{ 
        background-color: #fef5f5;
    }

    @media (max-width: 1080px) {
        html{
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px) {
        html{
            font-size: 87.5%;
        }
    }

    button{
        cursor: pointer;
    }

    a{
        color: inherit;
        text-decoration: none;
    }
`;