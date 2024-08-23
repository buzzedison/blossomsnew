import { Link } from "react-router-dom";
const Virtualtoursection = () => {
    return(
        <div class="container-fluid background1 p-0">
            <div class="container d-flex justify-content-center mt-5">
                <div class="boxhold w-100">
                    <div class="row mt-5 py-5">
                        <div class="col-lg-12 d-flex justify-content-center mt-5">
                            <div class="boxone d-flex justify-content-center align-items-center flex-column">
                                <img src="./images/sea_bird.png" class="sea-bird"/>
                                <div class="box2 d-flex justify-content-center flex-column align-items-center">
                                    <h3 class="heading1 mb-0 text-center">3D Virtual Tour</h3>
                                    <Link to="/OurNursery" className="text-decoration-none mt-3">
                                        <p class="clicktext mb-0">Click to See Inside Our Nursery</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="box3 d-flex justify-content-center align-items-center">
                                <div class="inbox">
                                    <div class="iconhold d-flex justify-content-center mt-4">
                                        <img src="./images/Group 60.png" alt="" class="w-25" /> 
                                    </div>
                                    <div class="headhold d-flex justify-content-center mt-3">
                                    <a href="https://www.google.com/maps/dir//Blossoms+Childcare+Nursery+West+Raynham,+West+Raynham,+Fakenham/@52.7923248,0.6663746,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47d783d3e4639db9:0x1ec7b870bda3e7da!2m2!1d0.7365857!2d52.7923455?hl=en" 
                                            class="text-decoration-none"
                                            target="_blank"
                                        >
                                        <h3 class="texthead fs-25">Get Directions</h3>
                                        </a>
                                    </div>
                                    <div class="parahold">
                                       
                                            <p class="patext text-center">Find us easily and plan your <br /> route here</p>
                                     
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 d-flex justify-content-center">
                            <div class="box3 d-flex justify-content-center align-items-center bg-ltpink">
                                <div class="inbox">
                                    <div class="iconhold d-flex justify-content-center mt-4">
                                        <img src="./images/GLASS.png" alt="" class="w-25" /> 
                                        </div>
                                        <div class="headhold d-flex justify-content-center mt-3">
                                        <Link to="/BookAShow-Around" className="text-decoration-none">
                                            <h3 class="texthead fs-25"> Book show around</h3>
                                            </Link>
                                        </div>
                                        <div class="parahold">
                                          
                                                <p class="patext text-center">Request a guided tour of our <br /> nursery here</p>
                                          
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 d-flex justify-content-center">
                            <div class="box3 d-flex justify-content-center align-items-center bg-ltyellow">
                                <div class="inbox">
                                    <div class="iconhold d-flex justify-content-center mt-4">
                                        <img src="./images/game.png" alt="" class="w-25" /> 
                                        </div>
                                        <div class="headhold d-flex justify-content-center mt-4">
                                        <Link to="/ApplyForASpace" className="text-decoration-none">  <h3 class="texthead fs-25">Apply for a space</h3>
                                        </Link>
                                        </div>
                                        <div class="parahold">
                                           
                                                <p class="patext text-center">Request a child’s space at our <br /> children’s nursery</p>
                                         
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-lg-6">
                            <div class="box4 d-flex justify-content-center align-items-center">
                                <div class="dashedbox d-flex justify-content-between">
                                    <div class="onebox d-flex flex-column">
                                        <h3 class="texthead mt-4 ms-3 fs-25">Complete Childcare</h3>
                                        <div class="d-flex align-items-center">
                                            <ul class="dotlist d-flex flex-column p-0">
                                                <li><i class="fas fa-circle dotted me-2"></i>7am - 7pm, 7 days a week</li>
                                                <li><i class="fas fa-circle dotted me-2"></i>8 weeks to 4 years old</li>
                                                <li><i class="fas fa-circle dotted me-2"></i>Full Nursery & Pre School</li>
                                                <li><i class="fas fa-circle dotted me-2"></i>Highly Qualified Practitioners</li>
                                            </ul> 
                                        </div>    
                                    </div>
                                    <div class="secondbox my-3 d-flex flex-column align-items-center justify-content-center ps-3">
                                        <img src="./images/hand.png" alt="" class="handimage mb-3" />
                                        <Link className="btn nurserybutton" to="/OurNursery">Our Nursery</Link>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div class="col-lg-6">
                            <div class="box4 fourcolor">
                                <div class="dashedbox d-flex justify-content-between">
                                    <div class="onebox d-flex flex-column">
                                        <h3 class="texthead mt-4 ms-3 fs-25">All Inclusive Fees</h3>
                                        <div class="d-flex align-items-center">
                                            <ul class="dotlist d-flex flex-column p-0">
                                                <li><i class="fas fa-circle dotted me-2"></i>Fresh Home-cooked Meals</li>
                                                <li><i class="fas fa-circle dotted me-2"></i>Healthy Breakfast & Snacks</li>
                                                <li><i class="fas fa-circle dotted me-2"></i>Free Nappies</li>
                                                <li><i class="fas fa-circle dotted me-2"></i>Hot Drinks for Parents</li>
                                            </ul> 
                                        </div>    
                                    </div>
                                    <div class="secondbox my-3 d-flex flex-column align-items-center justify-content-center ps-3">
                                        <img src="./images/piggi.png" alt="" class="handimage mb-3" />
                                        <Link className="btn nurserybutton" to="/OurFees">Our Fees</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Virtualtoursection;