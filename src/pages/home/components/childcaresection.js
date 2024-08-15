const Childcaresection = () => {
    return(
        <div class="container-fluid home-childcare">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="holder d-flex justify-content-center align-items-center flex-column py-5 mt-5">
                            {/* <p class="minitext">Blossoms Childcare Introduction</p> */}
                            <h1 class="heading1 text-center">Childcare that’s available <br /> when you need it.</h1>
                        </div>  
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="imageholder">
                            <img src="./images/Group 54.png" alt="" class="imagehold" />
                        </div>
                    </div>
                    <div class="col-lg-6 mt-5 py-5 d-flex align-items-center imagetext">
                        <div class="px-4">
                            {/* <h1 class="heading2" >A loving and nurturing</h1> */}
                            <p class="text-muted baloobhai fs-25 position-relative">
                                <img src="./images/sparrow.png" class="para-sparrow" />
                                A loving and nurturing home-from-home environment where children are put before profits.
                                Fresh home-cooked meals, healthy breakfasts and snacks, all nappies included in fees, plus,
                                free take-away tea, coffee & hot-chocolate for our busy parents & carers.

                            </p>

                            <div class="bg-circle-holder">
                                <img src="./images/blue-circle-bg.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Childcaresection;