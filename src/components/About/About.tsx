import { Container } from "./styles";

import Divider from '../../assets/svg/divide.svg';

export function About() {
    return (
        <Container id="About">
            <h1>About</h1>
            <img src={Divider} />
        </Container>
    )
}