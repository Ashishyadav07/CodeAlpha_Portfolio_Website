import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";


const Projects = () => {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Projects"/>
      <div className="flex py-10 gap-10 sm:flex-col">
        <div className="flex flex-col gap-5 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer p-5"
            >
              <h1
                className={`text-xl px-5 
                ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[22px] bg-[#135e4c82] py-5"
                    : "text-white"
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-10 sm:flex-col">
        <img src={projects[selectedItemIndex].image} alt="" className="h-60 w-72"></img>
        <div className="flex flex-col gap-5 w-1/2">
          <h1 className="text-secondary text-xl">
            {projects[selectedItemIndex].title}
          </h1>
          <p className="text-white">{projects[selectedItemIndex].description}</p>
        </div>
        </div>
        
        <div></div>
      </div>
    </div>
  );
};

export default Projects;
