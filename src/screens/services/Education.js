//a screen which displays the education resources
import React from "react";
import { ScrollView} from "react-native";
import ResourceCard from "../../components/ResourceCard/ResourceCard";
import ServiceContainer from "./subscreens/ServiceContainer";
import SortBtn from "./subscreens/SortBtn";
import { resourceData } from "./mockupData";
const Education = ({navigation}) => (
    <ServiceContainer>
        <SortBtn/>
        <ScrollView>
            {/* mockup resources */}
            <ResourceCard item={resourceData} navigation={navigation} fullPageServiceName={'EducationService'} hasEditButton={false}/>
            <ResourceCard item={resourceData} navigation={navigation} fullPageServiceName={'EducationService'} hasEditButton={false}/>
            <ResourceCard item={resourceData} navigation={navigation} fullPageServiceName={'EducationService'} hasEditButton={false}/>
            <ResourceCard item={resourceData} navigation={navigation} fullPageServiceName={'EducationService'} hasEditButton={false}/>
        </ScrollView>
    </ServiceContainer>

)
export default Education;
