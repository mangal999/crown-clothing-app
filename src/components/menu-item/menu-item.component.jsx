import React from 'react'
import { withRouter } from 'react-router-dom'
import './menu-item.style.css'

const MenuItem = ({ title, imageUrl, size, match, history, linkUrl }) => {
    console.log(match.url)

    return (
        <div
            className={`menu-item ${size}`}
            onClick={()=>{
                history.push(`${match.url}${linkUrl}`)
            }}
        >
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            >
            </div>

            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="sub-title"> SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)