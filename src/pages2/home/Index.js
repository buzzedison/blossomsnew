import Mobileheader from "../../components/mobileheader";
import Header from "../../components/header";
import Headerdata from "./components/headerdata";
import Footer from "../../components/footer";
import Childcaresection from "./components/childcaresection";
import Virtualtoursection from "./components/virtualtoursection";
import Featurescomponent from "./components/featurescomponent";
import Mapcomponent from "./components/mapcomponent";

const Home = () => {
    return(
        <div className="App">
            <div class="container-fluid background">
                <div class="container pt-4">
                    <div class="menu-fixed container">
                        <Mobileheader />
                        <Header />
                    </div>
                    <Headerdata />
                </div>
            </div>

            <Childcaresection />
            <Virtualtoursection />
            <Featurescomponent />
            <Mapcomponent />
            <Footer />
        </div>
    )
}

export default Home;