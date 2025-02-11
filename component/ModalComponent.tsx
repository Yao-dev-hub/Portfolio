"use client"
import { ModalType } from '@/Types'
import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';

function ModalComponent({ handleClose, showModal }: ModalType) {
    console.log("Yes", showModal)
    return (
        <>
            {showModal && (
                <div className="container" >
                    <div className="row">
                        <div className="col-lg-12">
                            <Modal show={showModal} onHide={handleClose} centered size='lg' style={{ maxWidth: '90%', width: '100%' }}>
                                <Modal.Header closeButton className='border-0 '></Modal.Header>
                                <Modal.Body style={{ height: '60vh', maxWidth: "100%" }}>
                                    <div className='row gap-1'>
                                        <div className="col-lg-6">
                                            <div className="card" id='card-modal'></div>
                                        </div>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}

export default ModalComponent