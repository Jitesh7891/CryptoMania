import React, { useEffect, useState } from 'react'
import Navbar from "../Navbar/Navbar"
import axios from "axios"
import { Baseurl } from '../baseUrl'

const Exchanges = () => {

  const [loading, setLoading]=useState(true)
  const[exchanges, setExchanges]=useState([])

  useEffect(()=>{
    const getExchangesData=async()=>{
      const {data} =await axios.get(`${Baseurl}/exchanges`)
      console.log(data)
      setExchanges(data)
      setLoading(false)
    }
    getExchangesData() 
  },[])

  return (
      <>
      <Navbar/>
      </>

  )
}

export default Exchanges
