import React from 'react'
import Helmet from 'react-helmet';

import Header from "components/header";
import Footer from "components/footer";

// 🎨 Layout styles ->
import styles from "./layout.module.scss";

const Index = ({children}) => {
  return (
    <>
    <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>PlayMoviez</title>
      </Helmet>
    <Header />
     {children}
    <Footer />
    </>
  )
}

export default Index