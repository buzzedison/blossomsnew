import Header from "../../components/header";
import Pageinfo from "./components/pageinfo";
import Secondarymenu from "./components/secondarymenu";
import Mobileheader from "../../components/mobileheader";
import Headerdata from "./components/headerdata";
import Applyspacesection from "./components/applyspacesection";
import Contactsection from "./components/contactsection";
import Footer from "../../components/footer";


const Touch = () => {
    return(
        <div className="App">
             {/* <div class="bg-white fixedmenu">
                <Fixedmenu />
            </div> */}
            <div class="container-fluid">
                <div class="container w-100 h-100">  
                    <div class="menu-fixed container">
                        <Mobileheader />
                        <Header />
                        <Secondarymenu />
                    </div>
                </div>
            </div>
            <Pageinfo />
            <Applyspacesection />
            <Contactsection />
            <Footer />
        </div>
    );
}

export default Touch;