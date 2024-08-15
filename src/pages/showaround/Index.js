import Header from "../../components/header";
import Mobileheader from "../../components/mobileheader";
import Headerdata from "./components/headerdata";
import Formsection from "./components/formsection";
import Footer from "../../components/footer";



const Showaround = () => {
    return(
        <div className="App">
            <div class="container-fluid team-bg pt-4">
                <div class="container w-100 h-100">  
                    <div class="menu-fixed container">
                        <Mobileheader />
                        <Header />
                    </div>
                    <Headerdata />
                </div>
            </div>
            <Formsection />
            <Footer />
        </div>
    );
}

export default Showaround;