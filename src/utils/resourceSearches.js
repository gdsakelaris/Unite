import { Alert } from "react-native";
import { Location } from "expo-location"; // Import the Location object

//this will store the endpoint, whatever it winds up being
const endpointurl = "";

//here we will search by the user's location
const searchByLocation = async (latitude, longitude, maxDistance, kindOfResource) => {
  try {
    const queryParams = new URLSearchParams({
      userLatitude: latitude.toString(),
      userLongitude: longitude.toString(),
      maxDistance: maxDistance.toString(),
      kindofresource: kindOfResource,
    }).toString();

    //create a url endpoint
    const url = `${endpointurl}/resource/getResources/location?${queryParams}`;

    //await a response
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    //handle any errors
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    //once the response arrives, log it  and return it
    const data = await response.json();
    console.log(data);
    return data;
  } 
  //if there was an error, return null and alert that there was an err
  catch (error) {
    Alert.alert("Error", "Internal Server Error");
    console.log(error);
    return null;
  }
};

//this is intended to get a signle resource by the primary key
const getResourceByID = async (_resourceID) => {
  try {
    const queryParams = new URLSearchParams({
      resourceID: _resourceID.toString(),
    }).toString();

    //again, we create a url
    const url = `${endpointurl}/resource/getResources/getResourceByID?${queryParams}`;

    //then we use an await to get the response
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    //return if there's no error
    const data = await response.json();
    console.log(data);
    return data;
  } 
  //if theres an error, log it
  catch (error) {
    Alert.alert("Error", "Internal Server Error");
    console.log(error);
    return null;
  }
};

//export the functions
export { searchByLocation, getResourceByID }
