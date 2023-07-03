import React from "react";
import { ScrollView } from "react-native";
import AddBtn from "./subscreens/AddBtn";
import PublishedServiceContainer from "./subscreens/PublishedServiceContainer";
import Title from "./subscreens/Title";
import { mockupdata } from "./mockupdata";
import ResourceCard from "../../../components/ResourceCard/ResourceCard";
const PublishedServices = ({navigation}) => {
  return (
    <PublishedServiceContainer>
      <Title title={'My Published Service'}/>
      <ScrollView>
        <ResourceCard item={mockupdata} hasEditButton={true}/>
        <ResourceCard item={mockupdata} hasEditButton={true}/>
        <ResourceCard item={mockupdata} hasEditButton={true}/>
      </ScrollView>
      <AddBtn navigation={navigation}/>
    </PublishedServiceContainer>
  );
};



export default PublishedServices;
