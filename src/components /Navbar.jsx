import React from 'react';
import logo from "../assets/lg.jpeg";



const Navbar = () => {
 

  let links = [
    {name: "Home",link:"/" },
    {name: "About Us",link:"/" },
    {name: "Services",link:"/" },
    {name: "Our Work",link:"/" },
    {name: "Packages",link:"/" },
    {name: "Testimonials",link:"/" },
    {name: "Blog",link:"/" },
    {name: "Contact Us",link:"/" },
  ]
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt='dab' className='w-[124px] h-[60] md:cursor-pointer'/>
    <ul className='list-none sm:flex hidden font-serif justify-end items-center flex-1'>
      {
        links.map((link, index) => (
          <li className = {`font-poppins font normal cursor-pointer text-[16px] ${index === links.length -1 ? 'mr-0': 'mr-10'} text-dimWhite`}>
            <a href={link.link}>{link.name}</a>
          </li>
        ))
      }
    </ul>
    </nav>
  )
}

export default Navbar