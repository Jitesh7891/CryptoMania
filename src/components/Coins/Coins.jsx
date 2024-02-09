import React, { useEffect, useState } from 'react'
import Navbar from "../Navbar/Navbar"
import axios from "axios"
import { Baseurl } from '../baseUrl'
import Loader from '../Loader'
import '../Exchanges/exchanges.css'
import './coins.css'
import { Link } from 'react-router-dom'


const Coins = () => {

  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [currency, setCurrency] = useState('usd')
  const currencySymbol = currency === 'inr' ? '₹' : '$'

  useEffect(() => {
    const getCoinsData = async () => {
      try {
        const { data } = await axios.get(`${Baseurl}/coins/markets?vs_currency=${currency}`)
        data.sort((a, b) => b.current_price - a.current_price)
        setCoins(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getCoinsData()
  }, [currency])

  useEffect(() => {

  }, [search])

  return (

    <>
      {
        loading ? <Loader /> : <>
          <Navbar />
          <div className="search-bar">
            <input type="text"
              placeholder='Search Your Coins '
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className='btns' >
            <div className='coins-title'>All coins</div>
            <button onClick={() => setCurrency('inr')} >inr</button>
            <button onClick={() => setCurrency('usd')}>usd</button>
          </div>
          <div className='coin-headings'>
            <div className='coin-heading-name'>Name</div>
            <div className='coin-heading-price'>Current<br/>&nbsp;Price</div>
            <div className='coin-heading-symbol'>Symbol</div>
            <div className='coin-heading-percent'>% Change<br />(Last 24hr)</div>

          </div>
          <div className='coins-body'>
            {
              coins.filter((data) => {
                return data.name.toLowerCase().includes(search.toLowerCase());
              }).map((item, index) => {
                return (
                  <Link to={`/coins/${item.id}`} style={{ color: 'white', textDecoration: 'none' }}>
                    <div key={index} className='ex-cards' >
                      <div className="name">
                        {item.name}
                      </div>
                      <div className="price">
                        {currencySymbol}{item.current_price.toFixed(0)}
                      </div>
                      <div className="coins-image">
                        <img height={"80px"} src={item.image} alt="" />
                      </div>
                      {item.price_change_percentage_24h > 0 && <div className="rank" style={{ color: '#03d900' }}>
                        +{item.price_change_percentage_24h.toFixed(1)}
                      </div>}
                      {item.price_change_percentage_24h < 0 && <div className="rank" style={{ color: 'red' }}>
                        {item.price_change_percentage_24h.toFixed(1)}
                      </div>}
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </>
      }
    </>
  )
}

export default Coins