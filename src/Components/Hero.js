import React, { useState, useEffect} from "react"
import client from "../Components/client"

export const getHeros = () => {

  return client.getEntries({
    content_type: "hero",
    order: "-sys.createdAt"
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
    </header>
  );
};

export default Hero;