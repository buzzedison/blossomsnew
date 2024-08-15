import { Link } from "react-router-dom";
const Featurescomponent = () => {
    return(
        <section class="features">
            <div class="container-fluid home-parent">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="holder d-flex justify-content-center align-items-center flex-column py-5 mt-5">
                                <h2 class="heading1 text-center">Welcome to Blossoms Childcare</h2>
                            </div>  
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="imageholder mt-5">
                                <img src="./images/childcare.png" alt="" class="imagehold" />
                            </div>
                        </div>
                        <div class="col-lg-6 mt-5 imagetext d-flex flex-column px-4">
                            {/* <div class="px-4"> */}
                                <h3 class="heading2" >A Parent's Perspective</h3>
                                <p class="text-muted mt-3">We provide a secure and loving home-from-home experience, where children can play, learn and blossom.</p>
                                <p class="text-muted">We see everything from a parents point of view, from the standard of care we proudly provide, to making sure we've got your choice of tea, coffee or hot-chocolate ready for you when you drop off your most precious possession.</p>
                                <p class="text-muted">It is important that you understand every step of your child's journey along the Early Years Foundation Stage; we share online learning journeys to record each child's daily progress, learning and achievements. Parents and carers are given unique logins to access these records, and add to their story, to build strong partnerships between the nursery and home learning.</p>
                                
                
                            

                                <Link to="/ForParents#" class="d-flex align-items-center text-decoration-none color align-self-start rounded-3 mt-4">
                                    <span class="px-4 py-2 text fs-7 mb-0">For Parents</span>
                                    <div class="px-3 py-2 chevron">
                                        <i class="fas fa-chevron-right"></i>
                                    </div>
                                </Link>

                                <div class="bg-circle-holder">
                                    <img src="./images/blue-circle-bg.png" alt="" />
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid home-play">
                <div class="container">
                    <div class="row reverse-column">
                        <div class="col-lg-6 mt-5 imagetext justify-content-center d-flex flex-column px-4">
                             {/* <div class="px-4"> */}
                                <h3 class="heading2" >Enabling Play</h3>
                                <p class="text-muted mt-4 baloobhai">We carefully plan environments for 0-4 year-old children, with designated spaces for different age groups, in order for all children to achieve the best outcomes possible, through rich and varied learning experiences.</p>
            
                                <Link to="/OurNursery#" class="d-flex align-items-center text-decoration-none color align-self-start rounded-3 mt-4">
                                    <span class="px-4 py-2 text mb-0 fs-7">Our Nursery</span>
                                    <div class="px-3 py-2 chevron">
                                        <i class="fas fa-chevron-right"></i>
                                    </div>
                                </Link>
            
                                <div class="bg-circle-holder">
                                    <img src="./images/blue-circle-bg.png" alt="" />
                                </div>
                            {/* </div> */}
                        </div>
                        <div class="col-lg-6">
                            <div class="imageholder mt-5">
                                <img src="./images/childd.png" alt="" class="childholder" />
                            </div>
                        </div>
                    </div> 
                </div>
                
            </div>



            <div class="container-fluid">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="imageholder mt-5">
                                <img src="./images/build.png" alt="" class="imagehold" />
                            </div>
                        </div>
                        <div class="col-lg-6 mt-5 imagetext  justify-content-center d-flex flex-column px-4">
                            {/* <div class="px-4"> */}
                                <h3 class="heading2" >Funding Options</h3>
                                <p class="text-muted baloobhai mt-4">We accept 15 hours-a-week (2, 3 and 4 year-old) funded places, and 30 hours-a-week (3 and 4 year-old) funded places for working parents. We also accept Tax-Free Childcare and Childcare Vouchers.</p>
                                
                
                            
            
                                <Link to="/OurFees#" class="d-flex align-items-center text-decoration-none color align-self-start rounded-3 mt-4">
                                    <span class="px-4 py-2 text mb-0 fs-7">Our Fees</span>
                                    <div class="px-3 py-2 chevron">
                                        <i class="fas fa-chevron-right"></i>
                                    </div>
                                </Link>
            
                                <div class="bg-circle-holder">
                                    <img src="./images/blue-circle-bg.png" alt="" />
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}


export default Featurescomponent;