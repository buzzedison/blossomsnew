import { useState } from "react";
const Policiessection = () => {
    const [policies, setPolicies] = useState(false);
    const data = {
            items: [
                "Accident, Incident and First Aid Policy",
                "Recording & Reviewing Accidents, Incidents & Existing Injuries",
                "Achieving Positive Behaviour and Promoting British Values",
                "Admissions and Charging Policy",
                "Adverse Weather Policy",
                "Arrivals and Departures Policy",
                "Allergy and Allergic Reaction Policy",
                "Employment Staffing Policy",
                "Complaints Policy",
                "Procedure for Recording Complaints",
                "Confidentiality, Data Protection and Information Sharing Policy",
                "E- Safety Policy",
                "Early Years Foundation Stage Policy",
                "Employment of Relatives and Close Friends Policy",
                "Environmental Policy",
                "Fire Safety, Critical Incidents and Emergency Evacuation Policy",
                "Food and Drink Policy",
                "Procedure in the Event of a Fire or Emergency Evacuation",
                "Harassment and Bullying Policy and Procedure",
                "Health and Safety Policy",
                "Inclusion, Equality and Diversity Policy",
                "Late Collection and Uncollected Child Policy",
                "Looked after Children Policy",
                "Lockdown Policy",
                "Medication, Illness and Infection Control Policy",
                "Missing Child Policy",
                "Nappy Changing, Toileting and Intimate Care Policy",
                "No Smoking Policy",
                "Outdoor Play and Protection from the Weather Policy",
                "Outings Policy",
                "Partnership with Parents Policy",
                "Safeguarding Children Policy",
                "Safeguarding and Child Protection Procedures",
                "Procedure for Completing Records of Concern",
                "Safer Recruitment and Selection Policy and Procedure",
                "Sleep Policy and Procedures",
                "Staff Code of Conduct Policy",
                "Supervision of Visitors Policy and Procedure",
                "Special Educational Needs and Disability Policy",
                "The Learning Journey Policy",
                "Transition Policy",
                "Use of Dummies, Bottles and Cups Policy",
                "Whistleblowing Policy"
        ]
    };

    const toggle = () => {
        setPolicies(!policies);
    }
    return(
        <section class="nursery-policies" id="NurseryPolicies">
            <div class="container d-flex flex-column align-items-center">
                <h2 class="fredoka bold mb-5  text-center text-heading heading">Our Nursery Policies</h2>
                <p class="baloobhai text-secondary text-center">
                    We have a comprehensive and detailed set of Nursery Policies to cover every aspect of life at Blossoms Childcare. All of our Safeguarding & Welfare policies and our Learning & Development policies will be explained during the Registration Process, and will include:
                </p>

                <div class="blue-quote w-100 p-3 mt-5">
                    <div class="blue-dashed text-secondary pt-3 pb-2">
                        <div class="d-flex justify-content-between">
                            <h6 class="fredoka text-heading mb-0">Our Nursery Policies</h6>
                            <i class={(!policies) ? 'fas fa-chevron-circle-down text-ltblue fs-5' : 'fas fa-chevron-circle-up text-ltblue fs-5'} onClick={() => toggle()}></i>
                        </div>
                        
                        <ul class="text-secondary baloobhai mt-3 ps-1">
                            {
                                data.items.map((item, index) => {
                                    return(<li key={index} class={(policies) ? "" : "d-none"}><i class="fas fa-check-circle text-ltblue me-2"></i>{item}</li>)
                                })
                            }  
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Policiessection;