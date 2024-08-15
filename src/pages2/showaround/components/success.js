import { Link } from "react-router-dom";

const SuccessSection = () => {
    return(
        <div class="container success">
            <div class="row">
                <div class="white-box p-5 text-center">
                    <h1 class="heading fredoka heading-text text-center">Submission Success</h1>
                    <p class="baloobhai bold text-secondary mt-5">
                        Thanks for requesting a show-around. One of the management team will be in touch with you shortly.
                        <br />
                        If you haven’t received a response within 2 working days, please call 07887373737 or email 
                         <a href="mailto:katie@nkchildcare.co.uk" class="ms-1">katie@nkchildcare.co.uk</a>.
                    </p>

                    <Link to="/"  class="btn btn-sm pink-btn baloobhai regular text-white mt-5">Return to Homepage</Link>
                </div>
            </div>
        </div>
        
    );
}


export default SuccessSection;