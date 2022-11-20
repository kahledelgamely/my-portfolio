import "./mainPage.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"
import { MdWavingHand } from "react-icons/md"

const MainPage = () => {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current
            , {
                showCursor: false,
                strings: ["Front-End Developer"]
            })

    }, [])


    return (
        <div className="mainPage">
            <div className="main-info">
                <h1>Hi There,<MdWavingHand />
                    <br />
                    I'M <span className="ityped-title">KHALED ELGAMELY</span>
                </h1>
                <br />
                <h1>
                    <span className="ityped" ref={textRef}></span>
                </h1>
            </div>
            <div className="image">
                <img src={require("../../assets/785a1b9c359640da6bc9cfe3670b42ba.png")} alt="" />
            </div>
        </div>
    )
}

export default MainPage