import Image from 'next/image'
import React from 'react'

function appBudgetProjet() {
    return (
        <div className='container '>
            <div className="row">
                <div className="col-lg-6">
                    <Image src="/images/me.jpg" width={100} height={100} alt='app-image' />
                </div>
                <div className="col-lg-6"></div>
            </div>
        </div>
    )
}

export default appBudgetProjet