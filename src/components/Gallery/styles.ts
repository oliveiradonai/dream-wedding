import styled from 'styled-components';

export const Container = styled.div`
    padding: 5rem 0 0 0;
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
`;

export const Photos = styled.div`
    column-count: 4;
    column-gap: 20px;
    padding: 5rem 5rem 0;

    img{
        width: 100%;
        margin-bottom: 20px;
        border-radius: 4px;

        cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
        column-count: 2;
        padding: 5rem 2rem 0;
    }
`;