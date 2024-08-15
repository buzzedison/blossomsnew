import React from 'react';

const Tour = () => {
    return(
        <section id="3DVirtualTour" class="container-fluid backgroundtop p-0">
            <div class="container-fluid">
                <div class="row flex-column">
                    <div class="col-lg-12 headtext d-flex flex-column mt-5 py-3">
                        <h1 class="d-flex justify-content-center headtext hero-header text-center">3D Virtual Tour</h1>
                        <p class="minitext text-center d-flex justify-content-center">Take a look inside our beautiful children’s nursery with our 3D Virtual Tour.</p>
                    </div>
                    <div class="box mt-5 p-0">
                    <iframe width='100%' height='480' src='https://my.matterport.com/show/?m=dm5hA8Ypehc' frameborder='0' allowfullscreen allow='xr-spatial-tracking'></iframe>
                    </div>
                    <p class="px-5 minitext text-center mt-5">Feel free to explore every corner in your own time. You can look around the Baby Room, the Toddler & Pre-school Room, and you can even look around our kitchen! Click on the info-bubbles to learn more about each individual area, why it is important to your child’s development, and the resources we use. You’ll see the intelligence and effort that goes into planning such an enabling environment for children to feel loved, supported and encouraged
                        to learn through play.</p>
                </div>
                
            </div>
        </section>
    )
}

export default Tour;