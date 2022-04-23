import React from 'react'

// 🎨 Section styles ->
import styles from "./section.module.scss";

const Index = ({id, title, children}) => {
  return (
    <section id={id}>
        <h1>{title}</h1>
        {children}
    </section>
  )
}

export default Index