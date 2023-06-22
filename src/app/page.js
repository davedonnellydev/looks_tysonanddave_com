'use client'
import styles from './page.module.css'
import { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import photos from './Photos.js';

export default function Home() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
      }, []);

      const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
      };


  return (
    <div className={styles.main}>
        <div class={styles.gallery}>
            <Gallery photos={photos} direction={"column"} onClick={openLightbox}/>
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                    <Carousel
                        currentIndex={currentImage}
                        views={photos.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                        }))}
                    />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    </div>
  )
}
