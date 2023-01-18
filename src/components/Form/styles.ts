import styled from "styled-components";

export const Container = styled.div`
    width: 600px;
    max-height: 550px;
    padding: 1.2rem 2.3rem;

    background: rgba(255, 255, 255, 0.3);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.2px);
    -webkit-backdrop-filter: blur(6.2px);
    border: 1px solid rgba(255, 255, 255, 0.28);

    opacity: 0;

    animation: fadeInForm 2s;
    animation-delay: 1s;
    animation-fill-mode: forwards;

    @keyframes fadeInForm {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    form {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;

        gap: 1rem;

        label {
            font-family: 'Josefin Sans';
            font-size: 1rem;
            font-weight: 300;
            color: #000000;
        }
        
        input {
            font-size: 1.3rem;
            width: 100%;
            padding: 1rem;
            
            border-radius: 5px;
            background-color: transparent;
            border: 1px solid #777777;
            color: #000000;

            :focus {
                outline: none;
            }
        }

        textarea {
            font-size: 1.3rem;
            width: 100%;
            height: 100px;
            padding: 1rem;

            border-radius: 5px;
            border: 1px solid #777777;
            background-color: transparent;
            color: #000000;

            :focus {
                outline: none;
            }
        }

        button {
            margin-left: auto;
            height: 3rem;
            border-radius: 3rem;
            background: #E75A7C;
            border: 0;
            padding: 0 1.5rem;
            font-size: 1rem;

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
    }
`;