const goTo = (id) => {
    window.location.hash=id;
}
const Secondarymenu = () => {
    return(
        <div>
            <div class="justify-content-end d-none d-lg-flex">
                <ul class="m-0 p-0 secondary-menu">
                    <li><a href="OurTeam#ManagementTeam">Management Team</a> | </li>
                    <li><a href="OurTeam#TeamQualifications">Team Qualifications</a></li>
                </ul>
            </div>

            <div class="d-lg-none">
                <select class="baloobhai bg-white border-0 text-secondary sec-mobile-menu" onChange={(e) => goTo(e.target.value) }>
                    <option value="#">Choose Section</option>
                    <option value="#ManagementTeam">Management Team</option>
                    <option value="#TeamQualifications">Team Qualifications</option>
                </select>
            </div>
        </div>
        
    )
}

export default Secondarymenu;