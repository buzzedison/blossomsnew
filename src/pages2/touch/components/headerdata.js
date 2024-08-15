import { Link } from "react-router-dom";

const Headerdata = () => {
    return(
        <div>
            <h2 class="fredoka bold text-center mt-5 pt-5 text-heading heading" id="BookAShowAround">Book a Show-around</h2>
            <div class="d-flex align-items-center flex-column">
                <p class="baloobhai w-75 text-center mt-3 text-secondary">
                    If you would like to have a personal guided tour of our setting, please complete 
                    this form to give us some of your details and we’ll book you in when it is convenient for us both.
                </p>
                <Link to="/BookAShow-Around" className="btn btn-sm pink-btn text-white baloobhai mt-4">Book a Show-around</Link>
            </div>
        </div>
    );
}

export default Headerdata;