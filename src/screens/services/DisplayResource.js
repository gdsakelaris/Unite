/**
 * A Page that displays all the resources from the service card 
 */
import React, {useEffect, useState} from "react";
import { ScrollView} from "react-native";
import ResourceCard from "../../components/ResourceCard/ResourceCard";
import ServiceContainer from "./subscreens/ServiceContainer";
import SortBtn from "./subscreens/SortBtn";
import { resourceData } from "./mockupData";
import Header from "../../navigations/Header";

/**
 * 
 * @param navigation: A navigation object that utilized to modify the header title of this page to correspond with the selected service kind, and it facilitates navigation to other screens.
 * @param route: an object that used to get the headerTitle. This title will not only be used to set for the header of this page, but also use as the data that send to the backend to queries for all resources with the kind 
 * @returns 
 */
function DisplayResource({navigation, route}) {
  //a state variable that used to store the array of resources returned from the backend
  const [resources, setResources] = useState([])
  useEffect(() => {
    const headerTitle = route.params.title
    navigation.setOptions({
      header: () => (
        <Header navigation={navigation} title={headerTitle}/>
      )
    })

    /**
     * setIsLoading(true) //display the loading state while sending request to backend
     * const fetchedResources = getResources(kindofresource) => if no error, it would return an array of resources
     * setResources(fetchedResources)
     * setIsLoading(false)
     */

  }, [navigation])
  
  return (
    <ServiceContainer>
    <SortBtn/>
    <ScrollView>
        {/* mockup resources 
            Use map to display all the resources in the resource variable
            */}
        <ResourceCard resource={resourceData} navigation={navigation}/>
        <ResourceCard resource={resourceData} navigation={navigation} />
        <ResourceCard resource={resourceData} navigation={navigation} />
        <ResourceCard resource={resourceData} navigation={navigation} />
    </ScrollView>
</ServiceContainer>
  );
}

export default DisplayResource;