import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { HOST_URL } from '../../config'
import styles from './coinDetailed.module.css'
import CoinDetailTable from './coinDetailTable/CoinDetailTable'

export default function CoinDetailed() {
    const { id } = useParams()

    const [coin, setCoin] = useState({})

    const getCoin = async (id) => {
        try {
            const response = await fetch(`${HOST_URL}/coins/${id}`)
            const data = await response.json()
            setCoin(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getCoin(id)
    }, [])
    return (
        <div className={styles.coinDetailed}>
            {
                JSON.stringify(coin) !== "{}"
                ?
                <div className={styles.content}>
                    <div className="left">
                        <img src={coin.imgFrontUrl} alt="" />
                        <img src={coin.imgBackUrl} alt="" />
                    </div>
                    <div className={styles.right}>
                        <h2>{coin.name}</h2>
                        <p>{coin.description}</p>
                        <CoinDetailTable coin={coin} />
                        <Link to={'/'}>Back to the list</Link>
                    </div>
                </div>
                :
                <p>Məlumat tapılmadı</p>
            }
        </div>
    )
}
