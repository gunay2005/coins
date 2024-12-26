import { Route, Routes } from 'react-router-dom';
import './assets/styles.css';
import Header from './components/layout/header/Header';
import Home from './pages/home/Home';
import { useDispatch, useSelector } from 'react-redux';

import { HOST_URL } from './config';
import { useEffect } from 'react';
import { setCoins, setFilteredCoins } from './redux/slice';
import Filtered from './pages/filtered/Filtered';
import CoinDetailed from './pages/coinDetailed/CoinDetailed';

function App() {
  const { coins } = useSelector(state => state.coin)
  const dispatch = useDispatch()
  const getCoins = async () => {
    try {
      const response = await fetch(`${HOST_URL}/coins`)
      const data = await response.json()
      dispatch(setCoins(data))
      dispatch(setFilteredCoins(data))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCoins()
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/filtered' element={<Filtered />} />
        <Route path='/coins/:id' element={<CoinDetailed />} />
      </Routes>
    </div>
  );
}

export default App;
