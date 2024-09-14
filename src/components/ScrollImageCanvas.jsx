import React, { useEffect, useRef } from 'react';

const ScrollImageCanvas = ({ images }) => {
  const canvasRef = useRef(null);

  // Function to resize the canvas to the window size
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  // Function to render the current image
  const renderImage = (imageIndex) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const img = new Image();
    img.src = images[imageIndex];
    img.onload = () => {
      context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      context.drawImage(img, 0, 0, canvas.width, canvas.height); // Draw image
    };
  };

  // Function to handle scroll and update the image
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    const scrollFraction = scrollTop / scrollHeight;
    const imageIndex = Math.min(
      Math.floor(scrollFraction * (images.length - 1)),
      images.length - 1
    );

    renderImage(imageIndex);
  };

  // Hook to set up event listeners
  useEffect(() => {
    resizeCanvas(); // Initial resize

    window.addEventListener('resize', resizeCanvas); // Resize on window resize
    window.addEventListener('scroll', handleScroll); // Update image on scroll

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [images]); // Runs effect whenever `images` array changes

  return (
    <div>
  <div className="nav">
        <h3><b>CYBER</b>FICTION*</h3>
        <button>APRIL,2023</button>
    </div>
    <div className="main">
<div className="page">
    <div className="loop">
    <h1><b>CYBER</b>FICTION IS THE <b><i>REAL</i></b> <span>STORY</span> IN THE <span><i>METAVERSE.</i></span></h1>
                <h1><b>CYBER</b>FICTION IS THE <b><i>REAL</i></b> <span>STORY</span> IN THE <span><i>METAVERSE.</i></span></h1>
                <h1><b>CYBER</b>FICTION IS THE <b><i>REAL</i></b> <span>STORY</span> IN THE <span><i>METAVERSE.</i></span></h1>
    </div>
    <h3>CYBERFICTION AIMS TO BE A DECENTRALIZED COMMUNITY THAT CAN <br/> CREATE NEW VALUES AND PROFITS THROUGH PLAY IN THE VIRTUAL <br/> WORLD.</h3>
    <h4>...SCROLL TO READ</h4>
    <canvas
      ref={canvasRef}
      style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 9,
          pointerEvents: 'none', // Ensures it doesn't block user interactions
        }}
        />
        </div>
        <div className="page1">
            <div className="right-text">
                <h3>CYBERFICTION / KEY WORD</h3>
                <h1>HAVE FUN
                  <br/>
                    LET'S PLAY
                  <br/>
                    JUST BE TOGETHER</h1>
            </div>
            <div className="left-text">
                <h1>MAKE A STORY
                  <br/>
                    TAKE A CHANCE
                  <br/>
                    BUILD AND OWNED</h1>
                    <h3>..AND MAINTAIN GOOD HUMANITY</h3>
            </div>
        </div>
        <div className="page2">
            <div className="text1">
                <h3>CYBERFICTION / HAVE FUN</h3>
                <h1>LET'S
                  <br/>
                    HAVE FUN
                  <br/>
                    TOGETHER</h1>
            </div>
            <div className="text2">
                <p>LET'S HAVE A BLAST! LET'S JUST THROW AWAY AGE, GENDER, REGION, <br/> STATUS, ETC., DON'T COMPETE, DON'T FIGHT, COOPERATE AND SHARE <br/> WITH EACH OTHER AND ENJOY IT TOGETHER! SO THAT YOU CAN STAND <br/> THERE IN THE NOT-TOO-DISTANT FUTURE AND DREAM OF ANOTHER NEW <br/> FUTURE</p>
            </div>
        </div>
        <div className="page3">
            <div className="text3">
                <h3>CYBERFICTION / PLAYGROUND</h3>
                <h1>

CYBERFIELD
<br/>
IS OUR
<br/>
PLAYGROUND
                </h1>
               
            </div>
        </div>
        </div>
        </div>
  );
};

export default ScrollImageCanvas;
