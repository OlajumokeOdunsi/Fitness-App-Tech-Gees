import React from 'react'
import style from "./ImageComponenet.module.css"
const ImageComponent = ({imagePicture, alt, className}) => {
  return (
    <>
    <div className={style.mockup}>
    <img
    src={imagePicture}
    alt={alt}
    className={style.mockupps}
    />
    </div>
    </>

  
  )
}

export default ImageComponent
