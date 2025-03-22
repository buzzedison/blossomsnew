import React from "react";

const Governmentfunded = () => {
    return (
        <div id="FundedSessions" class="py-5 pt-5 mt-5">
            <h2 class="heading text-center pt-5 mt-5 pb-3">Government Part-Funded Session Fees</h2>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 mb-4">
                        <p class="baloobhai text-center">We accept Government Childcare Funding, offering some part-funded sessions for parents claiming Government Funded Sessions. 
               (As with all spaces, these are subject to availability.)</p>
               
                    </div>
                    <div class="col-lg-8 pink-dashed">
                        <h5 class="baloobhai text-center pt-4 pb-2 fw-bolder">Monday to Friday Sessions (All-inclusive)</h5>
                       <div class="container align-items-center"> <span class="text-center ">Monday to Friday Funded Sessions (All Year, All-inclusive) Subject to availability.
                       Funding can only be used during these set session times. All consumables are included in these sessions.</span></div>
                        <div class="sessionholder baloobhai">
                            <div class="d-flex justify-content-between">
                                <p>Morning Sessions: 8am - 1pm(5 hours)</p>
                                <p> £16.50</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Afternoon Sessions: 1pm - 6pm (5 hours)</p>
                                <p>  £16.50</p>
                            </div>
                            {/* <div class="d-flex justify-content-between">
                                <p>School Days: 9am - 3pm</p>
                                <p> £10.00</p>
                            </div> */}
                            <div class="d-flex justify-content-between">
                                <p>Full Day Sessions: 8am - 6pm (10 hours)</p>
                                <p> £22.00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Governmentfunded;