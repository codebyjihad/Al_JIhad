import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  const [projects , setProjects] = useState([])

  useEffect(() => {
    fetch("../projects.json")
    .then(res => res.json())
    .then(data => setProjects(data))
    .catch(error => {
      console.log(error)
    })
  }, [])

  console.log(projects)
  return (
    <>
      <div className="container mx-auto my-10">
        <div className='mb-5'>
          <h1 className="text-3xl font-bold text-white text-center">My Projects</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {
            projects.map(project => <ProjectCard key={project.id} project={project}/>)
          }
        </div>
      </div>
    </>
  );
}

export default Projects