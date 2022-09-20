import React from 'react'

import styles from './HomeStart.module.css'
import logo from '../img/teste.png' 
import TabMenu from './TabMenu' 
import Cards from './Cards'
 

const HomeStart = () => {
  return (
    <div>
        <div className={styles.StartContainer}>
            <div className={styles.start1}>
                <h3 className={styles.text1}><span>Olá, eu sou</span></h3>
                <h1><span className={styles.ColorText}>Gabriel Oliveira</span></h1>
                <h2>Desenvolvedor front end</h2>

                <p>Desenvolvimento Web - Landing Pages, E-Commerce, WireFrames</p>
                <p>Implantação e Treinamento</p>


            </div>
            <img className={styles.StartImg} src={logo} alt="" />

            {/* <div className={styles.start2}>

            </div> */}
        </div>
        <div>
        <div className={styles.SobreContainer}>
            <h1>Sobre</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </div>


            <div className={styles.CompContainer}>
          
                <div className={styles.Comp1}>
                    <h4>Front-end</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur </p>
                  

                </div>

                <div className={styles.Comp2}>
                    <h4>Back-End</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur </p>
                    

                </div>

            </div>


            <div className={styles.ExpContainer}>
                <h1 className={styles.titles}>Experiencia</h1>
                <div className='teste1'></div>

                <TabMenu className="ConteudoTab"/>
                <div className='teste2'></div>

            </div>

            <div className={styles.ProjectContainer}>
                <h1>Projetos</h1>
                <Cards/>
                            </div>
    </div>
  )
}

export default HomeStart