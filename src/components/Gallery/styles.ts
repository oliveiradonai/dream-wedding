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
`;