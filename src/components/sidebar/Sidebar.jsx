import "./sidebar.scss"
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineComputer } from "react-icons/md";
import { AiFillFilePdf } from "react-icons/ai";
import { FiMenu } from "react-icons/fi"
import { useState } from "react";



const Sidebar = () => {

    const [active, setActive] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const handleActive = () => {
        setActive(true)
    }

    return (
        <div className="sidebar">
            <h2><a href="/">Khaled's Portfolio</a></h2>
            <ul className={isOpen ? "open" : "close"}>
                <li className={active ? "active" : ""} onClick={() => handleActive()}>
                    <AiFillHome className="icon" />
                    <a href="/">Home</a>
                </li>
                <li >
                    <BsFillPersonFill className="icon" />
                    <a href="about">About</a>
                </li>
                <li >
                    <MdOutlineComputer className="icon" />
                    <a href="projects">Projects</a>
                </li>
                <li >
                    <AiFillFilePdf className="icon" />
                    <a href="resume">Resume</a>
                </li>
            </ul>
            <FiMenu className="menu" onClick={() => setIsOpen(!isOpen)} />
        </div>
    )
}

export default Sidebar