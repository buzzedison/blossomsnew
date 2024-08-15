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
    const [childfamilyname,setChildFamilyname] = React.useState('');
    const [age,setAge] = React.useState('');
    const [startdate,setStartdate] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [phone,setPhone] = React.useState('');
    const [zip,setZip] = React.useState('');
    const [sessions,setSessions] = React.useState({
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: [],
    });

    const sessionDetails = {
        1: "Early Start* (7am-8am)",
        2: "AM Session (8am-1pm)",
        3: "Full Day (8am-6pm)",
        4: "School Day (9am-3pm)",
        5: "PM Session (1pm-6pm)",
        6: "Late Finish* (6pm-7pm)"
    }

    const [recapResp, setRecapresp] = React.useState('');

    const onChange = (e) => {
        setRecapresp(e);
    }

    const setSession = (day, value) => {
       let exists = sessions[day].some((val) => {return val == sessionDetails[value]});
       if(!exists) {
           sessions[day].push(`${sessionDetails[value]}`);
       }
    }

    const submit = async (e) => {
        e.preventDefault();
        if(recapResp.length > 0){
            let data = {
                fname,familyname,age,childfamilyname,startdate,email,phone,zip, sessions, captcha: recapResp,form:"space"
            };
            let empty = Object.values(data).some((val) => {return val == ""});
            if(empty) {
                swal.fire("Error", "All fields are required.", "warning");
                return;
            }
            axios.post("https://www.blossomschildcarenursery.co.uk/mailer/invoke.php", qs.stringify(data)).then(() => {
                setRecapresp("");
                navigate("/ApplyForASpace-ENQUIRY-COMPLETE");
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
        <section class="space form">
            <div class="container">
                <div class="white-box p-5">
                    <form action="#">
                        <div class="row">
                            <div class="col-lg-6 px-md-5">
                                <div class="form-group">
                                    <label for="">Child's First Name</label>
                                    <input type="text" name="" id="" class="form-control" onChange={e => setFname(e.target.value)} />
                                </div>

                                <div class="form-group">
                                    <label for="">Child’s Age in Years & Months</label>
                                    <input type="text" name="" id="" class="form-control" onChange={e => setAge(e.target.value)} />
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
                                    <label for="">Name of Parent(s)/Carer(s)</label>
                                    <input type="text" name="" id="" class="form-control" onChange={e => setFamilyname(e.target.value)} />
                                </div>

                                <div class="form-group">
                                    <label for="">Child's Family Name</label>
                                    <input type="text" name="" id="" class="form-control" onChange={e => setChildFamilyname(e.target.value)} />
                                </div>

                                <div class="form-group">
                                    <label for="">Preferred Starting Date</label>
                                    <input type="text" name="" id="" class="form-control" onChange={e => setStartdate(e.target.value)} />
                                </div>

                                <div class="form-group">
                                    <label for="">Phone Number</label>
                                    <input type="tel" name="" id="" class="form-control" onChange={e => setPhone(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        

                        {/* <div class="form-group d-flex justify-content-center mt-5">
                            <a href="" class="btn btn-sm pink-btn baloobhai regular text-white">Add Child +</a>
                        </div> */}
                    </form>

                    <div class="text-center fs-6 mt-4">If you would like more than one child to start, please enter all their details in the boxes above.</div>
                </div>

                <div class="weekly-sessions d-flex flex-column align-items-center mt-5 justify-content-start">
                    <h2 class="fredoka bold mb-5  text-center">Weekly Sessions</h2>
                    {/* Timings  */}
                    <div class="row w-100">
                        <div class="col-lg-3">
                            <div class="pink-quote bg-white w-100 px-4 py-5">
                                <div class="d-flex justify-content-center align-items-start">
                                    <div class="pink-badge">Mondays</div>
                                </div>
                                
                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2" value="1" onChange={(e) => {  
                                        // let monday = [...sessions.monday, e.target.value];
                                        setSession("monday", e.target.value)
                                        // setSessions({...sessions, monday: [...sessions.monday, e.target.value]})
                                        // if(e.target.checked == false) {
                                        //     let index = sessions.monday.indexOf("Monday Early Start (7am-8am)");
                                        //     let monday = sessions.monday.splice(index, 1);
                                        //     setSessions({...sessions, monday: monday}) 
                                        // }
                                        // console.log(sessions);
                                    }}/>
                                    <small class="baloobhai me-2">Monday Early Start*</small>
                                    <small class="baloobhai">(7am-8am)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2" value="2" onChange={(e) => setSession("monday", e.target.value)  } />
                                    <small class="baloobhai me-2">Monday AM Session</small>
                                    <small class="baloobhai">(8am-1pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2" value="3" onChange={(e) => setSession("monday", e.target.value) } />
                                    <small class="baloobhai me-2">Monday Full Day</small>
                                    <small class="baloobhai">(8am-6pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"  value="4" onChange={(e) => setSession("monday", e.target.value) }  />
                                    <small class="baloobhai me-2">Monday School Day</small>
                                    <small class="baloobhai">(9am-3pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"  value="5" onChange={(e) => setSession("monday", e.target.value) }  />
                                    <small class="baloobhai me-2">Monday PM Session</small>
                                    <small class="baloobhai">(1pm-6pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"  value="6" onChange={(e) => setSession("monday", e.target.value) }  />
                                    <small class="baloobhai me-2">Monday Late Finish*</small>
                                    <small class="baloobhai">(6pm-7pm)</small>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3">
                            <div class="pink-quote bg-white w-100 px-4 py-5">
                                <div class="d-flex justify-content-center align-items-start">
                                    <div class="pink-badge">Tuesdays</div>
                                </div>
                                
                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="1" onChange={(e) => setSession("tuesday", e.target.value) } />
                                    <small class="baloobhai me-2">Tuesday Early Start*</small>
                                    <small class="baloobhai">(7am-8am)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="2" onChange={(e) => setSession("tuesday", e.target.value) } />
                                    <small class="baloobhai me-2">Tuesday AM Session</small>
                                    <small class="baloobhai">(8am-1pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="3" onChange={(e) => setSession("tuesday", e.target.value) } />
                                    <small class="baloobhai me-2">Tuesday Full Day</small>
                                    <small class="baloobhai">(8am-6pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="4" onChange={(e) => setSession("tuesday", e.target.value) } />
                                    <small class="baloobhai me-2">Tuesday School Day</small>
                                    <small class="baloobhai">(9am-3pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="5" onChange={(e) => setSession("tuesday", e.target.value) } />
                                    <small class="baloobhai me-2">Tuesday PM Session</small>
                                    <small class="baloobhai">(1pm-6pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="6" onChange={(e) => setSession("tuesday", e.target.value) } />
                                    <small class="baloobhai me-2">Tuesday Late Finish*</small>
                                    <small class="baloobhai">(6pm-7pm)</small>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-lg-3">
                            <div class="pink-quote bg-white w-100 px-4 py-5">
                                <div class="d-flex justify-content-center align-items-start">
                                    <div class="pink-badge">Wednesday</div>
                                </div>
                                
                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="1" onChange={(e) => setSession("wednesday", e.target.value) } />
                                    <small class="baloobhai me-2">Wednesday Early Start*</small>
                                    <small class="baloobhai">(7am-8am)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="2" onChange={(e) => setSession("wednesday", e.target.value) } />
                                    <small class="baloobhai me-2">Wednesday AM Session</small>
                                    <small class="baloobhai">(8am-1pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="3" onChange={(e) => setSession("wednesday", e.target.value) } />
                                    <small class="baloobhai me-2">Wednesday Full Day</small>
                                    <small class="baloobhai">(8am-6pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="4" onChange={(e) => setSession("wednesday", e.target.value) } />
                                    <small class="baloobhai me-2">Wednesday School Day</small>
                                    <small class="baloobhai">(9am-3pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="5" onChange={(e) => setSession("wednesday", e.target.value) } />
                                    <small class="baloobhai me-2">Wednesday PM Session</small>
                                    <small class="baloobhai">(1pm-6pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="6" onChange={(e) => setSession("wednesday", e.target.value) } />
                                    <small class="baloobhai me-2">Wednesday Late Finish*</small>
                                    <small class="baloobhai">(6pm-7pm)</small>
                                </div>

                            </div>
                        </div>


                        <div class="col-lg-3">
                            <div class="pink-quote bg-white w-100 px-4 py-5">
                                <div class="d-flex justify-content-center align-items-start">
                                    <div class="pink-badge">Thursdays</div>
                                </div>
                                
                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="1" onChange={(e) => setSession("thursday", e.target.value) } />
                                    <small class="baloobhai me-2">Thursday Early Start*</small>
                                    <small class="baloobhai">(7am-8am)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="2" onChange={(e) => setSession("thursday", e.target.value) } />
                                    <small class="baloobhai me-2">Thursday AM Session</small>
                                    <small class="baloobhai">(8am-1pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="3" onChange={(e) => setSession("thursday", e.target.value) } />
                                    <small class="baloobhai me-2">Thursday Full Day</small>
                                    <small class="baloobhai">(8am-6pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="4" onChange={(e) => setSession("thursday", e.target.value) } />
                                    <small class="baloobhai me-2">Thursday School Day</small>
                                    <small class="baloobhai">(9am-3pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="5" onChange={(e) => setSession("thursday", e.target.value) } />
                                    <small class="baloobhai me-2">Thursday PM Session</small>
                                    <small class="baloobhai">(1pm-6pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="6" onChange={(e) => setSession("thursday", e.target.value) } />
                                    <small class="baloobhai me-2">Thursday Late Finish*</small>
                                    <small class="baloobhai">(6pm-7pm)</small>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-3">
                            <div class="pink-quote bg-white w-100 px-4 py-5">
                                <div class="d-flex justify-content-center align-items-start">
                                    <div class="pink-badge">Fridays</div>
                                </div>
                                
                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="1" onChange={(e) => setSession("friday", e.target.value) } />
                                    <small class="baloobhai me-2">Friday Early Start*</small>
                                    <small class="baloobhai">(7am-8am)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="2" onChange={(e) => setSession("friday", e.target.value) } />
                                    <small class="baloobhai me-2">Friday AM Session</small>
                                    <small class="baloobhai">(8am-1pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="3" onChange={(e) => setSession("friday", e.target.value) } />
                                    <small class="baloobhai me-2">Friday Full Day</small>
                                    <small class="baloobhai">(8am-6pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="4" onChange={(e) => setSession("friday", e.target.value) } />
                                    <small class="baloobhai me-2">Friday School Day</small>
                                    <small class="baloobhai">(9am-3pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="5" onChange={(e) => setSession("friday", e.target.value) } />
                                    <small class="baloobhai me-2">Friday PM Session</small>
                                    <small class="baloobhai">(1pm-6pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="6" onChange={(e) => setSession("friday", e.target.value) } />
                                    <small class="baloobhai me-2">Friday Late Finish*</small>
                                    <small class="baloobhai">(6pm-7pm)</small>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-3">
                            <div class="pink-quote bg-white w-100 px-4 py-5">
                                <div class="d-flex justify-content-center align-items-start">
                                    <div class="pink-badge">Saturdays</div>
                                </div>
                                
                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="1" onChange={(e) => setSession("saturday", e.target.value) }  />
                                    <small class="baloobhai me-2">Saturday Early Start*</small>
                                    <small class="baloobhai">(7am-8am)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="2" onChange={(e) => setSession("saturday", e.target.value) } />
                                    <small class="baloobhai me-2">Saturday AM Session</small>
                                    <small class="baloobhai">(8am-1pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="3" onChange={(e) => setSession("saturday", e.target.value) } />
                                    <small class="baloobhai me-2">Saturday Full Day</small>
                                    <small class="baloobhai">(8am-6pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="4" onChange={(e) => setSession("saturday", e.target.value) } />
                                    <small class="baloobhai me-2">Saturday School Day</small>
                                    <small class="baloobhai">(9am-3pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="5" onChange={(e) => setSession("saturday", e.target.value) } />
                                    <small class="baloobhai me-2">Saturday PM Session</small>
                                    <small class="baloobhai">(1pm-6pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="6" onChange={(e) => setSession("saturday", e.target.value) } />
                                    <small class="baloobhai me-2">Saturday Late Finish*</small>
                                    <small class="baloobhai">(6pm-7pm)</small>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-3">
                            <div class="pink-quote bg-white w-100 px-4 py-5">
                                <div class="d-flex justify-content-center align-items-start">
                                    <div class="pink-badge">Sundays</div>
                                </div>
                                
                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="1" onChange={(e) => setSession("sunday", e.target.value) } />
                                    <small class="baloobhai me-2">Sunday Early Start*</small>
                                    <small class="baloobhai">(7am-8am)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="2" onChange={(e) => setSession("sunday", e.target.value) } />
                                    <small class="baloobhai me-2">Sunday AM Session</small>
                                    <small class="baloobhai">(8am-1pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="3" onChange={(e) => setSession("sunday", e.target.value) } />
                                    <small class="baloobhai me-2">Sunday Full Day</small>
                                    <small class="baloobhai">(8am-6pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="4" onChange={(e) => setSession("sunday", e.target.value) } />
                                    <small class="baloobhai me-2">Sunday School Day</small>
                                    <small class="baloobhai">(9am-3pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="5" onChange={(e) => setSession("sunday", e.target.value) } />
                                    <small class="baloobhai me-2">Sunday PM Session</small>
                                    <small class="baloobhai">(1pm-6pm)</small>
                                </div>

                                <div class="d-flex mb-2">
                                    <input type="checkbox" name="" id="" class="me-2"   value="6" onChange={(e) => setSession("sunday", e.target.value) } />
                                    <small class="baloobhai me-2">Sunday Late Finish*</small>
                                    <small class="baloobhai">(6pm-7pm)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Timings */}

                    <div class="d-flex text-center w-50 mt-5 flex-column align-items-center">
                        <p class="baloobhai text-secondary">
                            * Early Starts and Late Finishes are available only when added on to the start/finish of an AM/PM/Full-Day session, 
                            and cannot be booked as stand-alone 1 hour sessions.
                            <br /><br />
                            ** Weekend sessions available only to those who have at least: 4 AM/PM sessions, OR 2 Full-Day sessions, 
                            OR 1 Full-Day with 2 AM/PM sessions, between Monday and Friday.
                        </p>

                        <div class="d-flex justify-content-center mt-5">
                            <ReCAPTCHA
                                sitekey="6Leiyj4eAAAAAAGW7rN_v3E87jYj83900Nji1xOn"
                                onChange={onChange}
                            />
                        </div>

                        <a href="#" class="btn btn-md pink-btn baloobhai regular text-white mt-5" onClick={submit}>Submit</a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Formsection;