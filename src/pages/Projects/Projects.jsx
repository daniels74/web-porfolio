import React from 'react'
import "./Projects.css"
import Card from "./Card"
import allData from "./data"

const Projects = () => {

  const reactProjects = allData.reactProjects.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  const angularProjects = allData.angularProjects.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  const projectsData = allData.data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="main-container">
      <div className="projects-exterior-container">
        <div className="projects-inner-container">
        <div className="project-title">
            <h1>React</h1>
          </div>
          <div className="wrapper">
            {reactProjects}
          </div>
        <div className="project-title">
            <h1>Angular</h1>
          </div>
          <div className="wrapper">
            {angularProjects}
          </div>
          <div className="project-title">
            <h1>C++</h1>
          </div>
          <div className="wrapper">
            {projectsData}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects 