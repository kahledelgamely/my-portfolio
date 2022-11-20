import "./resume.scss"

const Resume = () => {
    return (
        <div className="resume">
            <div className="cv">
                <a href="https://drive.google.com/drive/u/1/my-drive" rel="noreferrer" target="_blank">Download</a>
            </div>
            <div className="image">
                <img src={require("../../assets/new resume.png")} alt="" />
            </div>
        </div>
    )
}

export default Resume