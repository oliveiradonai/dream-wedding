import { Navbar, Container, HeaderContent } from "./styles";
import logo from '../../assets/images/logo/logo.png';

interface HeaderProps {
    headerColor: string;
}

export function Header({ headerColor }: HeaderProps) {
    return (
        <Container
            headerColor={headerColor}
        >
            <HeaderContent>
                <img src={logo} alt="logo" />
                <Navbar>
                    <a href="#">Home</a>
                    <a href="#Gallery">Photos</a>
                    <a href="#About">About</a>
                    <a href="#Contact">Contact</a>
                </Navbar>

                <button type="button">
                    Order a Quotation
                </button>
            </HeaderContent>
        </Container>
    )
}