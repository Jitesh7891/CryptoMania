import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;

        const newsTemStyle={
            border:'2px solid rgb(160, 160, 160)',
            minHeight:'78vh',
            padding:'2px',
            backgroundColor:'rgb(40,40,40)',
            color:'white'
        }
        if(window.innerWidth<500){
            newsTemStyle.minHeight='unset'
        }
        return (
            <div className="my-3">
                <div className="card" style={newsTemStyle}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill"style={{backgroundColor:'#9823db'}}> {source} </span>
                    </div>
                    <img className='card-img-top" newsimg' src={imageUrl?imageUrl:"./bitcoinImg.jpg"} alt="..." />
                    <div className="card-body" >
                        <h5 className="card-title">{title?title.slice(0,58)+"...":"Breaking News!"}  </h5>
                        <p className="card-text">{description?description.slice(0,80)+"...":"Click on Read More to get the news description and much more ..."}</p>
                        <p className="card-text"><small className="text-white">By {!author ? "Unknown" : author} on  {new Date(date*1000).toDateString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm readbtn btn-danger">Read More</a>
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem

