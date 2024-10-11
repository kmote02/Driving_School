
import React, { useState, useEffect } from 'react';
import './slider.css';  // Import the CSS for the slider

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
    { 
        src: img2, 
        title: "Park the Phone before you Drive", 
        description: " ", 
        style: {            
            fontSize: '1.6rem',
            padding: '20px',
            fontFamily: 'Alegreya, serif',
            fontWeight: 'bold',
            color: '#f8f7ff',  
            textShadow: '1px 1px 4px black'  
        }
    },  
    { 
        src: img3, 
        title: "Keep Safe Distance", 
        description: "", 
        style: {            
            fontSize: '1.6rem',
            padding: '20px',
            fontFamily: 'Alegreya, serif',
            fontWeight: 'bold',
            color: '#e5e5e5',  
            textShadow: '1px 1px 4px black'  
        }
    },  
    { 
        src: img4, 
        title: "Safety isn't Expensive,", 
        description: " it's Priceless", 
        style: {            
            fontSize: '1.6rem',
            padding: '20px',
            fontFamily: 'Alegreya, serif',
            fontWeight: 'bold',
            color: '#e5e5e5',  
            textShadow: '1px 1px 4px black'  
        }
    },  
    { 
        src: img5, 
        title: "Safe Drive Save Life", 
        description: " ", 
        style: {            
            fontSize: '1.6rem',
            padding: '20px',
            fontFamily: 'Alegreya, serif',
            fontWeight: 'bold',
            color: '#e5e5e5',  
            textShadow: '1px 1px 4px black'  
        }
    }
];

const ImageSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);

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

    return (
        <div className="slider">
            <div className="list">
                {images.map((image, index) => (
                    <div key={index} className={`item ${index === currentImage ? 'active' : ''}`}>
                        <img src={image.src} alt={`Slider ${index + 1}`} />
                        <div 
                            className="content" 
                            style={image.style ? image.style : { color: image.color }} // Apply either the full style or just the color
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
                <button className="slider-button">Login</button>
                <button className="slider-button">About</button>
                <button className="slider-button">Contact</button>
            </div>

            {/* Thumbnail*/ }
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