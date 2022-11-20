import "./projects.scss"
import Project from "../../components/project/Project"


const Projects = () => {
    return (
        <div className='projects'>
            <h1>My Recent Works</h1>
            <p>Here are a few projects I've worked on recently</p>
            <Project />
        </div>
    )
}

export default Projects