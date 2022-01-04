import React from 'react'
import './Main.css'

const Main = ({imageSrc}) => {
    return (
        <div  className="main">
            <img src={imageSrc} alt=" Voyage" className="main__image" />
            <h1 className="main__title"> Voyage made simple</h1>
        </div>
    )
}

export default Main
