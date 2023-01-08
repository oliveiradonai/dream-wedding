import styled from "styled-components";

import heroBackground from '../../img/bg.jpg'

export const Container = styled.div`
    width: 100vw;

    background-image: url(${heroBackground});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: calc(100vw - 7%);
`;

export const Background = styled.div`
    display: flex;
    justify-content: center;
    
    width: 100vw;
    height: calc(100vh - 130px);

    background: linear-gradient(0deg,rgba(255, 255, 255, 0.199) 10%,transparent 90%);
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100vw;
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 7rem;

    p {
        width: 300px;
        line-height: 2rem;
        font-size: 1.5rem;
        color: #FFFFFF;
        font-weight: 500;
        opacity: 0;

        animation: fadeInParagraph 3s;
        animation-fill-mode: forwards;
    }

    @keyframes fadeInParagraph {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;

export const Title = styled.div`
    img {
        width: 150px;
        margin-bottom: 1rem;
        opacity: 0;

        animation: fadeInLogo 3s;
        animation-fill-mode: forwards;
    }

    @keyframes fadeInLogo {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    h1 {
        font-family: 'Josefin Sans';
        line-height: 1.3em;
        font-size: 3.5rem;
        color: #000000;
        font-weight: 300;
        text-align: center;

        overflow: hidden;
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        animation: 
        typing 3.5s steps(30, end),
        blink-caret .5s step-end infinite;
    }

    /* The typing effect */
    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: #E75A7C }
    }


    h2 {
        font-family: 'Josefin Sans';
        font-size: 3.5rem;
        font-weight: 400;
        letter-spacing: 1.2rem;
        opacity: 0;

        animation: fadeIn 3s;
        animation-delay: 3s;
        animation-fill-mode: forwards;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`