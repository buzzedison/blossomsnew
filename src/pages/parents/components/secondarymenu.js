const goTo = (id) => {
    window.location.hash=id;
}
const Secondarymenu = () => {
    return(
        <div>
            <div class="justify-content-end d-none d-lg-flex">
                <ul class="m-0 p-0 secondary-menu">
                    <li><a href="ForParents#SafeAndSecure">Safe & Secure</a> | </li>
                    <li><a href="ForParents#HealthAndWellBeing">Health & Well-being</a> | </li>
                    <li><a href="ForParents#TheEYFS">The EYFS</a> | </li>
                    <li><a href="ForParents#KeepingYouInformed">Keeping Informed</a> | </li>
                    <li><a href="ForParents#NurseryPolicies">Nursery Policies</a> </li>
                </ul>
            </div>

            <div class="d-lg-none">
                <select class="baloobhai bg-white border-0 text-secondary sec-mobile-menu" onChange={(e) => goTo(e.target.value) }>
                    <option value="#">Choose Section</option>
                    <option value="#SafeAndSecure">Safe & Secure</option>
                    <option value="#HealthAndWellBeing">Health & Well-being</option>
                    <option value="#TheEYFS">The EYFS</option>
                    <option value="#KeepingYouInformed">Keeping Informed</option>
                    <option value="#NurseryPolicies">Nursery Policies</option>
                </select>
            </div>
        </div>
        
    )
}

export default Secondarymenu;