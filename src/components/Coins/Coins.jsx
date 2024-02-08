import React, { useEffect, useState } from 'react'
import Navbar from "../Navbar/Navbar"
import axios from "axios"
import { Baseurl } from '../baseUrl'
import Loader from '../Loader'
import '../Exchanges/exchanges.css'
import './coins.css'

const Coins = () => {

  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  const [search, setSearch]=useState('')
  const [currency, setCurrency]=useState('usd')
  const currencySymbol = currency ==='inr' ? '₹': '$'

  useEffect(()=>{
    const getCoinsData=async()=>{
       try {
        const {data} =await axios.get(`${Baseurl}/coins/markets?vs_currency=${currency}`)
        data.sort((a,b)=>b.current_price-a.current_price)
      console.log(data)
      setCoins(data)
      setLoading(false)
       } catch (error) {
        console.log(error)
        setLoading(false)
       }
    }
    getCoinsData() 
  },[currency])

  return (

    <>
      {
        loading ? <Loader /> : <div>
          <Navbar />
          <div className="search-bar">
            <input type="text" 
            placeholder='Search Your Coins ' 
            onChange={(e)=>setSearch(e.target.value)}
         
            />
           </div>

          <div className='btns' >
            <div className='coins-title'>All coins</div>
             <button onClick={()=>setCurrency('inr')} >inr</button>
             <button onClick={()=>setCurrency('usd')}>usd</button>
           </div>
            <div className='coin-headings'>
              <div className>Name</div>
              <div className='coin-headin-price'>Price</div>
              <div style={{position:'relative',left:'2rem'}}>Symbol</div>
              <div >% Change<br/>(Last 24hr)</div>
              
            </div>
          <div style={{marginTop:"23rem",marginRight:'3rem'}}>
          {
              coins.map((item, index) => {
                return (
                  item.image&&<div key={index} className='ex-cards'>
            <div className="name">
              {item.name}
            </div>
            <div className="price">
              {currencySymbol}{item.current_price.toFixed(0)}
            </div>
            <div className="coin-image">
              <img height={"80px"} src={item.image} alt="" />
            </div>
            {item.price_change_percentage_24h>0&&<div className="rank" style={{color:'#03d900'}}>
            +{item.price_change_percentage_24h.toFixed(1)} 
            </div>}
            {item.price_change_percentage_24h<0&&<div className="rank" style={{color:'red'}}>
            {item.price_change_percentage_24h.toFixed(1)} 
            </div>}
          </div>
          )
              })
            }
        </div>
    </div>
      }
    </>
  )
}

export default Coins