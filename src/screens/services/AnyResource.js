import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import ServiceContainer from "./subscreens/ServiceContainer";
import SortBtn from "./subscreens/SortBtn";
import { dataSearching } from "../../utils/resourceDataArrayToCards";
import * as Location from "expo-location"; 

const AnyResource = ({ navigation, route }) => {
  const { resourceName } = route.params;

  const [location, setLocation] = useState(null);

  // This will get the user's location from their mobile
  useEffect(() => {
    const fetchLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied.");
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      } catch (error) {
        console.log("Error getting location:", error);
      }
    };

    fetchLocation();
  }, []);

  let latitude = 0;
  let longitude = 0;

  if (location) {
    latitude = location?.latitude;
    longitude = location?.longitude;
  }

  // This will be where you need to make the SQL query
  const cards = dataSearching(
    resourceName,
    30000,
    resourceName,
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

export default AnyResource;
