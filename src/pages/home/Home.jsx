import "./home.scss"
import MainPage from "../../components/mainPage/MainPage"
import Introduction from "../../components/introduction/Introduction"

const Home = () => {


    return (
        <div className="home">
            <MainPage />
            <Introduction />
        </div>
    )
}

export default Home