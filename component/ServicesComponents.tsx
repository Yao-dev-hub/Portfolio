import React from 'react'
import { FaBriefcase, FaCode, FaFire, FaLaptopCode, FaMobileAlt, FaPaintBrush, FaRocket, FaServer, FaShoppingCart } from 'react-icons/fa'
import { IoServerSharp } from "react-icons/io5";

function ServicesComponents() {
    return (
        <div className='container mt-5 p-3' id='service'>
            <h2 className='text-center mb-5'>Mes services</h2>
            <div className="row g-3">
                <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1200">
                    <div className="card card-service  h-100">
                        <h1 className='icon-service '>
                            <FaLaptopCode />
                        </h1>
                        <div className="card-body">
                            <h4 className='titre-service-style'>Développement d'applications Web dynamiques avec React et Next.js</h4>
                            <p className='text-service-style'>Utilisation de Next.js pour le rendu côté serveur (SSR) et l'optimisation SEO.
                                Création d'interfaces réactives avec React.
                                Routage et gestion d'état avec React Router et Redux.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1200">
                    <div className="card card-service  h-100">
                        <h1 className='icon-service '>
                            <IoServerSharp />
                        </h1>
                        <div className="card-body">
                            <h4 className='titre-service-style'>Développement de RESTful APIs avec Node.js, Express et MongoDB</h4>
                            <p className='text-service-style'>
                                Création d'APIs RESTful robustes avec Node.js et Express.
                                Utilisation de MongoDB pour stocker les données..</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1200">
                    <div className="card card-service h-100">
                        <h1 className='icon-service '>
                            <FaFire />
                        </h1>
                        <div className="card-body">
                            <h4 className='titre-service-style'>Applications en temps réel avec Firebase et React</h4>
                            <p className='text-service-style'>
                                Création d'applications en temps réel avec Firebase pour le backend.
                                Utilisation de Cloud Firestore pour la gestion des données en temps réel.
                                Authentification avec Firebase Auth.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3" data-aos="zoom-in">
                    <div className="card card-service  h-100" data-aos-duration="1200">
                        <h1 className='icon-service '>
                            <FaShoppingCart />
                        </h1>
                        <div className="card-body">
                            <h4 className='titre-service-style'>Développement de sites e-commerce avec React, Node.js, et MongoDB</h4>
                            <p className='text-service-style'>Création de plateformes de e-commerce avec React et Node.js.
                                Intégration avec MongoDB pour la gestion des produits.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1200">
                    <div className="card card-service h-100">
                        <h1 className='icon-service '>
                            <FaMobileAlt />
                        </h1>
                        <div className="card-body">
                            <h4 className='titre-service-style'>Interfaces utilisateur modernes avec MUI et Bootstrap</h4>
                            <p className='text-service-style'>Conception d'interfaces avec Material UI (MUI) et Bootstrap.
                                Création de composants UI personnalisables et réactifs.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1200">
                    <div className="card card-service h-100">
                        <h1 className='icon-service '>
                            <FaCode />
                        </h1>
                        <div className="card-body">
                            <h4 className='titre-service-style'> Développement d'applications Full Stack avec TypeScript</h4>
                            <p className='text-service-style'>Développement d'applications avec TypeScript pour une sécurité des types.
                                Création de projets Full Stack avec React et Node.js.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1200">
                    <div className="card card-service h-100">
                        <h1 className='icon-service '>
                            <FaRocket />
                        </h1>
                        <div className="card-body">
                            <h4 className='titre-service-style'>Optimisation des performances et SEO avec Next.js et React</h4>
                            <p className='text-service-style'>Utilisation du rendu côté serveur (SSR) avec Next.js pour optimiser les performances et le SEO.
                                Optimisation des images et du code avec Next.js.
                                Mise en œuvre de bonnes pratiques SEO.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1200">
                    <div className="card card-service">
                        <h1 className='icon-service '>
                            <FaBriefcase />
                        </h1>
                        <div className="card-body">
                            <h4 className='titre-service-style'>Je suis disponible pour des missions freelance </h4>
                            <p className='text-service-style'>Si vous avez besoin d'un développeur Full Stack passionné et expérimenté, n'hésitez pas à me contacter pour discuter de vos projets. Je suis ouvert à des collaborations sur des projets de développement web, d'applications, et plus encore.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesComponents