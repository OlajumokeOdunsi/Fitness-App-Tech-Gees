import React from 'react'
import { useState } from "react"
import { Link } from "react-scroll"
import { FaTimes } from "react-icons/fa"
import { CgMenuGridO } from "react-icons/cg";
import logo from '/public/logowhite.jpeg'

const Nav = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    const content = [
        <>
            <div className="lg:hidden block absolute top-20 w-full left-0 right-0 bg-bg-color transition">
                <ul className="text-left text-xl p-16 pt-4">
                    <Link spy={true} smooth={true} to="Home">
                        <li className="my-4 py-4 cursor-pointer font-bold hover:text-text-color">Home</li>
                    </Link>

                    <Link spy={true} smooth={true} to="Testimonial">
                        <li className="my-4 py-4 cursor-pointer font-bold hover:text-text-color">Testimonial</li>
                    </Link>

                    <Link spy={true} smooth={true} to="Footer">
                        <li className="my-4 py-4 cursor-pointer font-bold hover:text-text-color">Footer</li>
                    </Link>

                    <Link spy={true} smooth={true} to="Join">
                        <button className='mt-4 cursor-pointer bg-logo-color text-white p-4 rounded-xl hover:bg-bg-color hover:text-text-color hover:border-2 font-bold'>Join Now → </button>
                    </Link>


                </ul>
            </div>
        </>
    ]

  return (
    <nav className="main-font">
            <div className="w-full fixed h-30 flex gap-20 items-center justify-betwee lg:py-5 px-10 py-8 bg-bg-color  text-logo-color">

                <div className="flex">

                    <div className='flex items-center justify-center gap-1'>
                        <img className='w-8 h-8' src={logo} alt="" />
                        <h3 className="text-md font-extrabold tracking-[.1rem]">Vitality <br /><span className='text-[0.9rem] text-logo-color ' >Fitness</span></h3>
                    </div>
                </div>

                <div className="text-blue text- lg:flex md:flex flex-1  justify-end  hidden">

                    <div>
                        <ul className="flex gap-8 mr-16">
                            <Link spy={true} smooth={true} to="Home">
                                <li className="my-4 py-4 cursor-pointer font-bold hover:text-text-color">Home</li>
                            </Link>

                            <Link spy={true} smooth={true} to="Testimonial">
                                <li className="my-4 py-4 cursor-pointer font-bold hover:text-text-color">Testimonial</li>
                            </Link>

                            <Link spy={true} smooth={true} to="Footer">
                                <li className="my-4 py-4 cursor-pointer font-bold hover:text-text-color">Footer</li>
                            </Link>

                            <Link spy={true} smooth={true} to="Join">
                                <button className='mt-4 cursor-pointer bg-logo-color text-white hover:border-2 p-4 rounded-xl hover:bg-bg-color hover:text-text-color font-bold'>Join Now → </button>
                            </Link>
                        </ul>
                    </div>
                </div>

                <div>
                    {click && content}
                </div>

                <button className="block sm:hidden transition text-xl" onClick={handleClick}>
                    {click ? <FaTimes /> : <CgMenuGridO />}
                </button>

            </div>
        </nav>
  )
}

export default Nav