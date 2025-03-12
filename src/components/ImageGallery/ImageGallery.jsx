import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className={css.contactList}>
    {images.map((image) => (
      <li key={image.id} className={css.contactItem}>
        <ImageCard image={image} onClick={onImageClick} className={css.imageClick}/>
      </li>
    ))}
  </ul>
);

export default ImageGallery;