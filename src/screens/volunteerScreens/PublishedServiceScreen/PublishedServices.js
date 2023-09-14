/**
 * This component render a screen that display all the users'published resources 
 * @param {Object} navigation navigation object that allows user to move to different pages 
 */


import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import AddBtn from "./subscreens/AddBtn";
import PublishedServiceContainer from "./subscreens/PublishedServiceContainer";
import { title as styles } from "./css";
import ResourceCard from "../../../components/ResourceCard/ResourceCard";
import ScreenTitle from "../../../components/ScreenTitle";
import { useAuth } from "../../../context/AuthProvider";
import getPublishedResources from "../../../utils/api/getPublishedResources";

const PublishedServices = ({navigation}) => {
  //A state variable that stores all the publised resources retrieved from the backend 
  const [publishedResource, setPublishedResources] = useState([])

  //Get userToken to authenticate with the backend when sendinng request to retrieve published resources
  const {userToken} = useAuth()

  //Send request to backend to retrieve all the published resources
  //Run after the components in this screen are rendered and when the navigation change
  useEffect(() => {
    getPublishedResources(userToken, setPublishedResources)
  }, [navigation])

  return (
    <PublishedServiceContainer>
      {/* Title of the screen */}
      <ScreenTitle titleMessage={'My Published Service'} style={styles.title}/>

      {/* Scrollable list */}
      <ScrollView>

        {/* Map through an array of published resources and make a ResourceCard component for each */}
        {publishedResource.map((resource, i) => <ResourceCard resource={resource} navigation={navigation} key={i.toString()} hasEditButton={true}/>)} 
        
      </ScrollView>

      {/* Add Button. Navigate user to Get Started screen to let them start creating resource */}
      <AddBtn navigation={navigation}/>
    </PublishedServiceContainer>
  );
};



export default PublishedServices;
