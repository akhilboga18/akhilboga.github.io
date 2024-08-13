import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from 'react';

function Skills() {
  // Array of skill objects with name and percentage
  const skills = [
    { name: 'Power BI', percentage: 90 },
    { name: 'Python', percentage: 80 },
    { name: 'SQL', percentage: 95 },
    { name: 'AWS', percentage: 85 },
  ];

  const skillsRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 2000 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger the animation for each skill bar
            skills.forEach((skill, idx) => {
              const bar = document.getElementById(`skill-bar-${idx}`);
              if (bar) {
                bar.style.width = `${skill.percentage}%`;
              }
            });
            observer.unobserve(skillsRef.current); // Stop observing after the animation is triggered
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is in view
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id='skills' ref={skillsRef} className='flex flex-col p-3 md:p-12'>
      <h1 data-aos='fade-up' className='text-xl font-semibold text-gray-300 tracking-widest'>SKILLS</h1>
      <h1 data-aos='fade-up' className='text-3xl font-semibold text-gray-500 tracking-widest mt-3'>
        Aspiring Data Analyst Ready to Make an Impact
      </h1>

      <div className="flex flex-col lg:flex-row justify-center mt-5">
        {/* left */}
        <div data-aos='fade-right' className="flex basis-1/2 p-6 flex-col gap-3">
          <p className='text-sm md:text-base text-gray-400'>My name is Akhil Boga and I am an aspiring data analyst. As an aspiring data
            analyst with a strong desire to learn and grow, I am excited to bring my passion and dedication
            to the field. I want to share my story in discovering data analytics. Recognizing the
            potential for a fulfilling and exciting career in this field, I immediately enrolled in Refocus to
            fast track my education and training in data analytics. I was excited to have this opportunity and was
            committed to making the most of it.</p>
          <p className='text-sm md:text-base text-gray-400'>Through my studies at Refocus , I gained a strong foundation in the tools and techniques used in the field,
            as well as the practical experience needed to succeed as a data analyst. I also participated in a group project
            assignment where our data analytics skills and presentation skills were tested. While enrolled in Refocus,
            I also took some online virtual trainings like Data Analytics and Visualization from Accenture North America,
            Power BI in Data Analytics by PwC Switzerland, and Career essentials in Data analysis by Microsoft and LinkedIn
            and completed online certifications like Google Data Analytics, IT Automation with Python, and Microsoft Power Platforms.</p>
        </div>

        {/* right */}
        <div data-aos='fade-left' className="flex flex-col gap-3 basis-1/2 p-6">
          {/* Skills with progressive bars */}
          {skills.map((skill, idx) => (
            <div key={idx}>
              <label className='text-gray-400'>{`${skill.name} - ${skill.percentage}%`}</label>
              <div className="w-full bg-gray-700 rounded-full h-3 md:h-4 mt-2">
              <div
                  id={`skill-bar-${idx}`}
                  className="bg-gradient-to-r from-[#a993fe] to-[#7e61e7] h-3 md:h-4 rounded-full"
                  style={{
                    width: '0%',
                    transition: 'width 2s ease-out',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;