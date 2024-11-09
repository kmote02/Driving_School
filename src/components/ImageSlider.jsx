import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './slider.css';

// Import your images
import img1 from '../assets/7.jpg';
import img2 from '../assets/6.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';

const images = [
    { 
        src: img1, 
        title: "Fast Drive could be Last Drive", 
        description: " ", 
        style: {            
            fontSize: '1.6rem',
            fontFamily: 'Alegreya, serif',
            fontWeight: 'bold',
            color: '#f8f7ff',  
            textShadow: '1px 1px 4px black'  
        }
    },  
    // ... other images
];

const ImageSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const navigate = useNavigate(); // Initialize navigate

    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextImage();
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    // Scroll to the section based on the section ID
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="slider">
            <div className="list">
                {images.map((image, index) => (
                    <div key={index} className={`item ${index === currentImage ? 'active' : ''}`}>
                        <img src={image.src} alt={`Slider ${index + 1}`} />
                        <div 
                            className="content" 
                            style={image.style ? image.style : { color: image.color }}
                        >
                            <h2>{image.title}</h2>
                            <p>{image.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="arrows">
                <button id="prev" onClick={prevImage}>{"<"}</button>
                <button id="next" onClick={nextImage}>{">"}</button>
            </div>

            {/* Buttons (Login, About, Contact Us) */}
            <div className="button-group-row">
                {/* Use navigate for smooth in-app navigation */}
                <button
                    className="slider-button"
                    onClick={() => navigate('/login')} // Use navigate instead of opening in new tab
                >
                    Login
                </button>

                {/* Scroll to About and Contact sections */}
                <button
                    className="slider-button"
                    onClick={() => scrollToSection('about-section')}
                >
                    About
                </button>
                <button
                    className="slider-button"
                    onClick={() => scrollToSection('contact-section')}
                >
                    Contact
                </button>
            </div>

            {/* Thumbnail */}
            <div className="thumbnail">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`item ${index === currentImage ? 'active' : ''}`}
                        onClick={() => setCurrentImage(index)}
                    >
                        <img src={image.src} alt={`Thumbnail ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
