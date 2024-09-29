import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [offsetY, setOffsetY] = useState(0);

  // Use requestAnimationFrame for smoother animations
  const handleScroll = () => {
    // Use requestAnimationFrame for better performance
    window.requestAnimationFrame(() => {
      setOffsetY(window.pageYOffset);
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Parallax Section */}
      <div className="parallax-container">
        <div
          className="background"
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        ></div>
        <div
          className="foreground"
          style={{ transform: `translateY(${offsetY * 0.3}px)` }}
        ></div>
        <div
          className="character"
          style={{ transform: `translateY(${offsetY * 0.1}px)` }}
        ></div>

        <div className="text-overlay">
          <h1>Panda Tales</h1>
        </div>
        <div className="text-overlay download-section">
          <h2>Download the game</h2>
          <div className="buttons">
            <button className="ios-btn">Download on iOS (coming soon)</button>
            <a
              className="android-btn"
              href="https://expo.dev/artifacts/eas/qBUkUpT5mpLbqmi7gjA5J9.apk"
            >
              Download on Android
            </a>
          </div>
        </div>

        <div className="text-overlay about-section">
          <h2>About the Game</h2>
          <p>
            Embark on a journey with Bao, the brave panda, and unlock hidden
            stories! Every choice you make determines the fate of the tale —
            will you reach a good end, or will the story take a darker turn?
          </p>
          <div className="screenshot-carousel">
            <h3>Game Screenshots</h3>
            <div className="carousel">
              {/* Add screenshots */}
              <img src={`${require(`./ss1.jpg`)}`} alt="Screenshot 1" />
              <img src={`${require(`./ss2.jpg`)}`} alt="Screenshot 1" />
              {/* Add more screenshots as needed */}
            </div>
          </div>
          <p className="credits">
            © Developed by Jessica. <br /> Reach out to me at
            pandadevline@gmail.com <br />
            Thank you for playing my game.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
