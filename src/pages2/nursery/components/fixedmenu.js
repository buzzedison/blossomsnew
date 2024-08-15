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
                            <li><a href="nursery#virtual" class="diff">3D Virtual Tour</a></li>
                            <li><a href="nursery#different" class="diff">What Makes Us Different</a></li>
                            <li><a href="nursery#areas" class="diff">Indoor & Outdoor Areas</a></li>
                            <li><a href="nursery#play" class="diff">Learning Through Play</a></li>
                            <li><a href="nursery#routines" class="diff">Typical Routines</a></li>
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