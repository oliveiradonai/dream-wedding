import Modal from 'react-modal';
import { Container } from './styles';

import closeImg from '../../assets/svg/close.svg';

interface ImageModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    imageLarge: string;
}
export function ImageModal({ isOpen, onRequestClose, imageLarge }: ImageModalProps) {
    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >
                <button type="button"
                    onClick={onRequestClose}
                    className="react-modal-close"
                >
                    <img src={closeImg} alt="Botão fechar" />
                </button>

                <Container>
                    <img src={imageLarge} alt="" />
                </Container>
            </Modal>
        </>
    )
}