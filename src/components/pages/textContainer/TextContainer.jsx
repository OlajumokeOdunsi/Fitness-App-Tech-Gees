import React from 'react'
import style from "../textContainer/TextContainer.module.css"

const TextContainer = ({text}) => {
  return (
    <>
    <div className={style.textContainer}>
    <h3 className={style.text}>{text}</h3>
    </div>
    
      
    </>
  )
}

export default TextContainer
