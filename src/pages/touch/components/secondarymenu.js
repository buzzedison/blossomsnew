const goTo = (id) => {
    window.location.hash=id;
}
const Secondarymenu = () => {
    return(
        <div>
            <div class="justify-content-end d-none d-lg-flex">
                <ul class="m-0 p-0 secondary-menu">
                    <li><a href="GetInTouch#ApplyForASpace">Apply For A Space</a> | </li>
                    <li><a href="GetInTouch#BookAShowAround">Book A Showaround</a> | </li>
                    <li><a href="GetInTouch#AskAQuestion">Ask A Question</a> | </li>
                    <li><a href="GetInTouch#OfstedRegistration">Ofsted Registered</a> | </li>
                    <li><a href="GetInTouch#ContactDetails">Contact Details</a> </li>
                </ul>
            </div>

            <div class="d-lg-none">
                <select class="baloobhai bg-white border-0 text-secondary sec-mobile-menu" onChange={(e) => goTo(e.target.value) }>
                    <option value="#">Choose Section</option>
                    <option value="#ApplyForASpace">Apply For A Space</option>
                    <option value="#BookAShowAround">Book A Showaround</option>
                    <option value="#AskAQuestion">Ask A Question</option>
                    <option value="#OfstedRegistration">Ofsted Registered</option>
                    <option value="#ContactDetails">Contact Details</option>
                </select>
            </div>
        </div>
        
    )
}

export default Secondarymenu;