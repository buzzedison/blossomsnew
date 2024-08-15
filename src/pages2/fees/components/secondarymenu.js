const goTo = (id) => {
    window.location.hash=id;
}
const Secondarymenu = () => {
    return(
        <div>
            <div class="justify-content-end d-none d-lg-flex">
                <ul class="m-0 p-0 secondary-menu">
                    <li><a href="OurFees#RegistrationFee">Registration</a> | </li>
                    <li><a href="OurFees#AllInclusiveSessions">All Inclusive</a> | </li>
                    <li><a href="OurFees#SessionFees">Session Fees</a> | </li>
                    <li><a href="OurFees#FundedSessions">Funded Sessions</a> | </li>
                    <li><a href="OurFees#FreeGovernmentFundedSessions">Free Sessions</a> | </li>
                    <li><a href="OurFees#FundingEligibility">Funding Eligibility</a> | </li>
                    <li><a href="OurFees#TaxFreeChildcare">Tax-Free</a> | </li>
                    <li><a href="OurFees#ChildcareVouchers">Vouchers</a> </li>
                </ul>
            </div>

            <div class="d-lg-none">
                <select class="baloobhai bg-white border-0 text-secondary sec-mobile-menu" onChange={(e) => goTo(e.target.value) }>
                    <option value="#">Choose Section</option>
                    <option value="#RegistrationFee">Registration</option>
                    <option value="#AllInclusiveSessions">All Inclusive</option>
                    <option value="#SessionFees">Session Fees</option>
                    <option value="#FundedSessions">Funded Sessions</option>
                    <option value="#FreeGovernmentFundedSessions">Free Sessions</option>
                    <option value="#FundingEligibility">Funding Eligibility</option>
                    <option value="#TaxFreeChildcare">Tax-Free</option>
                    <option value="#ChildcareVouchers">Vouchers</option>
                </select>
            </div>
        </div>
        
    )
}

export default Secondarymenu;