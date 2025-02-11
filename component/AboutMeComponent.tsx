"use client"
import React from 'react'
import Typewriter from 'typewriter-effect';
import { SlSocialLinkedin } from "react-icons/sl";
import { FaGithub } from 'react-icons/fa';
import { FiFacebook } from "react-icons/fi";
import Link from 'next/link';

function AboutMeComponent() {
    return (
        <div className="container p-4" data-aos="fade-down" id='about'>
            <div className="row">
                <div className="col-lg-12 ">
                    <h5 >Bienvenue sur mon Porfolio</h5>
                    <h1 >Salut, mon nom est <span className='text-primary fw-bold'>Yao Parfait Eric</span>.</h1>
                    <h2 className='mt-3'>
                        Je suis un{' '}
                        <Typewriter
                            options={{
                                strings: [
                                    'Passionné de <span style="color: red;">code</span>',
                                    'Créateur d’applications <span style="color: red;">web</span> et <span style="color: red;">mobiles</span> ',
                                    'Développeur <span style="color: red;">Full Stack</span> ',
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                    <p className='my-5' >
                        Développeur Full Stack de 22 ans, passionné par la création d’applications web et mobiles performantes et innovantes.
                        Fort d’une expertise approfondie des technologies modernes, je m’efforce de concevoir des solutions fiables,
                        évolutives et parfaitement alignées sur les besoins spécifiques des utilisateurs.
                    </p>
                    <hr />
                    <div className="row mt-3 d-flex justify-content-evenly py-4">
                        <div className="col-lg-4 d-flex ">
                            <div className="link">
                                <a href="https://www.linkedin.com/in/parfait-eric-yao-299635344/" className='fs-5' target='_blank' rel='noopener' title='voir mon linkedin'>
                                    <SlSocialLinkedin />
                                </a>
                            </div>
                            <div className="link mx-3">
                                <a href="https://www.linkedin.com/in/parfait-eric-yao-299635344/" className='fs-5' target='_blank' rel='noopener' title='voir mon linkedin'>
                                    <FaGithub />
                                </a>
                            </div>
                            <div className="link ">
                                <a href="https://www.linkedin.com/in/parfait-eric-yao-299635344/" className='fs-5' target='_blank' rel='noopener' title='voir mon linkedin'>
                                    <FiFacebook />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <hr />
                        </div>
                        <div className="col-lg-4">
                            <Link href="#" className='btn btn-success rounded-5 p-2 fw-bold text-center'>Telecharger mon CV</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AboutMeComponent