import styled from 'styled-components';

export const Container = styled.div`
    padding: 5rem 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;

    img {
        max-width: 600px;
    }

    h1 {
        color: #E75A7C;
        font-size: 3rem;
        font-weight: 500;

        @media only screen and (max-width: 768px) {
            font-size: 2.5rem;
            text-align: center;
        }
    }

    @media only screen and (max-width: 768px) {
        padding: 5rem 1rem 0;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 0 0;
`;

export const Timeline = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;

    &:after{
        content: '';
        position: absolute;
        width: 6px;
        background-color: white;
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -3px;

        @media screen and (max-width: 600px) {
            left: 31px;
        }
    }

`;

export const ContainerLeft = styled.div`
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
    left: 0;

    &:after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        right: -17px;
        background-color: white;
        border: 4px solid #E75A7C;
        top: 15px;
        border-radius: 50%;
        z-index: 1;

        @media screen and (max-width: 600px) {
            left: 15px;
        }
    }

    :before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        right: 30px;
        border: medium solid white;
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent white;
    }

    @media screen and (max-width: 600px) {
        width: 100%
    }
`;

export const ContainerRight = styled.div`
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
    left: 50%;

    &:after {
        content: '';
        left: -16px;
        position: absolute;
        width: 25px;
        height: 25px;
        right: -17px;
        background-color: white;
        border: 4px solid #E75A7C;
        top: 15px;
        border-radius: 50%;
        z-index: 1;

        @media screen and (max-width: 600px) {
            left: 15px;
        }
    }

    :before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        left: 30px;
        border: medium solid white;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
    }

    @media screen and (max-width: 600px) {
        left: 0%;
        width: 100%;
    }
`;

export const InnerContent = styled.div`
    padding: 20px 30px;
    background-color: white;
    position: relative;
    border-radius: 6px;
`;