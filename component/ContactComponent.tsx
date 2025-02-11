import React from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import { SlSocialLinkedin } from 'react-icons/sl';


function ContactComponent() {
    return (
        <div className='container-fluid mt-5 p-3'>
            <h2 className='text-center fw-bold'>Contactez-moi</h2>
            <div className="row justify-content-between gap-2 p-5">
                <div className="col-lg-5 d-flex justify-content-center align-items-center">
                    <div className="card card-contact mx-auto">
                        <div id="img-contact" className='mx-auto'></div>
                        <div className="card-body">
                            <Stack direction="row" spacing={2}>
                                <Avatar alt="Remy Sharp" src="/images/me.jpg" />
                                <Typography variant="h6">
                                    Yao Parfait Eric
                                </Typography>
                            </Stack>
                            <p className='text-moyen'>Développeur d'application web et mobile</p>
                            <p className='text-moyen'>Je suis disponible pour des travaux en freelance.</p>
                            <p className='text-moyen'>Téléphone : +225 05 75 15 49 75</p>
                            <p className='text-moyen'>Courriel : ericyaodev@gmail.com</p>
                            <p className='text-moyen'>TROUVEZ AVEC MOI</p>

                            <div className="row mt-3">
                                <div className="col-lg-4 d-flex ">
                                    <div className="link">
                                        <a href="https://www.linkedin.com/in/parfait-eric-yao-299635344/" className='fs-5 p-4' target='_blank' rel='noopener' title='voir mon linkedin'>
                                            <SlSocialLinkedin />
                                        </a>
                                    </div>
                                    <div className="link mx-3">
                                        <a href="https://www.linkedin.com/in/parfait-eric-yao-299635344/" className='fs-5 p-4' target='_blank' rel='noopener' title='voir mon linkedin'>
                                            <FaGithub />
                                        </a>
                                    </div>
                                    <div className="link ">
                                        <a href="https://www.linkedin.com/in/parfait-eric-yao-299635344/" className='fs-5 p-4' target='_blank' rel='noopener' title='voir mon linkedin'>
                                            <FaWhatsapp />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-lg-6" id='form-shadow'>
                    <form className='row '>
                        <div className="card p-5 border-0" id='form-color'>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div className="form-floating ">
                                        <input type="text" className="form-control" id="nom" placeholder="Entrez votre nom complet" />
                                        <label htmlFor="nom">Nom complet</label>
                                    </div>
                                </div>
                                <div className="col-md-6  mb-3">
                                    <div className="form-floating ">
                                        <input type="tel" className="form-control" id="tel" placeholder="Entrez votre nom numéro" />
                                        <label htmlFor="tel">Téléphone</label>
                                    </div>
                                </div>
                                <div className="col-md-12  mb-3">
                                    <div className="form-floating ">
                                        <input type="email" className="form-control" id="email" placeholder="Entrez votre nom email" />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div className="col-md-12  mb-3">
                                    <div className="form-floating ">
                                        <input type="text" className="form-control" id="text" placeholder="Entrez votre sujet" />
                                        <label htmlFor="sujet">Sujet</label>
                                    </div>
                                </div>
                                <div className="col-md-12  mb-3">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Laissez un commentaire " id="commentaire"></textarea>
                                        <label htmlFor="commentaire">Commentaire</label>
                                    </div>
                                </div>
                                <div className="col-md-12  mb-3">
                                    <Button variant="contained" id='submitBtn' className='btn btn-danger text-center fw-bold form-control p-3' endIcon={<SendIcon />}>
                                        Envoyez un message
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactComponent