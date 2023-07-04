//a screen which displays the food resources resources
import React from "react";
import { ScrollView} from "react-native";
import ResourceCard from "../../components/ResourceCard";
import ServiceContainer from "./subscreens/ServiceContainer";
import SortBtn from "./subscreens/SortBtn";
import { resourceData } from "./mockupData";
const FoodResources = ({navigation}) => (
    <ServiceContainer>
        <SortBtn/>
        <ScrollView>
            {/* mockup resources */}
            <ResourceCard item={resourceData} navigation={navigation} fullPageServiceName={'FoodResourceService'} hasEditButton={false}/>
            <ResourceCard item={resourceData} navigation={navigation} fullPageServiceName={'FoodResourceService'} hasEditButton={false}/>
            <ResourceCard item={resourceData} navigation={navigation} fullPageServiceName={'FoodResourceService'} hasEditButton={false}/>
            <ResourceCard item={resourceData} navigation={navigation} fullPageServiceName={'FoodResourceService'} hasEditButton={false}/>
        </ScrollView>
    </ServiceContainer>

)
export default FoodResources;