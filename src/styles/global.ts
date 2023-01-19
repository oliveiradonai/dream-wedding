import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Josefin Slab';
        overflow-x: hidden;
    }

    html {
        scroll-behavior: smooth;        
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

    .react-modal-overlay{
        background: rgba(0,0,0,0.5);
        
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        z-index: 9999;

        @media only screen and (max-width: 768px) {
            padding: 0 1rem;
        }
    }

    .react-modal-content{
        width: 100%;
        max-width: 480px;
        background: #ffffff;
        position: relative;
        border-radius: 0.5rem;
        outline: none;
        background: transparent;
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }
    }
`;