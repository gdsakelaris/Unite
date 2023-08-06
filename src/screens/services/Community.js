import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import ServiceContainer from "./subscreens/ServiceContainer";
import SortBtn from "./subscreens/SortBtn";
import { dataSearching } from "../../utils/resourceDataArrayToCards";
import * as Location from "expo-location"; 

const Community = ({ navigation }) => {
  const [location, setLocation] = useState(null);

//this will get the user's location from their mobile
//this doesn't need to change
  useEffect(() => {
    const fetchLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied.");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    };

    fetchLocation();
  }, []);
    
  

  let latitude = 0;
  let longitude = 0;

  if (location) {
    latitude = location.latitude;
    longitude = location.longitude;
  }

  //this will be where you need to make the sql query

  const cards = dataSearching(
    "CommunityService",
    30000,
    "CommunityService",
    navigation,
    latitude,
    longitude // Pass the latitude and longitude values to dataSearching function
  );

  return (
    <ServiceContainer>
      <SortBtn />
      <ScrollView>{cards}</ScrollView>
    </ServiceContainer>
  );
};

export default Community;
