import { Link } from "react-router-dom";
const Contactsection = () => {
    return(
        <div id="ContactDetails">
            <section class="contact-container">
                <div class="container d-flex flex-column align-items-center">
                    <h2 class="fredoka bold mb-5  text-center text-heading heading">Our Contact Details</h2>
                </div>
            </section>

            <section class="contact-details mt-4">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="white-box">
                                <div class="row">
                                    <div class="col-lg-5">
                                        <div class="pink-section p-5 text-white baloobhai">
                                            <h3 class="regular mb-0">Contact Details</h3>
                                            <span>How can we help you? We would love to hear from you.</span>
                                            <ul class="p-0 mt-5 text-white">
                                                <li>
                                                    <div class="d-flex align-items-center">
                                                        <div class="icon-holder me-3">
                                                            <i class="fas fa-phone-alt"></i>
                                                        </div>
                                                        <div class="d-flex flex-column cont-item">
                                                            <span>Call Us</span>
                                                            <a href="tel:" class="regular text-white text-decoration-none">07887373737</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex align-items-center">
                                                        <div class="icon-holder me-3">
                                                            <i class="fas fa-envelope"></i>
                                                        </div>
                                                        <div class="d-flex flex-column cont-item">
                                                            <span>Mail Us</span>
                                                            <a href="mailto:katie@nkchildcare.co.uk" class="regular text-white text-decoration-none">katie@nkchildcare.co.uk</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex align-items-start">
                                                        <div class="icon-holder me-3">
                                                            <i class="fas fa-map-marker-alt"></i>
                                                        </div>
                                                        <div class="d-flex flex-column cont-item">
                                                            <span>Nursery Address</span>
                                                            <span class="regular">
                                                                Blossoms Childcare, The Burr Centre, <br />
                                                                Blenheim Square, West Raynham, <br />
                                                                Fakenham, Norfolk, NR21 7PA. <br />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            
                                            <div class="">
                                                <img src="/images/contact_toon.png" class="img-fluid contact-toon" />
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div class="col-lg-7">
                                        <h3 class="baloobhai regular fs-25">Our Location:</h3>
                                        <p class="baloobhai text-secondary mb-0 mt-3 fs-25">
                                            We are based on the old RAF West Raynham airbase near the borders of North Norfolk,
                                            Breckland and West Norfolk districts. You’ll find us 15 minutes from Fakenham town centre, 20 minutes from Swaffham town centre, 
                                            and 30 minutes from King’s Lynn town centre. More precisely, we’re between the villages of West Raynham to our east, East Rudham to our north, Great Massingham to our west, and Weasenham to our south.
                                        </p>
                                        <div class="map-container">
                                            <img src="./images/contact_map.jpg" alt="" class="img-fluid mt-5 rounded" />
                                            <a href="https://www.google.com/maps/dir//Blossoms+Childcare+Nursery+West+Raynham,+West+Raynham,+Fakenham/@52.7923248,0.6663746,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47d783d3e4639db9:0x1ec7b870bda3e7da!2m2!1d0.7365857!2d52.7923455?hl=en" class="btn btn-sm baloobhai regular text-white" target="_blank"><i class="fas fa-directions me-2"></i>Get Directions</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contactsection;