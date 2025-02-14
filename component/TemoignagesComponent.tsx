import React from "react";
import Slider from "react-slick";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import { Card, CardContent, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        name: "John Doe",
        feedback: "Excellent travail, très satisfait de la prestation.",
        role: "Client",
    },
    {
        name: "Jane Smith",
        feedback:
            "Un service incroyable, je recommande vivement. Je suis très content de cette expérience, merci beaucoup !",
        role: "Partenaire",
    },
    {
        name: "Alice Brown",
        feedback: "Rapide, efficace et très professionnel.",
        role: "Utilisateur",
    },
    {
        name: "Michael Johnson",
        feedback: "Service parfait, je suis ravi !",
        role: "Client fidèle",
    },
];

function TemoignagesComponent() {
    const settings = {
        dots: true, // Affiche les points de navigation
        infinite: true, // Boucle infinie
        speed: 500, // Vitesse de transition en ms
        slidesToShow: 3, // Nombre de slides affichés
        slidesToScroll: 1, // Nombre de slides à faire défiler
        autoplay: true, // Active l'autoplay
        autoplaySpeed: 3000, // Durée entre chaque slide
        responsive: [
            {
                breakpoint: 1024, // Pour les écrans de taille tablette
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600, // Pour les écrans de taille mobile
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="container-fluid p-3" id="temoignage">
            <h2 className="text-center text-white">Témoignages</h2>
            <div className="row">
                <Box
                    sx={{
                        maxWidth: "90%",
                        mx: "auto",
                        mt: 4,
                    }}
                >
                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} id="sildes">{/* Espace entre les slides */}

                                <Card
                                    key={index}
                                    sx={{
                                        p: 2,
                                        textAlign: "center",
                                        m: 1,
                                        minHeight: 250, // Fixe une hauteur minimale
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between", // Distribution des éléments
                                    }}
                                    className="h-100"
                                >
                                    <CardContent>
                                        <Avatar
                                            alt={testimonial.name}
                                            src="/path/to/avatar" // Ajouter un chemin à une image si nécessaire
                                            sx={{ mx: "auto", mb: 2 }}
                                        />
                                        <Typography variant="h6" fontWeight="bold">
                                            {testimonial.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
                                            {testimonial.role}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontStyle: "italic",
                                                overflow: "hidden", // Coupe le texte trop long
                                                textOverflow: "ellipsis",
                                                display: "-webkit-box",
                                                WebkitLineClamp: 2, // Limite à 3 lignes
                                                WebkitBoxOrient: "vertical",
                                            }}
                                        >
                                            "{testimonial.feedback}"
                                        </Typography>
                                    </CardContent>
                                </Card>

                            </div>
                        ))}
                    </Slider>

                </Box>
            </div>
        </div>
    );
}

export default TemoignagesComponent;
