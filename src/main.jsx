import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";  // Правильний шлях до стилів
import App from "./App.jsx";
import css from './App.module.css';  // Це інший файл стилів


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <App className={css.container}/>
    </>
  </StrictMode>
);