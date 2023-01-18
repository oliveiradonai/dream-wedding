import Divider from '../../assets/svg/divide.svg';
import { Form } from '../Form/Form';
import { Container } from './styles';

export function Contact() {
    return (
        <Container id="Contact">
            <h1>Contact</h1>
            <img src={Divider} />

            <Form />
        </Container>
    )
}