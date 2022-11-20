import "./project.scss"
import { GrReactjs } from "react-icons/gr"
import { TbBrandJavascript } from "react-icons/tb"
import { AiFillHtml5 } from "react-icons/ai"
import { FaCss3Alt } from "react-icons/fa"


const data = [
    {
        src: require("../../assets/2022-07-07.png"),
        name: "Portfolio App",
        desc: "portfolio for a website designer that displays through the services it provides",
        icon: [<GrReactjs />],
        netelfiyLink: "https://meek-ganache-2368a7.netlify.app/",
        github: "https://github.com/kahledelgamely/portfolio"
    },
    {
        src: require("../../assets/2022-07-12.png"),
        name: "Reservation App",
        desc: "todo babos sanhgasidg",
        icon: [<GrReactjs />],
        netelfiyLink: "https://speedtypinggamee.netlify.app/",
        github: "https://github.com/kahledelgamely/spead-typing-game"
    },
    {
        src: require("../../assets/2022-07-12 (1).png"),
        name: "Ecommerce App",
        desc: "todo babos sanhgasidg",
        icon: [<GrReactjs />],
        netelfiyLink: "https://speedtypinggamee.netlify.app/",
        github: "https://github.com/kahledelgamely/spead-typing-game"
    },
    {
        src: require("../../assets/2022-07-07 (1).png"),
        name: "Menu App",
        desc: "todo babos sanhgasidg",
        icon: [<AiFillHtml5 />, <FaCss3Alt />, <TbBrandJavascript />],
        netelfiyLink: "https://precious-sawine-a1750f.netlify.app/",
        github: "https://github.com/kahledelgamely/Menu-App"
    },
    {
        src: require("../../assets/2022-07-07 (2).png"),
        name: "Speed typing game",
        desc: "todo babos sanhgasidg",
        icon: [<AiFillHtml5 />, <FaCss3Alt />, <TbBrandJavascript />],
        netelfiyLink: "https://speedtypinggamee.netlify.app/",
        github: "https://github.com/kahledelgamely/spead-typing-game"
    }
]

const Project = () => {
    return (
        <div className="project-container">
            {data.map((item, id) => (
                <div className="project" key={id}>
                    <img src={item.src} alt="" />
                    <div className="project-info">
                        <h3 >{item.name}</h3>
                        <p>{item.desc}</p>
                        <i className="tech-icon">{item.icon}</i>
                        <div className="btns">
                            <a href={item.github} target="_blank" rel="noreferrer">Source Code</a>
                            <a href={item.netelfiyLink} target="_blank" rel="noreferrer">Live Demo</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Project