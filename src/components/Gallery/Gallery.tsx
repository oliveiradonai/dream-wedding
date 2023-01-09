import { useState } from "react";
import { ImageModal } from "../ImageModal/ImageModal";
import { Container, Photos } from "./styles";

import Image1 from '../../assets/images/photos/img1.jpg';
import Image2 from '../../assets/images/photos/img2.jpg';
import Image3 from '../../assets/images/photos/img3.jpg';
import Image4 from '../../assets/images/photos/img4.jpg';
import Image5 from '../../assets/images/photos/img5.jpg';
import Image6 from '../../assets/images/photos/img6.jpg';
import Image7 from '../../assets/images/photos/img7.jpg';
import Image8 from '../../assets/images/photos/img8.jpg';
import Image9 from '../../assets/images/photos/img9.jpg';
import Image10 from '../../assets/images/photos/img10.jpg';
import Image11 from '../../assets/images/photos/img11.jpg';
import Image12 from '../../assets/images/photos/img12.jpg';

export function Gallery() {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [currentLargeImage, setCurrentLargeImage] = useState<string>("");

    function handleOpenNewTransactionModal(currentImage: string){
        setIsOpenModal(true);
        setCurrentLargeImage(currentImage);
    }
  
    function handleCloseNewTransactionModal(){
        setIsOpenModal(false);
    }
    
    return (
        <Container>
            <h1>Photos</h1>
            <Photos>
                <img onClick={() => handleOpenNewTransactionModal(Image1)} src={Image1} />
                <img onClick={() => handleOpenNewTransactionModal(Image2)} src={Image2} />
                <img onClick={() => handleOpenNewTransactionModal(Image3)} src={Image3} />
                <img onClick={() => handleOpenNewTransactionModal(Image4)} src={Image4} />
                <img onClick={() => handleOpenNewTransactionModal(Image5)} src={Image5} />
                <img onClick={() => handleOpenNewTransactionModal(Image6)} src={Image6} />
                <img onClick={() => handleOpenNewTransactionModal(Image7)} src={Image7} />
                <img onClick={() => handleOpenNewTransactionModal(Image8)} src={Image8} />
                <img onClick={() => handleOpenNewTransactionModal(Image9)} src={Image9} />
                <img onClick={() => handleOpenNewTransactionModal(Image10)} src={Image10} />
                <img onClick={() => handleOpenNewTransactionModal(Image11)} src={Image11} />
                <img onClick={() => handleOpenNewTransactionModal(Image12)} src={Image12} />
                <ImageModal
                    isOpen={isOpenModal}
                    onRequestClose={handleCloseNewTransactionModal}
                    imageLarge={currentLargeImage}
                />
            </Photos>
        </Container>
    )
}