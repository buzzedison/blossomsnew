import React from 'react';



const Fixedmenu = () => {

    React.useEffect( () => {
        window.addEventListener('scroll', controlNavbar)
    },[])

    const [show, setShow] = React.useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 150 ) {
            setShow(true)
        }else{
            setShow(false)
        }
    }

    if(show){
        return (
            <div class="container d-none d-md-block">
                <div class="row">
                    <div class="col-lg-3">
                        <img src="./images/blossom logo.png" alt="" class="logoholder my-2" />
                    </div>
                    <div class="col-lg-9">
                        <ul class="menulist d-flex mb-0 justify-content-center align-items-center h-100 ">
                            <li><a href="touch#showaround" class="diff">Book A Showaround</a></li>
                            <li><a href="touch#space" class="diff">Apply For A Space</a></li>
                            <li><a href="touch#question" class="diff">Ask A Question</a></li>
                            <li><a href="touch#ofsted" class="diff">Ofsted Registered</a></li>
                            <li><a href="touch#contact" class="diff">Contact Details</a></li>
                        </ul> 
                    </div>
                </div>
            </div>
        )
    }else{
        return null
    }
    
}

export default Fixedmenu;