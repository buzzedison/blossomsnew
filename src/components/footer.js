const Footer = () => {
    return(
        <div class="container-fluid footerbackground p-0 m-0">
            <div class="container">
                <div class="row mt-2">
                    <div class="col-lg-3 mt-5 d-flex flex-column align-items-center d-md-block">
                        <img src="./images/blochild.png" alt="" class="blochild" />
                        <p class="patext text-muted blochild text-center">Where Children Play, <br />Learn & Blossom</p>
                    </div>
                    <div class="col-lg-3 mt-5">
                        <h1 class="textopen">Opening Times</h1>
                        <div class="d-flex mt-4">
                            <ul class="mondaylist d-flex flex-column w-50 p-0 baloobhai text-secondary fs-7">
                                <li>Monday   </li>
                                <li>Tuesday </li>
                                <li>Wednesday </li> 
                                <li>Thursday </li>
                                <li>Friday </li>
                                <li>Saturday </li>
                                <li>Sunday </li>
                            </ul>
                            <ul class="mondaylist d-flex flex-column w-50 p-0 baloobhai text-secondary fs-7">
                                <li>07:00 - 19:00</li>
                                <li>07:00 - 19:00</li>
                                <li>07:00 - 19:00</li> 
                                <li>07:00 - 19:00</li>
                                <li>07:00 - 19:00</li>
                                <li>07:00 - 19:00</li>
                                <li>07:00 - 19:00</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div class="col-lg-3 mt-5">
                        <h1 class="textopen">Contact Information</h1>
                        <p class="patext text-muted mt-4">Katie Gilkes MA EYT <br/>
                            katie@nkchildcare.co.uk<br />
                            07887373737<br />
                            Blossoms Childcare Nursery<br />
                            The Burr Centre, <br /> Blenheim Square, <br />
                            West Raynham, <br /> Fakenham, 
                            Norfolk NR21 7PA</p>
                    </div>
                    <div class="col-lg-3 d-flex justify-content-center align-items-center flex-column ofsted px-5">
                        <img src="./images/ofsted.png" alt="" class="blochild mb-2" />
                        <p class="patext mb-0 text-muted text-center">Private Childcare Setting</p>
                        <p class="patext mb-0 text-muted text-center">Ofsted Registration EY545389</p>
                    </div>
                </div>
                <div class="d-flex justify-content-center text-secondary pb-3 text-center d-none">
                    <small>Designed, developed and maintained by <a href="https://redarc.in" target="_blank" class="text-decoration-none text-pink">RedArc Technology</a></small>
                </div>
            </div>
        </div>
    )
}


export default Footer;