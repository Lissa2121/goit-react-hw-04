import React from "react";
import ImageCard from "./ImageCard";

const ImageGallery = ({ images, onImageClick }) => (
  <ul>
    {images.map((image) => (
      <li key={image.id}>
        <ImageCard image={image} onClick={onImageClick} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;