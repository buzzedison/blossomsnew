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
                            <li><a href="parents#safe" class="diff">Safe & Secure</a></li>
                            <li><a href="parents#health" class="diff">Health & Well-being</a></li>
                            <li><a href="parents#eyfs" class="diff">The EYFS</a></li>
                            <li><a href="parents#informed" class="diff">Keeping Informed</a></li>
                            <li><a href="parents#policies" class="diff">Nursery Policies</a></li>
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