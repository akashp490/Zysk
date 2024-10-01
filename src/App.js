
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import SocialProof from './components/SocialProof';
import FeatureSection from './components/FeatureSection';
import TestimonalSection from './components/TestimonalSection';
import FeatureSection2 from './components/FeatureSection2';
import FAQSection from './components/FAQSection';
import BlogSection from './components/BlogSection';
import TrialSection from './components/TrialSection';
import Foot from './components/Foot';



function App() {
  return (
    <div className="text-center">
      
      <Navbar  />
      <HeroSection  />
      <SocialProof  />
      <FeatureSection  />
      <TestimonalSection  />
      <FeatureSection2 />
      <FAQSection />
      <BlogSection />
      <TrialSection />
      <Foot />
    </div>
  );
}

export default App;



