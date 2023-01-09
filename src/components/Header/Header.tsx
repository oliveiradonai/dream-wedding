import { Navbar, Container, HeaderContent } from "./styles";
import logo from '../../assets/images/logo/logo.png';

export function Header() {
    return (
        <Container>
            <HeaderContent>
                <img src={logo} alt="logo" />
                <Navbar>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Photos</a>
                    <a href="">Contact</a>
                </Navbar>

                <button type="button">
                    Order a Quotation
                </button>
            </HeaderContent>
        </Container>
    )
}