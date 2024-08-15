import React from "react";

const Governmentfunded = () => {
    return(
        <div id="FundedSessions">
            <h2 class="heading text-center pt-5 pb-3">Government Funded Session Fees</h2>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 mb-4">
                        <p class="baloobhai text-center">We accept 2, 3 and 4 year-old Funding, offering some part-funded sessions for parents claiming Government Funded Sessions. These sessions include any meal times, breakfasts and healthy snacks, and any nappies. We charge a small top-up fee to cover the additional costs we incur for food, drinks, sun-cream, paper towels, craft materials, other consumables and activities beyond the Government Funding. We don’t charge a Registration Fee for these sessions, but we still provide children’s uniforms. We ask that you give us a month’s notice of any changes. (As with all spaces, these are subject to availability.)</p>
                    </div>
                    <div class="col-lg-8 pink-dashed">
                        <h5 class="baloobhai text-center py-4 fw-bolder">Monday to Friday Sessions (All-inclusive)</h5>
                        <div class="sessionholder baloobhai">
                            <div class="d-flex justify-content-between">
                                <p>Morning Sessions: 8am - 1pm</p>
                                <p> £7.50</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Afternoon Sessions: 1pm - 6pm</p>
                                <p>  £7.50</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>School Days: 9am - 3pm</p>
                                <p> £10.00</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Full Day Sessions: 8am - 6pm</p>
                                <p>  £12.50</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Governmentfunded;