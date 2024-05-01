import React from "react";
import { Carousel } from 'react-responsive-carousel';
import style from "../caroselComponenet/Carousel.module.css"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from "../../../assets/gym1.png"
import image2 from "../../../assets/gyn2.png"
import image3 from "../../../assets/gym3.png"
import image4 from "../../../assets/photo-4.png"
import image5 from "../../../assets/yoga.png"




const imageData = [

       { src: image1, alt:"images1"},
        {src: image2, alt:"images2"},
        {src: image3, alt: "images3"},
        {src: image4, alt:"image4"},
        {src:image5, alt:"image5"}
    
]

console.log(imageData)


const Carousl = () => {

    
  return (
    <>
    <Carousel className={style.Carousel}
    autoPlay={true} // Use camelCase for prop names
    infiniteLoop={true}
    stopOnHover={true}
    autoFocus	={true}
    >
{imageData.map((image) => (
    <div key={image.src} className={style.image}>
      <img src={image.src} alt={image.alt} />
    </div>
  ))}
    </Carousel>


    



    </>
  )
}



export default Carousl

