import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer } from "react-hot-toast";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn";
import ImageModal from "./components/ImageModal";

const ACCESS_KEY = "jR7Xt7URuZ_kReM4kcHxUb7McKdbpPMpRpx2TU-QkkY";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;
    
    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://api.unsplash.com/search/photos`, {
          params: { query, page, per_page: 12, client_id: ACCESS_KEY },
        });
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      } catch (error) {
        setError("Failed to fetch images");
      }
      setLoading(false);
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => setPage((prevPage) => prevPage + 1);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <ToastContainer />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      {loading && <Loader />}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal
        isOpen={!!selectedImage}
        onRequestClose={() => setSelectedImage(null)}
        image={selectedImage}
      />
    </div>
  );
};

export default App;