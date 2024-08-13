import React, { useEffect, useState } from 'react';
import { projects } from '../../utils/data';

import Aos from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("Power BI");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);

  // categories list
  let filters = ["Power BI", "Tableau", "SQL"];

  const handleFilterButtonClick = (selectedCategory) => {
    setSelectedFilter(selectedCategory);
  };

  useEffect(() => {
    filterProjects();
  }, [selectedFilter]);

  const filterProjects = () => {
    let tempProjects = projects.filter((project) => project.category === selectedFilter);
    setFilteredProjects(tempProjects);
  };

  return (
    <section id='projects' className='flex flex-col p-3 md:p-12'>
      <h1 data-aos='fade-up' className='text-xl font-semibold text-gray-300 tracking-widest'>PROJECTS</h1>
      <div className="flex flex-col items-center mt-5">
        {/* categories */}
        <div data-aos='fade-up' className="flex">
          {filters.map((category, idx) => (
            <button
              onClick={() => handleFilterButtonClick(category)}
              className={`text-gray-300 text-sm md:text-lg m-1 md:m-2 p-2 px-3 md:px-5 rounded-full border-2 border-gray-500 hover:border-[#6646db] hover:text-gray-300 hover:bg-transparent ${selectedFilter === category
                ? "bg-[#7153db] text-gray-200 border-[#6646db]" : ""
                }`}
              key={`filters-${idx}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* category items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          {filteredProjects.map((project, idx) => (
            <div
              data-aos='fade-up'
              key={`projects-${idx}`}
              className="group relative m-4 p-4 rounded-lg bg-cover bg-center flex items-end cursor-pointer w-100 h-72"
              style={{ backgroundImage: `url(${project.image})` }}>
              <div className="w-full p-2">
                <p className='text-gray-200 uppercase text-transparent'>{project.title}</p>
                <p className="text-gray-300 uppercase text-xs">{project.category}</p>
              </div>
              <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm text-center text-gray-200 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={project.url} className='font-bold text-xl' target='_blank'>{project.title}</a>
                <a href={project.url} target='_blank'>{project.description}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;