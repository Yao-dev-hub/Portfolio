import React from 'react'
import ImageComponent from './ImageComponent'
import AboutMeComponent from './AboutMeComponent'

function HeroSection() {
    return (
        <div className='row d-flex justify-content-between '>
            <div className="col-md-7">
                <AboutMeComponent />
            </div>
            <div className="col-md-5 mx-auto d-flex justify-content-end align-items-end">
                <ImageComponent />
            </div>
        </div>
    )
}

export default HeroSection