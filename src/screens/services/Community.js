//a screen which displays the community resources
import React from "react";
import { ScrollView} from "react-native";
import ResourceCard from "../../components/ResourceCard/ResourceCard";
import ServiceContainer from "./subscreens/ServiceContainer";
import SortBtn from "./subscreens/SortBtn";
import { resourceData } from "./mockupData";
const Community = ({navigation}) => (
    <ServiceContainer>
        <SortBtn/>
        <ScrollView>
            {/* mockup resources */}
            <ResourceCard item={resourceData} navigation={navigation} fullPageServiceName={'CommunityService'} hasEditButton={false}/>
            <ResourceCard item={resourceData} navigation={navigation} fullPageServiceName={'CommunityService'} hasEditButton={false}/>
            <ResourceCard item={resourceData} navigation={navigation} fullPageServiceName={'CommunityService'} hasEditButton={false}/>
            <ResourceCard item={resourceData} navigation={navigation} fullPageServiceName={'CommunityService'} hasEditButton={false}/>
        </ScrollView>
    </ServiceContainer>

)
export default Community;
