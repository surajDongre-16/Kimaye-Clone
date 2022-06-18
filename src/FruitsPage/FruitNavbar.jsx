import React from 'react'
import { Link } from 'react-router-dom'
import  styles from "./FruitNavbar.module.css"
const FruitNavbar = () => {
  return (
    <div className={styles.navbar}>
        <Link to="/allfruits" className={styles.link}>ALL FRUITS</Link>
        <Link to="/freshcuts" className={styles.link}>FRESH CUTS</Link>
        <Link to="/fruitcombos" className={styles.link}>FRUIT COMBO</Link>
        <Link to="/gifts" className={styles.link}>GIFTS BY KIMAYE</Link>
    </div>
  )
}

export default FruitNavbar