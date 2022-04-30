import React from "react";
import { Link } from "react-router-dom";

// 🎨 Header styles ->
import styles from "./header.module.scss";

const Index = () => {
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <img className="logo" src="/images/playMoviez.png" alt="logo" />
        </div>
        <nav className={styles.navbar}>
          <div className={styles.subnav}>
            <Link to="/" className={styles.subnavbtn}>
              PlayMovieZ
            </Link>
          </div>
          <div className={styles.subnav}>
            <Link to="/catalogo" className={styles.subnavbtn}>
              Catálogo
            </Link>
          </div>
          <div className={styles.subnav}>
            <Link to="/" className={styles.subnavbtn}>
              Categorías
            </Link>
          </div>
          <div className={styles.subnav}>
            <Link to="/" className={styles.subnavbtn}>
              Contacto    
            </Link>
{/*             <div>
            <svg width="0" height="30" xmlns="http://www.w3.org/2000/svg">
 <g id="Layer_1">
  <title>Layer 1</title>
  <path transform="rotate(180 99.8389 102.797)" id="svg_8" d="m107.36221,71.43121l-29.00271,28.39373l28.64417,9.75459l-26.47556,30.48311l-10.68925,-5.14754l7.58151,29.38237l30.12966,-12.81935l-12.72123,-5.35843l34.54372,-43.7836l-31.57686,-7.93548l30.49256,-29.58671l-17.39354,-4.44229l18.94417,-18.8039l-6.95928,-0.27024l-29.3976,25.79693l13.88023,4.33681l0,-0.00001z" stroke="#000" fill="#fff"/>
  <path id="svg_9" d="m453.22582,85.81258l-8.70083,0.23084l8.59327,0.07931l-7.94268,0.24783l-3.20678,-0.04185l2.27446,0.23888l9.03891,-0.10422l-3.81637,-0.04356l10.36313,-0.35596l-9.47307,-0.06452l9.14779,-0.24054l-5.21807,-0.03612l5.68326,-0.15288l-2.08779,-0.0022l-8.8193,0.20973l4.16408,0.03526l0,0z" stroke="#000" fill="#fff"/>
  <path id="svg_10" d="m724.25572,179.84745l-0.54249,0.23084l0.53578,0.07931l-0.49522,0.24783l-0.19994,-0.04185l0.14181,0.23888l0.56357,-0.10422l-0.23795,-0.04356l0.64613,-0.35596l-0.59063,-0.06452l0.57035,-0.24054l-0.32534,-0.03612l0.35434,-0.15288l-0.13017,-0.0022l-0.54987,0.20973l0.25963,0.03526l0,0z" stroke="#000" fill="#fff"/>
  <path stroke="#000" id="svg_11" d="m768.21501,89.51255l-1.45014,0.92337l1.43221,0.31722l-1.32378,0.99132l-0.53446,-0.1674l0.37908,0.95552l1.50649,-0.41689l-0.63606,-0.17426l1.72719,-1.42386l-1.57885,-0.25806l1.52463,-0.96217l-0.86968,-0.14446l0.94721,-0.61151l-0.34797,-0.00879l-1.46989,0.83892l0.69401,0.14103l0,0z" fill="#fff"/>
 </g>
</svg>
            </div> */}
          </div>
        </nav>
        <div className={styles.buscar}>
        <p><i class="fas fa-search"></i></p>
        </div>
      </div>
    </>
  );
};

export default Index;
