import Mobileheader from "../../components/mobileheader";
import Header from "../../components/header";
import Secondarymenu from "./components/secondarymenu";
import Footer from "../../components/footer";
import Tour from "./components/tour";
import './Nursery.scoped.css';
import Different from "./components/different";
import Areas from "./components/areas";
import Play from "./components/play";
import Faq from "./components/faq";
import Routines from "./components/routines";
import Childcare from "./components/childcare";
import Mobile from "./components/mobile";
import Fixedmenu from "./components/fixedmenu";
import Modern from "./components/modern";
const Nursery = () => {
    return(
        <div className="App">
            <div class="container-fluid p-0">
                {/* <div class="bg-white fixedmenu">
                    <Fixedmenu />
                </div> */}
                
                <div class="container pt-4">
                    <div class="menu-fixed container">
                        <Mobileheader />
                        <Header />
                        <Secondarymenu />
                    </div>
                </div>
            </div>
            <Tour />
            <Different/>
            <Areas/>
            <Play />
            <Faq />
            <Routines />
            <Childcare/>
            <Mobile/>
            <Modern />
            <Footer />
        </div>
    )
}

export default Nursery;