import React from 'react'
import style from './myStyle.module.css';

function App() {
  return (
    <div>
       <h3 className={style.head}> Adding styles By CSS Module </h3>

       <p> It Req. external css file having extension '.modulus.css' </p>

       <i> import styles from './myStyle.module.css' </i>
       <br /><br />
       <b> {`className={styles.head}`} </b>
    </div>
  )
}

export default App
