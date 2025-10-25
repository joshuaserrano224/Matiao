
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import NewsSection from '../components/home/NewsSection';
import ServicesSection from '../components/home/ServicesSection';
import GallerySection from '../components/home/GallerySection';
import OfficialsSection from '../components/home/OfficialsSection';
import '../css/Home.css';



const Home = () => {
    return (
        <div className="home-page">
         
            <main>
                <HeroSection />
                <AboutSection />
                <NewsSection />
                <ServicesSection />
                <GallerySection />
                <OfficialsSection />
            </main>
          
        </div>
    );
};

export default Home;