import React, { useEffect, useState } from 'react'
import Navbar from "../Navbar/Navbar"
import axios from "axios"
import { Baseurl } from '../baseUrl'
import Loader from '../Loader'
import './exchanges.css'

const Exchanges = () => {

  const [loading, setLoading] = useState(true)
  const [exchanges, setExchanges] = useState([])

  useEffect(() => {
    const getExchangesData = async () => {
      const { data } = await axios.get(`${Baseurl}/exchanges`)
      console.log(data)
      setExchanges(data)
      setLoading(false)
    }
    getExchangesData()
  }, [])

  return (

    <>
      {
        loading ? <Loader /> : <div>
          <Navbar />

            <div className='ex-headings'>
              <div >Market <br/> &nbsp;Rank</div>
              <div className='ex-name-heading'>Name</div>
              <div className='ex-name-heading'>Price</div>
              <div >Symbol</div>
            </div>
          <div style={{marginTop:"14rem"}}>
          {
              exchanges.map((item, i) => {
                return (
          <div key={i} className='ex-cards'>
            <div className="rank">
              {item.trust_score_rank}
            </div>
            <div className="name">
              {item.name}
            </div>
            <div className="price">
              {item.trade_volume_24h_btc.toFixed(1)}
            </div>
            <div className="image">
              <img height={"80px"} src={item.image} alt="" />
            </div>
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

export default Exchanges
