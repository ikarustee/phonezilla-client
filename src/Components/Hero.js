import React, { useState, useEffect } from "react";

const Hero = () => {
  const [heroScene, setHeroScene] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const URL = `${process.env.REACT_APP_HOST}/hero`;

  const url = `${process.env.REACT_APP_HOST}/images`;

  useEffect(() => {
    async function hero() {
      try {
        const response = await fetch(URL);
        const jsonData = await response.json();
        setHeroScene(jsonData[0]);
        console.log(jsonData[0]);
      } catch (err) {
        console.log(err);
      }
    }
    hero();

    if (heroScene?.img) return setIsLoading(false);
  }, [heroScene]);

  return (
    <header className="hero" style={{ marginBottom: "1em" }}>
      <img src={`${url}/${heroScene.img}`} alt="" loading="lazy" />
      <h2 className="hero__heading">{heroScene.heading}</h2>
    </header>
  );
};

export default Hero;
