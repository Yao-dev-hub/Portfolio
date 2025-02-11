"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { CiHeart } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import ModalComponent from './ModalComponent';


function SectionPorfolio() {

    const [showModal, SetShowModal] = useState(false)

    const handleShow = () => {
        SetShowModal(true)
    }
    const handleClose = () => {
        SetShowModal(false)
    }

    return (
        <div className='container mt-5' data-aos="fade-down">
            <h1 className='text-center fw-bold my-5'>Mon portfolio portfolio</h1>
            <div className="row g-2 my-3 ">
                <div className="col-lg-4">
                    <Button onClick={handleShow} variant="white" className='border-0'>
                        <div className="card card-portfolio mx-auto">
                            <div className="container-image1"></div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h6>Application web et Mobile</h6>
                                    <span><CiHeart />10</span>
                                </div>
                                <p className="text-start">Application de gestion de budget</p>
                            </div>
                        </div>
                    </Button>
                    <ModalComponent handleClose={handleClose} showModal={showModal} />
                </div>
                <div className="col-lg-4">
                    <Button onClick={handleShow} variant="white" className='border-0'>
                        <div className="card card-portfolio mx-auto">
                            <div className="container-image1"></div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h6>Application web et Mobile</h6>
                                    <span><CiHeart />10</span>
                                </div>
                                <p className="text-start">Application de gestion de budget</p>
                            </div>
                        </div>
                    </Button>
                    <ModalComponent handleClose={handleClose} showModal={showModal} />
                </div>
                <div className="col-lg-4">
                    <Button onClick={handleShow} variant="white" className='border-0'>
                        <div className="card card-portfolio mx-auto">
                            <div className="container-image1"></div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h6>Application web et Mobile</h6>
                                    <span><CiHeart />10</span>
                                </div>
                                <p className="text-start">Application de gestion de budget</p>
                            </div>
                        </div>
                    </Button>
                    <ModalComponent handleClose={handleClose} showModal={showModal} />
                </div>
            </div>
        </div >
    )
}

export default SectionPorfolio