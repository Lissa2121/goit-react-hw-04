import React from "react";

const ImageCard = ({ image, onClick }) => (
  <div onClick={() => onClick(image)}>
    <img src={image.urls.small} alt={image.alt_description} />
  </div>
);

export default ImageCard;