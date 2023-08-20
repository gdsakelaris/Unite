import React, { useEffect, useState } from "react";
import { ResourceCard } from "../components/ResourceCard/ResourceCard";
import { searchByLocation } from "../utils/searchResources";
import { userlocation } from "./userLocationUpdate";
import { ScrollView, View, Text } from "react-native";

function dataSearching(
  resourceType = null,
  maxDistance = 1000,
  _fullPageServiceName = "",
  _navigation = "",
  latitude = 0,
  longitude = 0
) {
  const resource_array = searchByLocation(
    latitude,
    longitude,
    maxDistance,
    resourceType
  );

  // // Check if resource_array is valid before mapping
  // if (!Array.isArray(resource_array)) {
  //   console.log("Invalid resource array:", resource_array);
  //   return null; // Return null or an empty array based on your requirement
  // }

  if(resource_array == undefined){return null}

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
    console.log("///////////////////////////////////////");
    console.log("///////////////////////////////////////");
    console.log("///////////////////////////////////////");
    console.log("///////////////////////////////////////");
    console.log("resourceData:", interpreted_resources);

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

  return interpreted_resources;
}

export { dataSearching };
