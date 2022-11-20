import "./contact.scss"
import { AiFillLinkedin } from "react-icons/ai"
import { AiOutlineGithub } from "react-icons/ai"
import { FiSend } from "react-icons/fi"

const Contact = () => {
    return (
        <div className='contact'>
            <h1>FIND ME ON</h1>
            <p>Feel free to <span>connect</span> with me</p>
            <div className="icons">
                <a href="https://www.linkedin.com/in/khalid-elgamely-874470242/" target="_blank"><AiFillLinkedin /></a>
                <a href="https://github.com/kahledelgamely" target="_blank"> <AiOutlineGithub /></a>
                <a href="https://t.me/khaledelgamely50" target="_blank"><FiSend /></a>
            </div>
            <p>Developed by <span>Khaled Elgamely</span> Copyright © 2021</p>
        </div>
    )
}

export default Contact