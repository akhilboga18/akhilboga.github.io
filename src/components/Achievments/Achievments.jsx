import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { achievments } from '../../utils/data';

function Achievments() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    return (
        <section id='achievments' className='flex flex-col p-3 md:p-12'>
            <h1 data-aos='fade-up' className='text-xl font-semibold text-gray-300 tracking-widest'>ACHIEVMENTS</h1>
            <h1 data-aos='fade-up' className='text-3xl font-semibold text-gray-400 tracking-widest mt-3'>
                My Achievments & Certifications
            </h1>

            <div className="flex flex-col justify-center mt-5">
                {achievments.map(({ id, title, description, image, date, month, year, url }, index) => (
                    <div key={id} className={`flex ${index % 2 === 0 ? 'flex-col lg:flex-row' : 'lg:flex-row-reverse flex-col'} gap-5 items-center md:mx-32`}>
                        {/* left */}
                        <div data-aos='fade-right' className="flex basis-1/2 p-6 flex-row gap-4">
                            <div className="flex flex-col gap-1">
                                <h1 className='text-4xl font-bold text-gray-200'>{date}</h1>
                                <p className='text-gray-500 text-sm'>{month}</p>
                                <p className='text-gray-500 text-sm'>{year}</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h1 className='text-gray-400 text-3xl font-bold'>{title}</h1>
                                <p className='text-gray-500'>{description}</p>
                            </div>
                        </div>

                        {/* right */}
                        <div data-aos='fade-left' className="flex flex-col gap-3 basis-1/2 p-6">
                            <img src={image} alt="" width={500} className='rounded-lg' />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Achievments;
