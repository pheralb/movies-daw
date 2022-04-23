import React from "react";
import { Link } from "react-router-dom";

// 🎨 Header styles ->
import styles from "./header.module.scss";

const Index = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div>
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
            <button className={styles.subnavbtn}>Categorías</button>
          </div>
          <div className={styles.subnav}>
            <button className={styles.subnavbtn}>Contacto</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Index;
