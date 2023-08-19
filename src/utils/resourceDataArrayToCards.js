  import React, { useEffect, useState } from "react";
  import { ResourceCard } from "../components/ResourceCard/ResourceCard";
  import { searchByLocation } from "./resourceSearches";
  import { userlocation } from "./userLocationUpdate";
  import { ScrollView, View, Text } from "react-native";
  
  //this will get the resources to be displayed
  async function dataSearching(
    resourceType = null,
    maxDistance = 1000,
    _fullPageServiceName = "",
    _navigation = "",
    latitude = 0,
    longitude = 0
  ) {
    //put it in a try block just in case
    try {
      const resource_array = await searchByLocation(
        latitude,
        longitude,
        maxDistance,
        resourceType
      );
      
      //catch an invalid array
      if (!Array.isArray(resource_array)) {
        console.log("Invalid resource array:", resource_array);
        return null;
      }
      
      //now map the array as cards
      const interpreted_resources = resource_array.map((resource) => {
        const { name, desc, score, location, image, rating, reviews, number } = resource;
        const resourceData = {
          name,
          desc,
          score,
          location,
          image,
          rating,
          reviews,
          number,
        };
        //create a card for one of the returned array items
        return (
          <ResourceCard
            key={resourceData.name}
            item={resourceData}
            navigation={_navigation}
            fullPageServiceName={_fullPageServiceName}
            hasEditButton={false}
          />
        );
      });

      //now return the cards  
      return interpreted_resources;
    } 
    //error catching
    catch (error) {
      console.log("Error while searching resources:", error);
      return null;
    }
  }
  
  export { dataSearching };
  