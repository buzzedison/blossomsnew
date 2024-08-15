const goTo = (id) => {
    window.location.hash=id;
}
const Secondarymenu = () => {
    return(
        <div>
            <div class="justify-content-end d-none d-lg-flex">
                <ul class="m-0 p-0 secondary-menu">
                    <li><a href="OurNursery#3DVirtualTour">3D Virtual Tour</a> | </li>
                    <li><a href="OurNursery#WhatMakesUsDifferent">What Makes Us Different</a> | </li>
                    <li><a href="OurNursery#IndoorOutdoorAreas">Indoor & Outdoor Areas</a> | </li>
                    <li><a href="OurNursery#LearningThroughPlay">Learning Through Play</a> | </li>
                    <li><a href="OurNursery#TypicalRoutines">Typical Routines</a> | </li>
                    <li><a href="OurNursery#TypesOfChildcare">Types of Childcare</a> </li>
                </ul>
            </div>

            <div class="d-lg-none">
                <select class="baloobhai bg-white border-0 text-secondary sec-mobile-menu" onChange={(e) => goTo(e.target.value) }>
                    <option value="#">Choose Section</option>
                    <option value="#3DVirtualTour">3D Virtual Tour</option>
                    <option value="#WhatMakesUsDifferent">What Makes Us Different</option>
                    <option value="#IndoorOutdoorAreas">Indoor & Outdoor Areas</option>
                    <option value="#LearningThroughPlay">Learning Through Play</option>
                    <option value="#TypicalRoutines">Typical Routines</option>
                    <option value="#TypesOfChildcare">Types of Childcare</option>
                </select>
            </div>
        </div>
        
    )
}

export default Secondarymenu;