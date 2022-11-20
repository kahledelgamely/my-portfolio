import "./introduction.scss"

const Introduction = () => {
    return (
        <div className="introduction">
            <div className="image">

                <img src={require("../../assets/avatar-2092113_960_720.png")} alt="" />
            </div>
            <div className="introduction-info">
                <h1>LET ME INTRODUCE MYSELF</h1>
                <p>I fell in love with programming and I have at least learned something, I think… </p>
                <span>I am fluent in classic like <span className="classic">Javascript</span></span>

                <p>I am a Front-end web developer or client-side development, refers to working with <span className="classic"> HTML , CSS and Javascript</span> for a website or web application that allows users to see and interact with them directly</p>

                <p>I am building a responsive website front end using <span className="classic">React</span></p>

            </div>
        </div>
    )
}

export default Introduction