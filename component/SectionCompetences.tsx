"use client"
import ProgressBar from 'react-bootstrap/ProgressBar';

function SectionFonction() {
    return (
        <>
            <div className='container ' id='competences' >
                <h2 className='fw-bold  text-center mb-3' data-aos="zoom-in">Mes compétences sur divers outils</h2>
                <div className="row text-center gap-3 justify-content-center align-items-center mobile-responsive">
                    <div className="row justify-content-between" data-aos="fade-up">
                        <div className="col-lg-5">
                            <h6 className="text-start mt-3">React JS</h6>
                            <ProgressBar now={80} label="80%" animated />

                            <h6 className="text-start mt-3">Next JS</h6>
                            <ProgressBar now={75} label="75%" animated />

                            <h6 className="text-start mt-3">Bootstrap</h6>
                            <ProgressBar now={85} label="85%" animated />

                            <h6 className="text-start mt-3">Postman</h6>
                            <ProgressBar now={55} label="55%" animated />

                            <h6 className="text-start mt-3">Node JS</h6>
                            <ProgressBar now={68} label="68%" animated />

                            <h6 className="text-start mt-3">Mongo db</h6>
                            <ProgressBar now={75} label="75%" animated />
                        </div>
                        <div className="col-lg-5" data-aos="fade-up">
                            <h6 className="text-start mt-3">TypeScript</h6>
                            <ProgressBar now={75} label="75%" animated />

                            <h6 className="text-start mt-3">JavaScript</h6>
                            <ProgressBar now={83} label="83%" animated />

                            <h6 className="text-start mt-3">Capacitor</h6>
                            <ProgressBar now={72} label="72%" animated />

                            <h6 className="text-start mt-3">HTML 5</h6>
                            <ProgressBar now={89} label="89%" animated />

                            <h6 className="text-start mt-3">CSS</h6>
                            <ProgressBar now={87} label="87%" animated />

                            <h6 className="text-start mt-3">Firebase</h6>
                            <ProgressBar now={78} label="78%" animated />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <hr />
            </div>

        </>

    )
}

export default SectionFonction