import React from 'react';
import './MobileNav.css';
import Resume from '../../assets/AkhilBoga_DataAnalyst_Resume.pdf';
import { BiDownArrowAlt } from 'react-icons/bi';

function MobileNav({ isOpen, toggleMenu }) {

    return (
        <>
            <div className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="mobile-menu-container">
                    {/* <img src={logo} alt="Logo" className="logo" /> */}
                    <h1 className='logo text-3xl text-white'>Akhil B</h1>

                    <ul>
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
                    <button className='contact-btnm rounded-2xl mt-8'>
                        {/* <Link to='#'>Hire Me</Link> */}
                        <a
                            className='flex gap-3 items-center'
                            href={Resume}
                            download='AkhilBoga_DataAnalyst_Resume.pdf'>Resume <BiDownArrowAlt /></a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default MobileNav;