import React from 'react';

const Funding = () => {

    const [active, setActive] = React.useState(0);
    const toggle = (id) => {
        if(id === active){
            setActive(0)
        }else{
            setActive(id)
        }
    }

    return (
        <div id="FundingEligibility">
            <h2 class="heading text-center pt-5 pb-3">Government Funding Eligibility </h2>
            <div class="container">
                <div class="row justify-content-evenly">
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
                                <p>15 hours per week, term-time only / 11 hours per week, all year round.</p>
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
                                            <p>Your 2-year-old can get free childcare if you live in England and get one of the following benefits:</p>
                                            <ul>
                                                <p>Income Support</p>
                                                <p>Income-based Jobseeker’s Allowance (JSA)</p> 
                                                <p>Income-related Employment and Support Allowance (ESA)</p>
                                                <p>Universal Credit, and your household income is £15,400 a year or less after tax, not including benefit payments</p>
                                                <p>Child Tax Credits, and your household income is £16,190 a year or less before tax</p>
                                                <p>the guaranteed element of Pension Credit or</p>
                                                <p>the Working Tax Credit 4-week run on (the payment you get when you stop qualifying for Working Tax Credit).</p>
                                            </ul>
                                            <p>2-year-olds can also get free childcare if they:</p>
                                            <ul>
                                                <p>are looked after by a local authority;</p>
                                                <p>have a statement of special education needs (SEN) or an education, health and care (EHC) plan;</p>
                                                <p>get Disability Living Allowance; or</p>
                                                <p>have left care under an adoption order, special guardianship order or a child arrangements order.</p>
                                            </ul>
                                            <p>This funding starts from the term after your child turns 2. Terms start in January, April and September. You may have to pay for extra costs like meals, nappies or trips.</p>
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
                                <p>Upto 570 hours per year.</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>15 hours per week, term-time only / 11 hours per week, all year round.</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>This funding starts from the term after your child turns 3.</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Terms start in January, April and September.</p>
                                
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>All children ages 3 and 4 can have this, starting from the term after your child turns 3. Terms start in January, April and September. You are eligible for this regardless of whether you are working or not. You may have to pay for extra costs like meals, nappies or trips.</p>
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
                                <p>Upto 1140 hours per year.</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>30 hours per week, term-time only / 22 hours per week, all year round.</p>
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
                                        <p>Children aged 3 and 4 with working parents can have this. You are eligible if you (and your partner if you have one) are employed for at least the equivalent of 16 hours per week at the National Minimum Wage for your age, and earning less than £100,000/year. You may haveto pay for extra costs like meals, nappies or trips.</p>
                                            <p>You can get 30 hours free childcare at the same time as claiming Universal Credit, Tax Credits, Childcare Vouchers or Tax-Free Childcare. You can apply if you’re starting or restarting work within the next 31 days. If you are not currently working, you may still be eligible if your partner is working, and you get Incapacity Benefit, Severe Disablement Allowance, Carer’s Allowance or contribution-based Employment and Support Allowance.</p> 
                                        
                                        <p><b>Criteria for your child:</b></p>
                                        
                                            <p>You will not be eligible if your child does not usually live with you.</p>
                                            <p>If you foster your child, you cannot use the online application to get 30 hours free childcare. Speak to your social worker and your local authority if you want to apply.</p>
                                        
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
                                        
                                        <p>You can apply outside of these recommended dates but you might not receive your code in time. You must have a valid code by the end of the month before a new term starts. You have to reconfirm your eligibility every 3 months. If you apply more than 3 months before the term starts, you’ll have to reconfirm your eligibility in your account in order to keep your code valid.</p>
                                        <p>If you are applying for 30 hours and someone else already claims Tax-Free Childcare for that child, your application will be unsuccessful.</p>
                                        <p>If you have a partner, you must include your partner in your application if you are married or in a civil partnership and live together; or not married or in a civil partnership, but living together as though you are. Their employment and income will not affect your eligibility if they are or will be absent from your household for more than 6 months; or are a prisoner. You and your partner cannot both have accounts for the same child.</p>
                                        <p>If you are separated, you and your ex-partner need to decide who should apply if you are jointly responsible for your child. If you cannot decide, both of you must apply separately and HMRC will decide who gets a childcare account.</p>
                                        <p>Once your application has been approved, you’ll get a code for 30 hours free childcare to give to the children’s nursery.</p>
                                        <p>You can apply here: <a href="https://www.gov.uk/apply-30-hours-free-childcare" target="_blank">https://www.gov.uk/apply-30-hours-free-childcare</a></p>
                                        
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
                            <p>You could save some money and benefit from using the Government’s Tax-Free Childcare Payments scheme. For every £0.80 parents or carers pay through the scheme, the Government adds £0.20 to help cover the cost of childcare, up to £2,000 per child, per year… that’s a lot of 20p’s.</p>
                            <p>If you work 16 hours or more per week, earning at least £1,853.28 over a 3 month period, you could be eligible. If you have a partner, they’ll need to earn at least this much too.</p>
                            <p>You can also claim this on top of your 30 hours Government Funding allowance if you’re eligible for both! However, you cannot get Tax-Free Childcare at the same time as claiming Working Tax Credit, Child Tax Credit, Universal Credit or Childcare Vouchers, so you have to decide which one benefits you the most.</p>
                            <p>You would receive an invoice from us each month as normal, but then you would pay the money into your childcare account, which the government then tops-up before paying us.</p>
                            <p>Visit <a href="https://www.childcarechoices.gov.uk/">https://www.childcarechoices.gov.uk/</a> to find out more and sign up for your account.</p>
                        </div>
                        <div class="col-lg-6 ">
                            <img src="./images/tax_free.png"  class="w-100" alt="" />
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
                            <img src="./images/voucher_scheme.png"  class="w-100" alt="" />
                        </div>
                    </div>  
                </div> 
            </div>
        </div>
    )
}

export default Funding;