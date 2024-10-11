// components/Navbar.jsx

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.navLink}>About</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',  // Background color for the navbar
    padding: '10px',
    position: 'fixed',  // Make the navbar fixed to the top
    top: '0',           // Stick to the top
    left: '0',          // Start from the left side of the screen
    width: '100%',      // Ensure the navbar spans the entire width
    zIndex: '1000',     // Ensure it appears above other elements
  },
  navList: {
    listStyleType: 'none',
    margin: '0',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',  // Center the links horizontally
  },
  navItem: {
    margin: '0 20px',
  },
  navLink: {
    color: '#fff',           // White text
    textDecoration: 'none',  // Remove underline from links
    fontSize: '18px',
  }
};

export default Navbar;




/*

@import url('https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&display=swap');

/* General Slider Styles 
.slider {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
    /* Ensures that no extra content spills out 
}

.slider .list {
    display: flex;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease-in-out;
    /* Allows smooth transition when switching between slides */


/* General Slider Styles 
.slider .list .item {
    display: none;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.slider .list .item.active {
    display: block;
    opacity: 1;
    z-index: 10;
}

.slider .list .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Cover the area without distorting the image 
    }

.slider .list .item .content {
    position: absolute;
    bottom: 20%;
    left: 10%;
    z-index: 20;
    color: white;
}

.slider .list .item .content h2 {
    font-size: 4rem;
    margin: 0;
}

.slider .list .item .content p {
    font-size: 1.2rem;
    max-width: 500px;
}

/* Button Group (Positioned in the top-right corner, aligned in a row) 
.button-group-row {
    position: fixed;
    top: 10px;
    right: 50px;
    display: flex;
    gap: 30px;
    z-index: 30;
}

.slider-button {
    background: none;
    border: none;
    padding: 0;
    font-size: 1.6rem;
    font-family: 'Alegreya', serif;
    font-weight: bold;
    color: #f8f7ff;
    text-shadow: 1px 1px 4px black;
    cursor: pointer;
    transition: color 0.3s ease;
}

.slider-button:hover {
    color: #847c40;
    text-shadow: 3px 3px 6px black;
}

/* Button Arrows 
.arrows {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 20;
}

.arrows button {
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    padding: 10px;
    border-radius: 50%;
    font-size: 1.5rem;
    color: #333;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.arrows button:hover {
    background-color: rgba(255, 255, 255, 0.9);
}

/* Thumbnail Styles 
.thumbnail {
    position: absolute;
    bottom: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 0 20px;
    z-index: 20;
    overflow-x: auto;
}

.thumbnail .item {
    width: 150px;
    height: 100px;
    filter: brightness(0.5);
    transition: filter 0.3s ease;
    cursor: pointer;
    flex-shrink: 0;
}

.thumbnail .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}

.thumbnail .item.active {
    filter: brightness(1.2);
}
*/