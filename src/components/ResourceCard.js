//this file will create a resource card component for every provided services
import React from "react";
import ResourceCardContainer from "./resourceCardsubscreens/ResourceCardContainer";
import ResourceCardContactInfo from "./resourceCardsubscreens/ResourceCardContactInfo";
import ResourceCardContent from "./resourceCardsubscreens/ResourceCardContent";
import ResourceCardDescription from "./resourceCardsubscreens/ResourceCardDescription";
import ResourceCardImage from "./resourceCardsubscreens/ResourceCardImage";
import ResourceCardRatingAndReview from "./resourceCardsubscreens/ResourceCardRatingAndReview";
import ResourceCardTitle from "./resourceCardsubscreens/ResourceCardTitle";
const ResourceCard = ({ item, navigation, fullPageServiceName, hasEditButton}) => {
  return (
    <ResourceCardContainer>
      <ResourceCardContent>
        <ResourceCardTitle title={item.name}/>
        <ResourceCardRatingAndReview rating={item.rating} review={item.reviews}/>
        <ResourceCardDescription description={item.desc}/>
        <ResourceCardContactInfo location={item.location}/>
        <ResourceCardContactInfo number={item.number}/>
      </ResourceCardContent>
      <ResourceCardImage picture={item.image} hasEditButton={hasEditButton}/>
    </ResourceCardContainer>

  ) 
};
  export default ResourceCard;