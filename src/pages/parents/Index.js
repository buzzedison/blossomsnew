import Header from "../../components/header";
import Secondarymenu from "./components/secondarymenu";
import Mobileheader from "../../components/mobileheader";
import Headerdata from "./components/headerdata";
import Parentsection from "./components/parentsection";
import Healthwellsection from "./components/healthwellsection";
import Informedsection from "./components/informedsection";
import Policiessection from "./components/policiessection";
import Footer from "../../components/footer";


const Parents = () => {
    return(
        <div className="App">
            {/* <div class="bg-white fixedmenu">
                <Fixedmenu />
            </div> */}
            <div class="container-fluid team-bg pt-4">
                <div class="container w-100 h-100">  
                    <div class="menu-fixed container">
                        <Mobileheader />
                        <Header />
                        <Secondarymenu />
                    </div>
                    <Headerdata />
                </div>
            </div>
            <div class="parents-body">
                <Parentsection />
                <Healthwellsection />
                <Informedsection />
                <Policiessection />
            </div>
            <Footer />
        </div>
    );
}

export default Parents;