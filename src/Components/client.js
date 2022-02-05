import { createClient } from "contentful";

// Main configuration
const config = {
    spaceID: process.env.REACT_APP_SPACEID,
    deliveryToken: process.env.REACT_APP_DELIVERYTOKEN
  };
  
// Create client
const client = createClient({
space: config.spaceID,
accessToken: config.deliveryToken
});

export default client;