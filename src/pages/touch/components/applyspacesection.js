import { Link } from "react-router-dom";
import Headerdata from "./headerdata";
const Applyspacesection = () => {
    return(
        <section class="apply-space">
            <div class="container d-flex flex-column align-items-center">
                <h2 class="fredoka bold mb-5  text-center text-heading heading" id="ApplyForASpace">Apply for a Space Today</h2>
                <p class="baloobhai text-secondary text-center">
                    If you would like to apply for a child’s space, please complete this form to give us some details about you and the child. We’ll do our best to accommodate your needs, then invite you in for welcome sessions.
                </p>
                <Link to="/ApplyForASpace" className="btn btn-sm pink-btn text-white baloobhai mt-4 mb-5">Apply for a Space</Link>  
            </div>

            <div class="container-fluid touch-bg pt-2">
                <div class="container w-100 h-100"> 
                    <Headerdata />
                </div>
            </div>

            <section class="questions bg-ltpink my-5">
                <div class="container d-flex flex-column align-items-center">
                    <h2 class="fredoka bold text-center mt-5 text-heading heading" id="AskAQuestion">General Questions</h2>
                    <div class="w-100 p-3 mt-4 rounded mb-5">
                        <p class="baloobhai text-secondary text-center mb-0 lh-5">
                                If you have looked through our website and still have questions about how we nurture and
                                care for our children, please complete this form and we’ll do our best to get back to you as
                                quickly as possible.
                                <br /><br />
                                <div class="d-flex justify-content-center pt-4">
                                    <Link to="/AskAQuestion" className="btn btn-sm question-btn"><i class="fas fa-question-circle me-2 fs-5"></i> Ask Us a Question?</Link>
                                </div>
                        </p>
                    </div>
                
                </div>
            </section>




            <section class="container d-flex flex-column align-items-center">
                <h2 class="fredoka bold text-center mt-5 text-heading heading" id="OfstedRegistration">We're Ofsted Registered</h2>
                <div class="bg-ltpink w-100 p-3 mt-4 bg-ltpink rounded mb-5">
                    <div class="pink-dashed text-secondary p-4 bg-transwhite">
                        <p class="baloobhai text-secondary mb-0 lh-5 text-center">
                            We are registered with Ofsted as a provider of Childcare on Non-Domestic Premises, Full Day Care.
                            <br />
                            We are registered in the East of England Region under Norfolk’s Local Authority.
                            <br />
                            Our URN is EY545389.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Applyspacesection;