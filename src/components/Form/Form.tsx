import { Container } from "./styles"

export function Form() {
    return (
        <Container>
            <form>
                <label>
                    Name:
                </label>
                <input placeholder="" type="text" name="firstName" />
                <label>
                    E-mail:
                </label>
                <input type="text" name="firstName" />
                <label>
                    Title:
                </label>
                <input type="text" name="firstName" />
                <label>
                    Description:
                </label>
                <textarea name="description" />

                <button>
                    Send message
                </button>
            </form>
        </Container>
    )
}