import React from 'react';

const Funding = () => {

    const tableStyles = `
    .responsive-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
      box-shadow: 0 2px 3px rgba(0,0,0,0.1);
      border: 2px solid 
    }
    .responsive-table th,
    .responsive-table td {
      padding: 15px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    .responsive-table th {
     
      color: #333;
    }
    .responsive-table tr:nth-child(even) {
     
    }
    @media screen and (max-width: 768px) {
      .responsive-table {
        display: none;
      }
      .mobile-view {
        display: block;
      }
    }
    @media screen and (min-width: 769px) {
      .mobile-view {
        display: none;
      }
    }
    .mobile-view-item {
      background: #f0f0f0;
      margin-bottom: 10px;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 3px rgba(0,0,0,0.1);
    }

  `;


    const [active, setActive] = React.useState(0);
    const toggle = (id) => {
        if (id === active) {
            setActive(0)
        } else {
            setActive(id)
        }
    }

    return (
        <div id="FundingEligibility" class="pt-5 mt-5">
            <div class="pt-5">
            <h2 class="heading text-center pt-5 pb-3">Government Funding Eligibility </h2>
            <div class="container">
                <div class="row justify-content-evenly">




                    <div class="col-lg-8 pink-dashed marginbox">
                        <h5 class="baloobhai text-center py-4 fw-bolder"></h5>
                        <div class="sessionholder baloobhai">
                            <div class="d-flex">
                                <h3 class="baloobhai fs-3 text-heading fw-bold mb-4">9-to-23 Month Old Funding (Working Parents)</h3>
                                <div onClick={() => toggle(1)}>
                                    <i class="fas fa-chevron-down circlefeesborder"></i>
                                </div>
                            </div>

                            <div class="d-flex justify-content-between">
                                <p>Up to 570 hours per year.</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Maximum 15 hours per week, if term-time only.</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Maximum 11 hours per week, stretched all year round.</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>This funding starts from the term after your child turns 9 months.</p>
                            </div>

                            <div class="d-flex justify-content-between">
                                <p>Terms start in January, April and September.</p>
                            </div>
                        </div>
                        <div>

                            {
                                (active === 1)
                                    ?
                                    <div className="bg_blue blueboxcontainer baloobhai text-white">
                                        <style>{tableStyles}</style>
                                        <div>
                                            <p className="font-bold">Criteria for parents and carers:</p>
                                            <p>Children aged 9 months to 23 months with working parents can have this. You are eligible if you (and your partner if you have one) are employed for at least the equivalent of 16 hours per week at the National Minimum Wage for your age, and you (or both parents individually) are earning less than £100,000/year. You may have to pay for extra costs like meals, nappies, events, or outings.</p>
                                            <p>You can get 15 hours of funded childcare at the same time as claiming Universal Credit, Tax Credits, Childcare Vouchers or Tax-Free Childcare. You can apply if you’re starting or restarting work within the next 31 days. If you are not currently working, you may still be eligible if your partner is working and you get Incapacity Benefit, Severe Disablement Allowance, Carer’s Allowance or contribution-based Employment and Support Allowance.</p>
                                            <p className="font-bold">Criteria for your child:</p>
                                            <p>You will not be eligible if your child does not usually live with you.</p>
                                            <p>If you foster your child, you cannot use the online application to get 15 hours funded childcare. Speak to your social worker and your local authority if you want to apply.</p>
                                            <p className="font-bold">When to apply for the 15 hour, 9 month to 23 month old funding:</p>
                                            <p>You can apply from when your child is 24 weeks old.</p>
                                            {/* Desktop Table */}
                                            <table className="responsive-table">
                                                <thead>
                                                    <tr>
                                                        <th>When your child turns 9 months</th>
                                                        <th>When they can get 15 hrs from</th>
                                                        <th>Recommended time to apply</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1st Sept - 31st Dec</td>
                                                        <td>From January Term</td>
                                                        <td>15th Oct - 30th Nov</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1st Jan - 31st Mar</td>
                                                        <td>From April Term</td>
                                                        <td>15th Jan - 28th Feb</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1st Apr - 31st Aug</td>
                                                        <td>From September Term</td>
                                                        <td>15th Jun - 31st July</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            {/* Mobile View */}
                                            <div className="mobile-view" style={{ display: 'none' }}>
                                                <div className="mobile-view-item">
                                                    <strong>When your child turns 9 months:</strong> 1st Sept - 31st Dec<br />
                                                    <strong>When they can get 15 hrs from:</strong> From January Term<br />
                                                    <strong>Recommended time to apply:</strong> 15th Oct - 30th Nov
                                                </div>
                                                <div className="mobile-view-item">
                                                    <strong>When your child turns 9 months:</strong> 1st Jan - 31st Mar<br />
                                                    <strong>When they can get 15 hrs from:</strong> From April Term<br />
                                                    <strong>Recommended time to apply:</strong> 15th Jan - 28th Feb
                                                </div>
                                                <div className="mobile-view-item">
                                                    <strong>When your child turns 9 months:</strong> 1st Apr - 31st Aug<br />
                                                    <strong>When they can get 15 hrs from:</strong> From September Term<br />
                                                    <strong>Recommended time to apply:</strong> 15th Jun - 31st July
                                                </div>
                                            </div>
                                            <p style={{ marginTop: '30px' }}>You can apply outside of these recommended dates but you might not receive your code in time. You must have a valid code by the end of the month before a new term starts. You have to reconfirm your eligibility every 3 months. If you apply more than 3 months before the term starts, you’ll have to reconfirm your eligibility in your account in order to keep your code valid.</p>
                                            <p>If you are applying for 15 hours and someone else already claims Tax-Free Childcare for that child, your application will be unsuccessful.</p>
                                            <p>If you have a partner, you must include your partner in your application if you are married or in a civil partnership and live together; or not married or in a civil partnership, but living together as though you are. Their employment and income will not affect your eligibility if they are or will be absent from your household for more than 6 months; or are a prisoner. You and your partner cannot both have accounts for the same child.</p>
                                            <p>If you are separated, you and your ex-partner need to decide who should apply if you are jointly responsible for your child. If you cannot decide, both of you must apply separately and HMRC will decide who gets a childcare account.</p>
                                            <p>Once your application has been approved, you’ll get a code for 15 hours funded childcare to give to the children’s nursery.</p>
                                            <p>You can apply here: <a href="https://www.gov.uk/apply-free-childcare-if-youre-working">https://www.gov.uk/apply-free-childcare-if-youre-working</a></p>
                                            <p>This funding starts from the term after your child turns 9 months. Terms start in January, April and September. You may have to pay for extra costs like consumables, meals, nappies, events, or outings.</p>
                                        </div>
                                    </div>







                                    :
                                    null
                            }






                        </div>
                    </div>

                    <div class="col-lg-8 pink-dashed marginbox">
                        <h5 class="baloobhai text-center py-4 fw-bolder"></h5>
                        <div class="sessionholder baloobhai">
                            <div class="d-flex">
                                <h3 class="baloobhai fs-3 text-heading fw-bold mb-4">2 Year Old Funding (Working Parents)</h3>
                                <div onClick={() => toggle(2)}>
                                    <i class="fas fa-chevron-down circlefeesborder"></i>
                                </div>
                            </div>

                            <div class="d-flex justify-content-between">
                                <p>Upto 570 hours per year.</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Maximum 15 hours per week, if term-time only.</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Maximum 11 hours per week, stretched all year round.</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>This funding starts from the term after your child turns 2.
                                </p>
                            </div>

                            <div class="d-flex justify-content-between">
                                <p>Terms start in January, April and September.</p>
                            </div>
                        </div>
                        <div>

                            {
                                (active === 2)
                                    ?
                                    <div className="bg_blue blueboxcontainer baloobhai text-white">
                                        <style>{tableStyles}</style>
                                        <div>
                                            <p className="font-bold">Criteria for parents and carers:</p>
                                            <p>Children aged 2 with working parents can have this. You are eligible if you (and your partner if you have one) are employed for at least the equivalent of 16 hours per week at the National Minimum Wage for your age, and you (or both parents individually) are earning less than £100,000/year. You may have to pay for extra costs like meals, nappies, events, or outings.</p>
                                            <p>You can get 15 hours of funded childcare at the same time as claiming Universal Credit, Tax Credits, Childcare Vouchers or Tax-Free Childcare. You can apply if you’re starting or restarting work within the next 31 days. If you are not currently working, you may still be eligible if your partner is working and you get Incapacity Benefit, Severe Disablement Allowance, Carer’s Allowance or contribution-based Employment and Support Allowance.</p>
                                            <p className="font-bold">Criteria for your child:</p>
                                            <p>You will not be eligible if your child does not usually live with you.</p>
                                            <p>If you foster your child, you cannot use the online application to get 15 hours funded childcare. Speak to your social worker and your local authority if you want to apply.</p>
                                            <p className="font-bold">When to apply for the 15 hour, 2 year old funding:</p>
                                            <p>You can apply from when your child is 1 year and 36 weeks old.</p>
                                            {/* Desktop Table */}
                                            <table className="responsive-table">
                                                <thead>
                                                    <tr>
                                                        <th>When your child turns 2 Years</th>
                                                        <th>When they can get 15 hrs from</th>
                                                        <th>Recommended time to apply</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1st Sept - 31st Dec</td>
                                                        <td>From January Term</td>
                                                        <td>15th Oct - 30th Nov</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1st Jan - 31st Mar</td>
                                                        <td>From April Term</td>
                                                        <td>15th Jan - 28th Feb</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1st Apr - 31st Aug</td>
                                                        <td>From September Term</td>
                                                        <td>15th Jun - 31st July</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <p>You can apply outside of these recommended dates but you might not receive your code in time. You must have a valid code by the end of the month before a new term starts. You have to reconfirm your eligibility every 3 months. If you apply more than 3 months before the term starts, you’ll have to reconfirm your eligibility in your account in order to keep your code valid.</p>
                                            <p>If you are applying for 15 hours and someone else already claims Tax-Free Childcare for that child, your application will be unsuccessful.</p>
                                            <p>If you have a partner, you must include your partner in your application if you are married or in a civil partnership and live together; or not married or in a civil partnership, but living together as though you are. Their employment and income will not affect your eligibility if they are or will be absent from your household for more than 6 months; or are a prisoner. You and your partner cannot both have accounts for the same child.</p>
                                            <p>If you are separated, you and your ex-partner need to decide who should apply if you are jointly responsible for your child. If you cannot decide, both of you must apply separately and HMRC will decide who gets a childcare account.</p>
                                            <p>Once your application has been approved, you’ll get a code for 15 hours funded childcare to give to the children’s nursery.</p>
                                            <p>You can apply here: <a href="https://www.gov.uk/apply-free-childcare-if-youre-working">https://www.gov.uk/apply-free-childcare-if-youre-working</a></p>
                                            <p>This funding starts from the term after your child turns 2. Terms start in January, April, and September. You may have to pay for extra costs like consumables, meals, nappies, events, or outings.</p>
                                        </div>
                                    </div>


                                    :
                                    null
                            }
                        </div></div>









                    <div class="col-lg-8 pink-dashed marginbox">
                        <h5 class="baloobhai text-center py-4 fw-bolder"></h5>
                        <div class="sessionholder baloobhai">
                            <div class="d-flex">
                                <h3 class="baloobhai fs-3 text-heading fw-bold mb-4">2 Year Old Funding (Limited Eligibility)</h3>
                                <div onClick={() => toggle(1)}>
                                    <i class="fas fa-chevron-down circlefeesborder"></i>
                                </div>
                            </div>

                            <div class="d-flex justify-content-between">
                                <p>Upto 570 hours per year.</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Maximum 15 hours per week, if term-time only.</p>
                            </div>

                            <div class="d-flex justify-content-between">
                                <p>Maximum 11 hours per week, stretched all year round.</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>This funding starts from the term after your child turns 2.</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Terms start in January, April and September.</p>
                            </div>
                        </div>
                        <div>

                            {
                                (active === 1)
                                    ?
                                    <div class="bg_blue blueboxcontainer baloobhai text-white">
                                        <div>
                                            <p>Your 2-year-old can get funded childcare if you live in England 
                                                and get one of the following benefits:
</p>
                                            <ul>
                                                <p>Income Support</p>
                                                <p>Income-based Jobseeker’s Allowance (JSA)</p>
                                                <p>Income-related Employment and Support Allowance (ESA)</p>
                                                <p>Universal Credit, and your household income is £15,400 a year or less after tax, not including benefit payments</p>
                                                <p>Child Tax Credits, and your household income is £16,190 a year or less before tax</p>
                                                <p>the guaranteed element of Pension Credit or</p>
                                                <p>the Working Tax Credit 4-week run on (the payment you get when you stop qualifying for Working Tax Credit).</p>
                                            </ul>
                                            <p>2-year-olds can also get funded childcare if they:</p>
                                            <ul>
                                                <p>are looked after by a local authority;</p>
                                                <p>have a statement of special education needs (SEN) or an education, health and care (EHC) plan;</p>
                                                <p>get Disability Living Allowance; or</p>
                                                <p>have left care under an adoption order, special guardianship order or a child arrangements order.</p>
                                            </ul>
                                            <p>This funding starts from the term after your child turns 2. Terms start in January, April and September. You may have to pay for extra costs like consumables, 
                                                meals, nappies, events, or outings.</p>
                                        </div>
                                    </div>
                                    :
                                    null
                            }


                        </div>
                    </div>
                    <div class="col-lg-8 pink-dashed marginbox">
                        <h5 class="baloobhai text-center py-4 fw-bolder"></h5>
                        <div class="sessionholder baloobhai">
                            <div>
                                <h3 class="baloobhai fs-3 text-heading fw-bold mb-4">3 & 4 Year Old, 15 hour, Universal Funding (All Parents)</h3>
                            </div>

                            <div class="d-flex justify-content-between">
                                <p>Up to 570 hours per year.</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Maximum 15 hours per week, if term-time only.</p>
                            </div>

                            <div class="d-flex justify-content-between">
                                <p>Maximum 11 hours per week, stretched all year round.</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>This funding starts from the term after your child turns 3.</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Terms start in January, April and September.</p>

                            </div>
                            <div class="d-flex justify-content-between">
                                <p>All children ages 3 and 4 can have this, starting from the term after your child turns 3. Terms start in January, April and September. You are eligible for this regardless of whether you are working or not. 
                                    You may have to pay for extra costs like meals, nappies, events, or outings.</p>
                            </div>
                        </div>
                        {/* <div>
                            <div class="bg_blue blueboxcontainer baloobhai text-white">
                                <div class="d-flex">
                                    
                                    <div>
                                        <i class="fas fa-chevron-down circlefeesborder"></i>
                                    </div>
                                </div>
                                <div>
                                    <ul>
                                    <p>Income Support</p>
                                        <p>Income-based Jobseeker’s Allowance (JSA)</p> 
                                    </ul>
                                </div>
                            </div>   
                        </div> */}
                    </div>
                    <div class="col-lg-8 pink-dashed marginbox">
                        <h5 class="baloobhai text-center py-4 fw-bolder"></h5>
                        <div class="sessionholder baloobhai">
                            <div class="d-flex">
                                <h3 class="baloobhai fs-3 text-heading fw-bold mb-4">3 & 4 Year Old, 30 hour, Extended Funding (Working Parents)</h3>
                                <div onClick={() => toggle(3)}>
                                    <i class="fas fa-chevron-down circlefeesborder"></i>
                                </div>
                            </div>

                            <div class="d-flex justify-content-between">
                                <p>Up to 1140 hours per year.</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Maximum 30 hours per week, if term-time only.</p>
                            </div>

                            <div class="d-flex justify-content-between">
                                <p>Maximum 22 hours per week, stretched all year round.
</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>This funding starts from the term after your child turns 3.</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Terms start in January, April and September.</p>
                            </div>
                        </div>
                        <div>


                            <div class="d-flex">




                            </div>
                            {
                                (active === 3)
                                    ?
                                    <div class="bg_blue blueboxcontainer baloobhai text-white">
                                        <div> <p><b>Criteria for parents and carers:</b></p>
                                            <p>Children aged 3 and 4 with working parents can have this. You are eligible if you (and your partner if you have one) are employed for at least the equivalent of 16 hours per week at the National Minimum Wage for your age, and you (or both parents individually) are earning less than £100,000/year. You may have to pay for extra costs like meals, nappies, events, or outings.</p>
                                            <p>You can get 30 hours of funded childcare at the same time as claiming Universal Credit, Tax Credits, Childcare Vouchers or Tax-Free Childcare. You can apply if you’re starting or restarting work within the next 31 days. If you are not currently working, you may still be eligible if your partner is working and you get Incapacity Benefit, Severe Disablement Allowance, 
                                                Carer’s Allowance or contribution-based Employment and Support Allowance.</p>

                                            <p><b>Criteria for your child:</b></p>

                                            <p>You will not be eligible if your child does not usually live with you.</p>
                                            <p>If you foster your child, you cannot use the online application to get 30 hours free childcare. 
                                                Speak to your social worker and your
                                                 local authority if you want to apply.</p>

                                            <p><b>When to apply for the 30 hour, 3 & 4 year old Extended Funding:</b></p>

                                            <p>You can apply from when your child is 2 years and 36 weeks old.</p>
                                            <div class="d-md-none">
                                                <p>
                                                    If your child turns 3 between 1st September to 31st December, they can get 30hrs from the January Term, and you should apply between 15th October - 30th November.
                                                    <br /><br />
                                                    If your child turns 3 between 1st January to 31st March, they can get 30hrs from the April Term, and you should apply between 15th January - 28th February.
                                                    <br /><br />
                                                    If your child turns 3 between 1st April to 31st August, they can get 30hrs from the September Term, and you should apply between 15th June - 31st July.
                                                </p>
                                            </div>
                                            <table class="table text-white d-none d-md-table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">When your child turns 3</th>
                                                        <th scope="col">When they can get 30hrs from</th>
                                                        <th scope="col">Recommended time to apply</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th>1st Sept - 31st Dec</th>
                                                        <td>From January Term</td>
                                                        <td>15th Oct - 30th Nov</td>
                                                    </tr>
                                                    <tr>
                                                        <th>1st Jan - 31st Mar</th>
                                                        <td>From April Term</td>
                                                        <td>15th Jan - 28th Feb</td>
                                                    </tr>
                                                    <tr>
                                                        <th>1st Apr - 31st Aug</th>
                                                        <td>From September Term</td>
                                                        <td>15th Jun - 31st July</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <p>You can apply outside of these recommended dates but you might not receive your code in time. You must have a valid code by the end of the month before a new term starts. You have to reconfirm your eligibility every 3 months. If you apply more than 3 months before the term starts, you’ll have to reconfirm your eligibility in your account in order to keep your code valid..</p>
                                            <p>If you are applying for 30 hours and someone else already claims Tax-Free Childcare for that child, your application will be unsuccessful.</p>
                                            <p>If you have a partner, you must include your partner in your application if you are married or in a civil partnership and live together; or not married or in a civil partnership, but living together as though you are. Their employment and income will not affect your eligibility if they are or will be absent from your household for more than 6 months; or are a prisoner. You and your partner cannot both have accounts for the same child.</p>
                                            <p>If you are separated, you and your ex-partner need to decide who should apply if you are jointly responsible for your child. If you cannot decide, both of you must apply separately and HMRC will decide who gets a childcare account.</p>
                                            <p>Once your application has been approved, you’ll get a code for 30 hours funded childcare to give to the children’s nursery.</p>
                                            <p>You can apply here: 
                                                <a href=" https://www.gov.uk/apply-free-childcare-if-youre-working" target="_blank"> https://www.gov.uk/apply-free-childcare-if-youre-working</a></p>

                                            <p>This funding starts from the term after your child turns 3. Terms start in January, April and September. You may have to pay for extra costs like consumables, meals, nappies, events, or outings.</p>

                                        </div></div>
                                    :
                                    null
                            }

                        </div>
                    </div>
                </div>

                <div class="container" id="TaxFreeChildcare">
                    <div class="row align-items-center reverse-column">

                        <div class="col-lg-6 baloobhai">
                            <h2 class="heading pt-5">Tax-Free Childcare Payments</h2>
                            <p>We encourage you to save some money and benefit from using the Government’s Tax-Free Childcare Payments scheme. For every £8 parents or carers pay through the scheme, the Government adds £2 to help cover the cost of childcare, up to £2,000 per child, per year!</p>
                            <p>If you are working, earning at least the equivalent of 16 hours at the minimum wage per week (earning at least £2,196.48 over a 3 month period), you could be eligible. If you have a partner, they’ll need to earn at least this much too. You can claim this on-top of your 30 hours Government Funding allowance if you’re eligible for both, however you cannot get Tax-Free Childcare at the same time as claiming Working Tax Credit, Child Tax Credit, Universal Credit or Childcare Vouchers - you have to decide which one benefits you the most.</p>
                            
                            <p>You would receive an invoice from us each month as normal, but then you would pay the money into your Government childcare account, which the government then tops-up before paying us. 
                                Visit <a href="https://www.childcarechoices.gov.uk/">https://www.childcarechoices.gov.uk </a>  to find out more, or visit <a href="https://www.gov.uk/apply-for-tax-free-childcare">https://www.gov.uk/apply-for-tax-free-childcare</a> to sign-up for your account.</p>
              
                        </div>
                        <div class="col-lg-6 ">
                            <img src="./images/tax_free.png" class="w-100" alt="" />
                        </div>
                    </div>
                </div>

                <div class="container" id="ChildcareVouchers">
                    <div class="row align-items-center flex-lg-row-reverse reverse-column">
                        <div class="col-lg-6 baloobhai">
                            <h2 class="heading pt-5">The Childcare Voucher Scheme</h2>
                            <p>When Tax-Free Childcare was launched, they stopped people joining these schemes, but for anyone already registered with a Childcare Voucher Scheme through their employer, you can continue to use it.</p>
                            <p>This is a salary-sacrifice scheme, where up-to £243/month can be taken from your pre-tax pay, and used to
                                buy Childcare Vouchers before your earnings are taxed.</p>
                            <p>If you don’t already have this, you can no longer sign-up.</p>

                        </div>
                        <div class="col-lg-6 ">
                            <img src="./images/voucher_scheme.png" class="w-100" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Funding;