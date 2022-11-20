import "./WhoIam.scss"
import { FaUniversity } from "react-icons/fa"
import { FaUserGraduate } from "react-icons/fa"


const WhoIam = () => {
    return (
        <div className="who-iam">
            <div className='who-info'>
                <div className="desc">
                    <h1>Know Who <span>I'M</span></h1>
                    <p>Hi Everyone, I am <span>Khaled Elgamely</span> from mansoura , Egypt I am a junior Front End Developer.</p>
                    <p>Building resposive website front end using <span>React</span>
                    </p>
                </div>
                <img src={require("../../assets/about.aee0f771.png")} alt="" />
            </div>
            <div className="education">
                <img src={require("../../assets/concept-based-photo-illustration-of-graduation.png")} alt="" />
                <div className="cet-info">
                    <div className="cert">
                        <div className="name-icon">
                            <FaUniversity className="icon" />
                            <h1> Education</h1>
                        </div>
                        <span>Basic Qualification and Certifications</span>
                    </div>
                    <div className="cert">
                        <div className="name-icon">
                            <FaUserGraduate className="icon" />
                            <h1> Degree Received</h1>
                        </div>
                        <span>Faculty of Clinical Pharmacy, Mansoura University</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoIam