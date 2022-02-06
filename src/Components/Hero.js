import React, { useState, useEffect} from "react"
// import { createClient } from "contentful";
import client from "../Components/client"
// Main configuration
// const config = {
//   spaceID: process.env.REACT_APP_SPACEID,
//   deliveryToken: process.env.REACT_APP_DELIVERYTOKEN
// };

// // Create client
// const client = createClient({
//   space: config.spaceID,
//   accessToken: config.deliveryToken
// });
  
export const getHeros = () => {
  // Retrieve all entries of a space
  return client.getEntries({
    content_type: "hero",
    order: "sys.createdAt"
    // Order entries by date desc
  });
};

const Hero = () => {
    const [heroScene, setHeroScene] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getHeros()
        .then((res) => {
          const items = res.items
          const slides = items.map((h) => {
            return {
              ...h,
              image: h.fields.heroimage.fields.file.url,
              heading: h.fields.title
            }
          })
          setHeroScene(slides)
        });
      }, []);
    
      useEffect(() => {
        if(heroScene.length) return setIsLoading(false);
      }, [heroScene]);

  return (
    <header className="hero" style={{marginBottom: '1em'}}>
    <img src={heroScene[0].image} alt="gasdf" />
    <h2 className="hero__heading">{heroScene[0].heading}</h2>
      {/* {heroScene.map((h) => (
        <>
          <img src={h.image} alt="hero"/>
          <h2 className="hero__heading"><span>{h.heading}</span></h2>
        </>
      ))} */}
    </header>
  );
};

export default Hero;