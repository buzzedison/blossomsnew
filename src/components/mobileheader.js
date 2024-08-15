import { Link } from "react-router-dom";

const Mobileheader = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-white d-lg-none d-md-block">
            <div class="container-fluid">
            <Link className="navbar-brand logoholder" to="/">
                <img src="./images/blossom logo.png" alt="" class="logo img-fluid" />
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="main_nav">
              <ul class="navbar-nav mt-3">
                <li class="nav-item active"> <Link  className="nav-link baloobhai" to="/">Homepage </Link> </li>
                <li class="nav-item"><Link  className="nav-link baloobhai" to="/OurNursery"> Our Nursery </Link></li> 
                <li class="nav-item"><Link  className="nav-link baloobhai" to="/OurTeam"> Our Team </Link></li> 
                <li class="nav-item"><Link  className="nav-link baloobhai" to="/ForParents"> For Parents </Link></li> 
                <li class="nav-item"><Link  className="nav-link baloobhai" to="/OurFees">Our Fees </Link></li> 
                <li class="nav-item"><Link  className="nav-link baloobhai" to="/GetInTouch">Get In Touch </Link></li> 
              </ul>
            </div>
            </div>
        </nav>
    );
}

export default Mobileheader;