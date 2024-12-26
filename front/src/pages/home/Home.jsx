import React from 'react'
import Filter from '../../components/filter/Filter'
import styles from './home.module.css'
import HomeCoins from './components/homeCoins/HomeCoins'

export default function Home() {
  return (
    <div className={styles.homePage}>
        <div className="heading">Homepage</div>
        <Filter />
        <HomeCoins />
    </div>
  )
}
