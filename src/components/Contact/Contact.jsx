import React, { useEffect } from 'react'
import { LiaLinkedin, LiaFacebook, LiaInstagram, LiaGithub } from 'react-icons/lia';
import { MdEmail, MdPhone } from 'react-icons/md';

import Aos from 'aos';
import 'aos/dist/aos.css';

function Contact() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    return (
        <section id='contact' className='flex flex-col p-3 md:p-12'>
            <h1 className='text-xl font-semibold text-gray-300 tracking-widest'>CONTACT</h1>

            <div className="flex flex-col lg:flex-row justify-center mt-5 px-6">
                {/* left */}
                <div className="flex basis-1/3 p-6 flex-col gap-3">
                    <h1 data-aos='fade-up' className='flex gap-2 text-gray-400 items-center text-xl font-semibold'>
                        <MdEmail /> Email:
                    </h1>
                    <p data-aos='fade-up'>
                        <a
                            href="mailto:akhilboga777@gmail.com"
                            className='text-gray-200'>
                            akhilboga777@gmail.com
                        </a>
                    </p>
                </div>

                {/* middle */}
                <div className="flex basis-1/3 p-6 flex-col gap-3">
                    <h1 data-aos='fade-up' className='flex gap-2 text-gray-400 items-center text-xl font-semibold'>
                        <MdPhone /> Phone:
                    </h1>
                    <p data-aos='fade-up'>
                        <a
                            href="tel:+1 9402998108"
                            className='text-gray-200'>
                            +1 9402998108
                        </a>
                    </p>
                </div>

                {/* right */}
                <div className="flex basis-1/3 p-6">
                    <div data-aos='fade-up' className="flex list-none gap-3">
                        {/* <a href="#" className='text-gray-500 hover:text-gray-300 transition-all'><LiaFacebook size={35} /></a> */}

                        <a href="https://www.instagram.com/soncasm/" target='_blank' className='text-gray-500 hover:text-gray-300 transition-all'><LiaInstagram size={35} /></a>

                        <a href="https://www.linkedin.com/in/akhilb18/" target='_blank' className='text-gray-500 hover:text-gray-300 transition-all'><LiaLinkedin size={35} /></a>

                        <a href="https://github.com/akhilboga18" target='_blank' className='text-gray-500 hover:text-gray-300 transition-all'><LiaGithub size={35} /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;