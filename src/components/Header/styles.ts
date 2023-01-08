import styled from "styled-components";

export const Container = styled.div`
    height: 5rem;
`;

export const HeaderContent = styled.div`
    max-width: 1120px;
    height: 5rem;
    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    align-items: center;

    img {
        width: 60px;
    }

    button {
        margin-left: auto;
        height: 3rem;
        border-radius: 3rem;
        background: #E75A7C;
        border: 0;
        padding: 0 1.5rem;

        display: flex;
        align-items: center;
        justify-content: center;

        color: #FFFFFF;
        font-weight: bold;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`;

export const Navbar = styled.nav`
    margin-left: 5rem;
    height: 5rem;

    a {
        display: inline-block;
        position: relative;
        padding: 0 1rem;
        height: 5rem;
        line-height: 5rem;
        color: #2C363F;
        font-size: 1.5rem;
        font-weight: 600;

        transition: background-color 0.3s;

        & + a {
            margin-left: 2rem;
        }

        &:hover {
            background-color: #FEEAFA;
        }

        &.active {
            color: var(--white);
            font-weight: bold;
        }

        &.active::after {
            content: '';
            height: 3px;
            border-radius: 3px 3px 0 0;
            width: 100%;
            position: absolute;
            bottom: 1px;
            left: 0;
            background-color: var(--yellow-500);
        }
    }
`