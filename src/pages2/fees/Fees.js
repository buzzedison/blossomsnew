import React from 'react'
import Mobileheader from '../../components/mobileheader';
import Secondarymenu from './components/secondarymenu';
import Pageinfo from "./components/pageinfo";
import Header from '../../components/header';
import Allinclusive from './components/allinclusive';
import Sessionfee from './components/sessionfee'
import Governmentfunded from './components/govermentfunded';
import Govtsession from './components/govtsession';
import Funding from './components/funding';
import Footer from '../../components/footer'
const Fees = () => {
    return(
        <div className="App">
            <div class="container-fluid p-0">
                <div class="container" id="registration">
                        <div class="menu-fixed container">
                            <Mobileheader />
                            <Header />
                            <Secondarymenu />
                        </div>
                </div>
                <Pageinfo />
                <div class="container">
                    <h2 class="heading text-center py-5 hero-header" id="RegistrationFee">Registration Fee</h2>
                    <div class="row justify-content-center">
                        <div class="col-lg-8 bg-pink baloobhai text-white p-5 registration_info">
                            <p>When you join the Blossoms Childcare family, we have a Registration Fee of £100 which is non-refundable.
                                This fee reserves your child’s space at our nursery and contributes to the administration and welcome sessions.</p>
                            <p>Depending on when you need to start, we try to provide 4 welcome sessions - 2 one hour welcome sessions and 2 two hour welcome sessions - to help your child become familiar with our environment. We also use this time to evaluate who would be the best match for their Key Person.</p>
                            <p>If you are starting immediately, we will issue your child with Blossoms uniform - a black, branded polo shirt for each day of the week they will be attending, plus a black, branded fleece. However, if you aren’t starting with us immediately, the uniform will be issued when you start, just in-case your child has outgrown it before they join us. This uniform will be replaced as-and-when they outgrow it, and you can purchase additional uniform if you would like to.</p>
                            <p><b>Our Registration Fee is £100, and is non-refundable, even if you don’t take your place.</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid bg_fees2">
                <Allinclusive />
                <Sessionfee/>
                <Governmentfunded/>
                <Govtsession />
                <Funding />
                <Footer />
            </div>
        </div>
    )
}

export default Fees;