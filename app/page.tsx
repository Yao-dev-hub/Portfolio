"use client"
import HeroSection from '@/component/HeroSection';
import SectionFonction from '@/component/SectionCompetences';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importe les styles CSS d'AOS
import SectionPorfolio from '@/component/SectionPorfolio';
import ContactComponent from '@/component/ContactComponent';
import ResumeComponent from '@/component/ResumeComponent';
import ServicesComponents from '@/component/ServicesComponents';
import TemoignagesComponent from '@/component/TemoignagesComponent';

function Page() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            easing: 'ease-in-out',
            offset: 100
        });
    }, [])
    return (
        <>
            <main className='container mt-5'>
                <HeroSection />
                <SectionFonction />
                <ServicesComponents />
                <SectionPorfolio />
                <ResumeComponent />
                <TemoignagesComponent />
                <ContactComponent />
            </main>
        </>

    )
}

export default Page



































































