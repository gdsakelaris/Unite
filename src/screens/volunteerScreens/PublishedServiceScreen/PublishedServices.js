//Published Service screen. This is the screen that the user will see when they run the application
import React, { useState } from "react";
import { ScrollView } from "react-native";
import AddBtn from "./subscreens/AddBtn";
import PublishedServiceContainer from "./subscreens/PublishedServiceContainer";
import { title as styles } from "./css";
import { mockupdata } from "./mockupdata";
import ResourceCard from "../../../components/ResourceCard/ResourceCard";
import ScreenTitle from "../../../components/ScreenTitle";

const PublishedServices = ({navigation}) => {
  //the variable that stores all the published resources
  const [publishedResource, setPublishedResources] = useState([])
  /**
   * useEffect(() => {
   *  setIsLoading(true) - start loading state
   *  getPublishedResources(userToken) - get all the published resources - return an array of published resource
   *  setPublishedResources(...)
   *  setIsLoading(false) - end loading state
   * 
   * })
   */

  return (
    <PublishedServiceContainer>
      <ScreenTitle titleMessage={'My Published Service'} style={styles.title}/>
      <ScrollView>
        <ResourceCard resource={mockupdata} editBtnFunction={() => {
          /**
           * when edit btn is pressed, populate all fields in resource-state variable 
           * move to Desribe Servie page, and send necessary data to the 'Update your service' screen
           */
          navigation.navigate('Describe Service', {title: 'Update your service', purpose: 'update', resourceId: '...'})
        }} navigation={navigation}/>
        <ResourceCard resource={mockupdata} editBtnFunction navigation={navigation}/>
        <ResourceCard resource={mockupdata} editBtnFunction navigation={navigation}/>
      </ScrollView>
      <AddBtn navigation={navigation}/>
    </PublishedServiceContainer>
  );
};

export default PublishedServices;
