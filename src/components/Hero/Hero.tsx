import { Background, Container, Content, Left, Title } from "./styles";

import logo from '../../img/logo.png'

import { Form } from "../Form/Form";

export function Hero() {
    return (
        <Container>
            <Background>
                <Content>
                    <Left>
                        <Title>
                            <img src={logo} alt="logo" />
                            <h1>
                                THE WEDDING OF YOUR
                            </h1>
                            <h2>
                                DREAMS
                            </h2>
                        </Title>
                        <p>Get in touch with us, we will be glad to perpetuate the most magical moment of your life.</p>
                    </Left>
                    <Form />
                </Content>
            </Background>
        </Container>
    )
}