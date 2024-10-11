import React from 'react';
import ImageSlider from '../components/ImageSlider'; // Ensure this path is correct
import About from './About';  // Import the About component
import Contact from './Contact';  // Import the Contact component

const Home = () => {
  return (
    <div>
      <ImageSlider />  {/* Image slider at the top */}

      {/* About and Contact sections below the slider */}
      <About />
      <Contact />
    </div>
  );
};

export default Home;
