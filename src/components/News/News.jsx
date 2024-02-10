import React, { useEffect, useState } from 'react'
import { Baseurl } from '../baseUrl'
import axios from 'axios'
import NewsItem from './NewsItem'
import './NewsItem.css'
import Navbar from '../Navbar/Navbar'
import Loader from'../Loader'

const News = () => {
    const [news,setNews]=useState([])
    const[loading,setLoading]=useState(true)

    useEffect(() => {
        const getNews = async () => {
            try {
                const { data:newsObject } = await axios.get(`${Baseurl}/news`)
                setNews(newsObject.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        getNews()
    }, [])

    const style = {
        color: 'rgb(234, 255, 255)',
        marginTop: '6rem',
        fontSize: '70px',
        display: 'flex',
        justifyContent: 'center',
    };

    if (window.innerWidth < 768) {
        style.fontSize = '40px';
    } else if (window.innerWidth < 992) {
        style.fontSize = '50px';
    }
    console.log(window.innerWidth)
    return (
        loading?<>
        <Loader/>
        </>:
        <>
        <Navbar/>
        <div style={style}>Crypto News</div>
        <div className='row' style={{padding:'0px 40px',marginTop:'2rem'}}>
            {news.map((element) => {
                return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.thumb_2x} newsUrl={element.url} author={element.author} date={element.updated_at} source={element.news_site} />
                </div>
    })}
    </div>
    </>
  )
}

export default News
