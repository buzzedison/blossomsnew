import Header from "../../components/header";
import Fixedmenu from "./components/fixedmenu";
import Mobileheader from "../../components/mobileheader";
import Secondarymenu from "./components/secondarymenu";
import Teamsection from "./components/teamsection";
import Quotesection from "./components/quotesection";
import Footer from "../../components/footer";


const Team = () => {
    return(
        <div className="App">
            {/* <div class="bg-white fixedmenu">
                <Fixedmenu />
            </div> */}
            
            <div class="container-fluid team-bg pt-4">
                <div class="container position-relative">  
                    <div class="menu-fixed container">
                        <Mobileheader />
                        <Header />
                        <Secondarymenu />
                    </div>
                    
                    <h1 class="fredoka bold text-center mt-5 text-heading heading hero-header"  id="ManagementTeam">Meet Our Management Team</h1>
                </div>
            </div>
            <Teamsection />
            <Quotesection />
            <Footer />
        </div>
    );
}

export default Team;