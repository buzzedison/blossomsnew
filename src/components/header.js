import { NavLink, Link } from "react-router-dom";

const Header = () => {
    return(
        <div class="menuholder d-none d-lg-block">
                <div class="row">
                    <div class="col-lg-2 logoholder d-flex justify-content-center align-items-center">
                        <Link to="/" className="text-decoration-none">
                            <img src="./images/blossom logo.png" alt="" class="logo" />
                        </Link>
                    </div>
                    <div class="col-lg-9 d-flex align-items-center">
                        <ul class="d-flex p-0 mb-0 w-100 d-menu">
                            <li><NavLink to="/"> <span class="">Homepage</span></NavLink></li>
                            <li><NavLink to="/OurNursery">Our Nursery</NavLink></li>
                            <li><NavLink to="/OurTeam">Our Team</NavLink></li>
                            <li><NavLink to="/ForParents">For Parents</NavLink></li>
                            <li><NavLink to="/OurFees">Our Fees</NavLink></li>
                            <li><NavLink to="/GetInTouch">Get In Touch</NavLink></li>
                        </ul> 
                    </div>
                    <div class="col-lg-1 d-flex align-items-center justify-content-end">
                        {/* <div class="rounded-circle d-flex justify-content-center align-items-center bg-pink">
                            <i class="fab fa-instagram iconinsta"></i> 
                        </div> */}
                        <a href="https://www.facebook.com/BlossomsChildcareWestRaynham" target="_blank" class="facebook rounded-circle d-flex justify-content-center align-items-center ms-3">
                            <i class="fab fa-facebook-f iconinsta"></i>
                        </a>
                        {/* <div class=" twitter rounded-circle d-flex justify-content-center align-items-center ms-3">
                            <i class="fab fa-twitter iconinsta"></i>
                        </div> */}
                    </div>     
                </div> 
                
        </div>
    );
}

export default Header;