import React from "react";

const Govtsession = () => {
    return(
        <div id="FreeGovernmentFundedSessions">
            <h2 class="heading text-center pt-5 pb-3">Totally Free Government Sessions</h2>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 mb-4">
                        <p class="baloobhai text-center">We accept Government Childcare Funding, offering some totally 
                            free sessions for parents claiming Government Funded Sessions.
                             (As with all spaces, these are subject to availability.)</p>
                    </div>
                    <div class="col-lg-8 pink-dashed">
                        <h5 class="baloobhai text-center pt-4 pb-0 fw-bolder">Monday to Friday Free Sessions (All Year - Stretched Funding Allowance) Subject to availability.</h5>
                        <div class="pb-2 text-center">

                            <p class="text-muted" style={{fontSize: "18px"}}>Standalone sessions only; these sessions cannot be used on the same day, and cannot be used in conjunction with part-funded sessions. Children must bring a bag of consumables with them for each session. 
                                Children must take home all waste home with them at the end of each session. 
                                Please ask for details.</p>
                        </div>
                        <div class="sessionholder baloobhai">
                            <div class="d-flex justify-content-between">
                                <p>Funded Morning Sessions: 9am - 12pm (3 Hours)</p>
                                <p>  £0.00</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Funded Afternoon Sessions: 1pm - 4pm (3 Hours)	</p>
                                <p>  £0.00</p>
                            </div>
                            {/* <div class="d-flex justify-content-between">
                                <p>Funded Long PM Sessions: 1pm - 4pm</p>
                                <p> £0.00</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Govtsession;