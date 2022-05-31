import React from 'react'
import "./Projects.css"
import Card from "./Card"
import data from "./data"

const Projects = () => {
  
  const projectsData = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="main">
      <div className="projects">
          <h1>C++</h1>
          <div className="wrapper">
            {projectsData}
          </div>
        </div>
    </div>
  )
}

export default Projects 