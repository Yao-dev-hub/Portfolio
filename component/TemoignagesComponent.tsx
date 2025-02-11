import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import { Typography } from '@mui/material';

function TemoignagesComponent() {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };



    return (
        <div className='container p-3' id="temoignage">
            <h2 className='text-center'>Témoignages</h2>
            <div className="row  mx-auto">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5s"
                    transitionDuration={500}
                    containerClass="carousel-container mx-auto"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="style-de-liste-de-points-personnalisé"
                    itemClass="carousel-item-padding-40-px"
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                >
                    <div className="col-lg-3 w-75 ">
                        <div className='card p-3'>
                            <Box sx={{ display: 'flex', gap: 2, marginLeft: "12px" }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <div className="row">
                                    <Typography>Koffi Chris Franck</Typography>
                                    <p><sub>Professeur de maths</sub></p>
                                </div>
                            </Box>
                            <div className="card-body">
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsa provident beatae, dolorum voluptas maiores!</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3  w-75">
                        <div className='card p-3'>
                            <Box sx={{ display: 'flex', gap: 2, marginLeft: "12px" }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <div className="row">
                                    <Typography>Koffi Chris Franck</Typography>
                                    <p><sub>Professeur de maths</sub></p>
                                </div>
                            </Box>
                            <div className="card-body">
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsa provident beatae, dolorum voluptas maiores!</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3  w-75">
                        <div className='card p-3'>
                            <Box sx={{ display: 'flex', gap: 2, marginLeft: "12px" }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <div className="row">
                                    <Typography>Koffi Chris Franck</Typography>
                                    <p><sub>Professeur de maths</sub></p>
                                </div>
                            </Box>
                            <div className="card-body">
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsa provident beatae, dolorum voluptas maiores!</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3  w-75">
                        <div className='card p-3'>
                            <Box sx={{ display: 'flex', gap: 2, marginLeft: "12px" }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <div className="row">
                                    <Typography>Koffi Chris Franck</Typography>
                                    <p><sub>Professeur de maths</sub></p>
                                </div>
                            </Box>
                            <div className="card-body">
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsa provident beatae, dolorum voluptas maiores!</h6>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default TemoignagesComponent