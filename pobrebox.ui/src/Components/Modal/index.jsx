import { Container } from './styles';

export default function Modal({ close, children }) {
    
    

    return (
        <Container >
            { children }
            <button type="button" onClick={close}> close </button>
        </Container>
    )
}
