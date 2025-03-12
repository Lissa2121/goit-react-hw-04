import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import css from './Loader.module.css';


const Loader = () => <ClipLoader size={50} className={css.loader} />;

export default Loader;