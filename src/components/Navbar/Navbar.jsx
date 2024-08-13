import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from '../MobileNav/MobileNav';
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import Resume from '../../assets/AkhilBoga_DataAnalyst_Resume.pdf';
import { BiDownArrowAlt } from 'react-icons/bi';

function NavBar() {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };


    return (
        <>
            <MobileNav
                isOpen={openMenu}
                toggleMenu={toggleMenu} />

            <nav className="nav-wrapper">
                <div className="nav-content">
                    <h1 className='logo text-3xl font-bold text-white'>Akhil B</h1>

                    <ul className='shadow-xl rounded-full'>
                        <li>
                            <a href='#home' className='menu-item text-gray-400 hover:text-gray-300'>Home</a>
                        </li>
                        <li>
                            <a href='#about' className='menu-item text-gray-400 hover:text-gray-300'>About</a>
                        </li>
                        <li>
                            <a href='#skills' className='menu-item text-gray-400 hover:text-gray-300'>Skills</a>
                        </li>
                        <li>
                            <a href='#projects' className='menu-item text-gray-400 hover:text-gray-300'>Projects</a>
                        </li>
                        <li>
                            <a href='#achievments' className='menu-item text-gray-400 hover:text-gray-300'>Achievments</a>
                        </li>
                    </ul>
                    <button className='contact-btn rounded-full'>
                        {/* <Link to='#'>Hire Me</Link> */}
                        <a
                            className='flex gap-3 items-center'
                            href={Resume}
                            download='AkhilBoga_DataAnalyst_Resume.pdf'>Resume <BiDownArrowAlt /></a>
                    </button>

                    <button className="menu-btn" onClick={toggleMenu}>
                        <span style={{ fontSize: '1.8rem' }}>
                            {openMenu ? <MdClose className='text-white' /> : <RiMenu3Fill className='text-white' />}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default NavBar;