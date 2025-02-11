"use client"
import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

function ResumeComponent() {
  return (
    <div className='container mt-5' id='cv' >
      <h4 className='h1 text-center fw-bold' data-aos="fade-down">Mon Curriculum Vitae</h4>
      <div className="row justify-content-center ali-items-center p-5">
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              Depuis 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="error">
                <AccountBalanceIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }} data-aos="zoom-in">
              <Typography variant="h6" component="span">
                <span className="color-titre-cv">Développement d'application et e services</span>
              </Typography>
              <div className="w-100">
                <div className="card">
                  <div className="card-body">
                    <Typography className="text-muted">Université virtuelle de Côte d'Ivoire</Typography>
                    <Typography className="color-text-cv">Filière : Informatique</Typography >
                    <Typography className="color-text-cv">Niveau : Licence 3</Typography >
                    <Typography className="color-text-cv">
                      Formation en développement d'applications modernes, combinant front-end conception d'interfaces et back-end gestion serveur et données
                    </Typography >
                  </div>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="left"
              variant="body2"
              color="text.secondary"
            >
              2024 - 2025
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }} data-aos="zoom-in">
              <Typography variant="h6" component="span">
                <span className="color-titre-cv">Formation en développement Full Stack</span>
              </Typography>
              <div className="w-100">
                <div className="card text-end">
                  <div className="card-body">
                    <Typography className="text-muted text-start">Gomycode Côte d'Ivoire</Typography>
                    <Typography className="color-text-cv text-start">Diplome : Certificat en Développement logiciel</Typography>
                    <Typography className="color-text-cv text-start">
                      Formation en développement logiciel à GoMyCode, incluant des compétences en front-end, back-end et outils modernes pour la création de solutions innovantes.
                    </Typography>
                  </div>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="left"
              variant="body2"
              color="text.secondary"
            >
              2019 - 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }} data-aos="zoom-in">
              <Typography variant="h6" component="span">
                <span className="color-titre-cv "> Baccalauréat</span>
              </Typography>
              <div className="card w-100">
                <div className="card-body">
                  <Typography className="text-muted">Lycée scientifique de Yamoussoukro</Typography>
                  <Typography className="color-text-cv">
                    Études secondaires orientées vers les sciences, avec un fort accent sur les disciplines scientifiques telles que les mathématiques, la physique et la chimie. Développement de compétences analytiques et logiques, essentielles pour la poursuite d'études en informatique.
                  </Typography>
                  <Typography className="color-text-cv">Serie : D</Typography>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  )
}

export default ResumeComponent