//header 

const Headerdata = () => {
    return(
        <div class="row">
            <div class="col-lg-12">
                <div class="boxholder d-flex justify-content-center flex-column">
                    <div class="d-flex">
                        <div class="button d-flex justify-content-start position-relative">
                            <img src="./images/sparrow.png" class="header-sparrow" />
                            <p class="meettext" style={{cursor: "none"}}>8 Weeks to 4 Years Old</p>
                        </div>
                        <div class="button d-flex justify-content-start position-relative">
                            <img src="./images/star_home.png" class="header-star"/>
                            <p class="meettext" style={{cursor: "none"}}>7am until 7pm, 7 days-a-week</p>
                        </div>
                    </div>
                    
                    <div class="textholder mt-5">
                        <h1 class="heading">Private Nursery <br /> & Pre School</h1>
                    </div>
                </div>
            </div>          
        </div>
    );
}

export default Headerdata;