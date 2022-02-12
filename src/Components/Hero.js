import React, { useState, useEffect} from "react"
// import { createClient } from "contentful";
import client from "../Components/client"
// Main configuration
// const config = {
//   spaceID: process.env.REACT_APP_SPACEID,
//   deliveryToken: process.env.REACT_APP_DELIVERYTOKEN
// };

export const getHeros = () => {
  // Retrieve all entries of a space
  return client.getEntries({
    content_type: "hero",
    order: "-sys.createdAt"
    // Order entries by date ascending (-)
  });
};
  
const Hero = () => {
    const [heroScene, setHeroScene] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

      const getHeroScenes = async () => {
        try {
          const res = await getHeros()
          const items = res.items
          const slides = items.map((h) => {
            return {
              ...h,
              image: h?.fields?.heroimage?.fields.file.url,
              heading: h?.fields?.title
            }
          })
          setHeroScene(slides[0])
          console.log(slides)
        } catch (err) {
          console.log(err)
        }};
        getHeroScenes() 
      } 
      , []);
      
      useEffect(() => {
        if(heroScene?.image) return setIsLoading(false);
        console.log(heroScene.image)
      }, [heroScene]);
    
  return (
    <header className="hero" style={{marginBottom: '1em'}}>
      <img src={heroScene.image} alt="" loading="lazy"/>
      <h2 className="hero__heading">{heroScene.heading}</h2>
      {/* {heroScene.map((h) => (
        <>
          <img src={h.image} alt="hero"/>
          <h2 className="hero__heading"><span>{h.heading}</span></h2>
        </>
      )) */}
    </header>
  );
};

export default Hero;