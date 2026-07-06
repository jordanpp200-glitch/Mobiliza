import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import DownloadApp from "../../components/DownloadApp/DownloadApp";
import Download from "../../components/Download/Download";
import Statistics from "../../components/Statistics/Statistics";
import Services from "../../components/Services/Services";
import Steps from "../../components/Steps/Steps";

import Footer from "../../components/Footer/Footer";
import Stats from "../../components/Stats/Stats";
import Testimonials from "../../components/Testimonials/Testimonials";
import HelpCenter from "../../components/HelpCenter/HelpCenter";
import FloatingButtons from "../../components/FloatingButtons/FloatingButtons";

import "./Home.css";

export default function Home() {

    return (

        <>
            <Header />
            <Hero />
            <DownloadApp />
            <Download />
            <Statistics />
            <Stats />
            <Services />
            <Steps />
            <Testimonials />
            <HelpCenter />
            <FloatingButtons />
            <Footer />
        </>
    );

}