
// Landing page will be the one holding the pages, it will be the one holding the (header, footer, main)
import React from 'react'
import Carousl from './caroselComponenet/Carousl';
import style from "../herosection/caroselComponenet/Carousel.module.css"
import imageMock from "../../assets/images/mockups.png"
import imageMock2 from "../../assets/images/mockup3.png"
import ImageComponent from './imagesComponent/ImageComponent';
import Image3 from "../../assets/images/MOCKUP4.png"
import TextContainer from './textContentComponent/TextContainer';
import { useNavigate } from 'react-router-dom';
import LandingNav from '../nav/LandingNav';
import Footer from '../footer/Footer';


const Main = () => {
  const navigate = useNavigate()
  const handleLoginClick =()=>{
    navigate("/login")
  }
  return (
    <>
    <LandingNav/>
        <Carousl/>
        <div className={style.mainsec} id ="mainsec">
        <div>      
         <h1 className={style.digitalText}> Unlock Your Fitness Potential,
            <br/>
             Anytime, Anywhere. 
             </h1>
             </div>

             <div className={style.cookie}>
             <p className={style.cookieText}> No cookie-cutter workouts here. Get a fitness plan designed just for you.</p>
             </div>

        <div className={style.btnHolder}>
            <button className={style.btn} onClick={handleLoginClick}>JOIN NOW</button>
        </div>

        <ImageComponent
        imagePicture= {imageMock}
        alt= "mock-images"
        />

        <TextContainer text="No matter your fitness level, Fitify will always adapt to your skills and expectations
         to get you the best results."/>

         <ImageComponent
         imagePicture={imageMock2}
         alt="mockImage2"
         />

         <TextContainer text="Experience professional guidance with easy-to-follow instruction
          videos"/>

          <ImageComponent
          imagePicture={Image3}
          alt="mockImage3"
          />
          <Footer/>
                 </div>



    </>
  )
}

export default Main
