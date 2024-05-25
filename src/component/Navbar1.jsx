import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { GoPerson } from "react-icons/go";

//image
import logo from '../assets/logo.png';

//icons
import { IoMdMenu, IoMdClose } from "react-icons/io";


const Navbar1 = ({isToggled, setIsToggled}) => {


    const navigate = useNavigate();

    


  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This enables smooth scrolling
    });
  }

    //handle toggle for menu for small screen
    // const [isToggled, setIsToggled] = useState(false);
    const [isToggled1, setIsToggled1] = useState(false);

    const [fram,setframe]=useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
       
        document.getElementById('left').style.display = "none";
        document.getElementById("restaurant").style.display = "none";

    };
    const handleToggle1 = () => {
        setIsToggled(!isToggled1);
       
        document.getElementById('left').style.display = "block";
        scrollToTop();
        document.getElementById("restaurant").style.display = "block";

    };

    const frames1 =()=>{
        setframe(!fram);
        document.getElementById('frame').style.display = "none";
        document.getElementById("restaurant").style.display = "none";
    };
    const frames2 =()=>{
        setframe(!fram);
        document.getElementById('frame').style.display = "block";
        document.getElementById("restaurant").style.display = "block";
    };
    // Function to handle link click
    const handleLinkClick = () => {
        if (isToggled) {
            setIsToggled(false);
        }
    };


    
    return (
        <div className='fixed bg-white sm:z-[600] z-[900] w-full h-[70px] flex justify-between items-center px-[1.5rem]'>
            {/* logo */}
            <img
                onClick={
                    () => {
                        navigate('/');
                    }
                } src={logo} alt='logo'
                className='h-full aspect-auto  cursor-pointer sm:block hidden ' />

            

            {/* menu-icons */}
            {
                isToggled ?
                    (<IoMdClose
                        className='sm:hidden block text-[1.7rem] size-7 '
                        onClick={handleToggle} />) :
                    (<IoMdMenu
                        className='sm:hidden block text-[1.6rem] size-7 '
                        onClick={handleToggle1} />)
            }
            <div className=' size-14 sm:hidden block rounded-full border  items-center justify-center  relative  '>
                {
                    fram ? 
                    (<img src="/image 148 (1).png" alt='' className='size-full ' onClick={frames1} />):
                    (<img src="/image 148 (1).png" alt='' className='size-full ' onClick={frames2} />)
                }
            {/* <img src="/image 148 (1).png" className='size-fit' alt="" /> */}
            {/* <GoPerson className='size-7 ' onClick={frames1} /> */}
            </div>

        </div>
    )
}

export default Navbar1
