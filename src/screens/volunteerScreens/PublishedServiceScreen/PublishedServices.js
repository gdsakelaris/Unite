//Published Service screen. This is the screen that the user will see when they run the application
import React from "react";
import { ScrollView } from "react-native";
import AddBtn from "./subscreens/AddBtn";
import PublishedServiceContainer from "./subscreens/PublishedServiceContainer";
import { title as styles } from "./css";
import { mockupdata } from "./mockupdata";
import ResourceCard from "../../../components/ResourceCard/ResourceCard";
import ScreenTitle from "../../../components/ScreenTitle";
const PublishedServices = ({navigation}) => {
  return (
    <PublishedServiceContainer>
      <ScreenTitle titleMessage={'My Published Service'} style={styles.title}/>
      <ScrollView>
        <ResourceCard item={mockupdata} editBtnFunction={() => {
          //navigate to describe service page
          //call function to populate resource-state variable 
          navigation.navigate('Describe Service', {title: 'Update your service', purpose: 'update'})
        }}/>
        <ResourceCard item={mockupdata} editBtnFunction/>
        <ResourceCard item={mockupdata} editBtnFunction/>
      </ScrollView>
      <AddBtn navigation={navigation}/>
    </PublishedServiceContainer>
  );
};



export default PublishedServices;
