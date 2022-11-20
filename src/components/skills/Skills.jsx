import "./skills.scss"
import { AiOutlineHtml5 } from "react-icons/ai"
import { DiCss3 } from "react-icons/di"
import { TbBrandJavascript } from "react-icons/tb"
import { DiReact } from "react-icons/di"
import { SiMaterialui } from "react-icons/si"
import { SiRedux } from "react-icons/si"
import { FaSass } from "react-icons/fa"
import { TbBrandBootstrap } from "react-icons/tb"
import { AiOutlineGithub } from "react-icons/ai"

const Skills = () => {
    return (
        <div className="skills">
            <h1>Professional <span>Skillset</span></h1>
            <div className="skill-container">
                <div className="skill">
                    <AiOutlineHtml5 className="icon" />
                    <h3>HTML5</h3>
                </div>
                <div className="skill">
                    <DiCss3 className="icon" />
                    <h3>CSS3</h3>
                </div>
                <div className="skill">
                    <TbBrandJavascript className="icon" />
                    <h3>JAVASCRIPT / ES6</h3>

                </div>
                <div className="skill">
                    <DiReact className="icon" />
                    <h3>REACT</h3>
                </div>
                <div className="skill">
                    <SiRedux className="icon" />
                    <h3>Redux</h3>
                </div>
                <div className="skill">
                    <FaSass className="icon" />
                    <h3>SASS</h3>
                </div>
                <div className="skill">
                    <TbBrandBootstrap className="icon" />
                    <h3>BOOTSTRAP</h3>
                </div>
                <div className="skill">
                    <SiMaterialui className="icon" />
                    <h3>MATERIAL UI</h3>
                </div>
                <div className="skill">
                    <AiOutlineGithub className="icon" />
                    <h3>GITHUB</h3>
                </div>
            </div>
        </div>
    )
}

export default Skills