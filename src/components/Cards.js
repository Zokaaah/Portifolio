import React from 'react'
import styles from './Cards.module.css'

import project1 from '../img/profilee.png'
import project2 from '../img/need.png'


const Cards = () => {
  return (
    <div>
        <section className={styles.Cards}>
        <div className={styles.card}>
            <img src={project2} className={styles.cardImg} alt="" />
            <div className={styles.middle}></div>
        </div>

        <div className={styles.card}>
            <img src={project1} className={styles.cardImg} alt="" />
        </div>

        <div className={styles.card}>
            <img src={project1} className={styles.cardImg} alt="" />
        </div>


        
        </section>
    </div>
  )
}

export default Cards