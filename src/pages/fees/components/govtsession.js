import React from "react";

const Govtsession = () => {
    return(
        <div id="FreeGovernmentFundedSessions">
            <h2 class="heading text-center pt-5 pb-3">Free Government Sessions</h2>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 mb-4">
                        <p class="baloobhai text-center">We accept Government Childcare Funding, offering some totally free sessions for parents claiming Government Funded Sessions. These sessions are not all-inclusive, and may incur additional fees for consumables. We don’t charge a Registration Fee for these sessions, but we still provide children’s uniforms. We ask that you give us a month’s notice of any changes. (As with all spaces, these are subject to availability.)</p>
                    </div>
                    <div class="col-lg-8 pink-dashed">
                        <h5 class="baloobhai text-center pt-4 pb-0 fw-bolder">Monday to Friday Free Sessions (Term Time Only)</h5>
                        <div class="pb-2 text-center">Cannot be used in conjunction with other sessions. <br/>
                            Consumables are charged on top.</div>
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