import "./about.scss"
import WhoIam from "../../components/who iam/WhoIam"
import Skills from "../../components/skills/Skills"

const About = () => {
    return (
        <div className='about'>
            <WhoIam />
            <Skills />
        </div>
    )
}

export default About