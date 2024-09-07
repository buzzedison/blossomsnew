import React from "react";
import axios from "axios";
import swal from "sweetalert2";
import qs from "qs";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";




const Formsection = () => {
    let navigate = useNavigate();

    const [fname,setFname] = React.useState('');
    const [familyname,setFamilyname] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [phone,setPhone] = React.useState('');
    const [zip,setZip] = React.useState('');
    const [question,setQuestion] = React.useState('');

    const [recapResp, setRecapresp] = React.useState('');

    const onChange = (e) => {
        setRecapresp(e);
    }

    const submit = async (e) => {
        e.preventDefault();
        if(recapResp.length > 0){
            let data = {
                fname,familyname,email,phone,zip,question, captcha: recapResp
            };
            let empty = Object.values(data).some((val) => {return val == ""});
            if(empty) {
                swal.fire("Error", "All fields are required.", "warning");
                return;
            }
            axios.post("https://www.blossomschildcarenursery.co.uk/mailer/invoke.php", qs.stringify(data)).then(() => {
                setRecapresp("");
                navigate("/AskAQuestion-ENQUIRY-COMPLETE");
            }).catch((e) => {
                if(e.response.status == 411) {
                    swal.fire("Error", "Invalid CAPTCHA.", "error");
                    setRecapresp("");
                }
            });
        }else{
            swal.fire("Error", "Complete CAPTCHA first.", "error");
            return;
        }
    }

    return(
        <section class="form">
            <div class="container">
                <div class="white-box p-5">
                    <form action="#">
                        <div class="row">
                            <div class="col-lg-6 px-md-5">
                                <div class="form-group">
                                    <label for="">Parent/Carer First Name</label>
                                    <input type="text" name="" id="" class="form-control" onChange={e => setFname(e.target.value)} requred />
                                </div>

                                <div class="form-group">
                                    <label for="">Email Address</label>
                                    <input type="email" name="" id="" class="form-control" onChange={e => setEmail(e.target.value)} />
                                </div>

                                <div class="form-group">
                                    <label for="">Postcode</label>
                                    <input type="text" name="" id="" class="form-control" onChange={e => setZip(e.target.value)} />
                                </div>
                            </div>

                            <div class="col-lg-6 px-md-5">
                                <div class="form-group">
                                    <label for="">Parent/Carer Family Name</label>
                                    <input type="text" name="" id="" class="form-control" onChange={e => setFamilyname(e.target.value)} />
                                </div>

                                <div class="form-group">
                                    <label for="">Phone Number</label>
                                    <input type="tel" name="" id="" class="form-control" onChange={e => setPhone(e.target.value)} />
                                </div>

                                <div class="form-group">
                                    <label for="">Your Question?</label>
                                    <textarea name="" id="" class="form-control" rows="3" onChange={e => setQuestion(e.target.value)}></textarea>
                                </div>
                            </div>
                        </div>
                        
                        <div class="d-flex justify-content-center mt-5">
                            <ReCAPTCHA
                                sitekey="6Leiyj4eAAAAAAGW7rN_v3E87jYj83900Nji1xOn"
                                onChange={onChange}
                            />
                        </div>
                        

                        <div class="form-group d-flex justify-content-center mt-5">
                            <button  class="btn btn-sm pink-btn baloobhai regular text-white" onClick={submit}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Formsection;