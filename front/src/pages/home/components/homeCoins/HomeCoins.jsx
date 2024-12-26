import React, { useEffect } from 'react'
import styles from './homeCoins.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight } from '../../../../icons'
import { HOST_URL } from '../../../../config'
import { useDispatch, useSelector } from 'react-redux'
import { setCoinType, setFilteredCoins } from '../../../../redux/slice'

export default function HomeCoins() {
    const {coins} = useSelector(state => state.coin)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const content = [
        {
            heading: "Bullion coins",
            navigateTo: "",
            image: "https://i.postimg.cc/mkdPNp9f/South-Vietnamese-Dong-1.png",
            type: "investment"
        },
        {
            heading: "Exclusive coins",
            navigateTo: "",
            image: "https://i.postimg.cc/QdzprCHG/ISK-2.png",
            type:'exclusive'
        },
        {
            heading: "Commemorative coins",
            navigateTo: "",
            image: "https://i.postimg.cc/J44JDZXC/Looney-1.png",
            type:"memorable"
        },
    ]

    const objectToQuery = (obj) => {
        const params = [];

        Object.keys(obj).forEach((key) => {
            const value = obj[key];
            if (value) {
                params.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
            }
        });

        return params.length ? `?${params.join('&')}` : '';
    };

    const showAll = async (type) => {
        const queryString = objectToQuery({ type: type });
        const url = `${HOST_URL}/coinsSearch${queryString}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Ошибка при запросе данных');
            }

            const results = await response.json();
            console.log('Ответ от сервера:', results);
            dispatch(setFilteredCoins(results))
            dispatch(setCoinType(type))
            navigate('/filtered')
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }

    useEffect(() => {
        dispatch(setCoinType(''))
        dispatch(setFilteredCoins(coins))
    },[])

    return (
        <div className={styles.homeCoins}>
            {
                content.map((type, key) => (
                    <div className={styles.homeCoins_element} key={key}>
                        <h2>{type.heading}</h2>
                        <span to={'/filtered'} onClick={() => showAll(type.type)}>
                            Show all
                            {ArrowRight}
                        </span>
                        <img src={type.image} alt="" />
                    </div>
                ))
            }
        </div>
    )
}
