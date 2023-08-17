//this file will create a resource card component for every provided services
import React from "react";
import ResourceCardContainer from "./resourceCardsubscreens/ResourceCardContainer";
import ResourceCardContactInfo from "./resourceCardsubscreens/ResourceCardContactInfo";
import ResourceCardContent from "./resourceCardsubscreens/ResourceCardContent";
import ResourceCardDescription from "./resourceCardsubscreens/ResourceCardDescription";
import ResourceCardImage from "./resourceCardsubscreens/ResourceCardImage";
import ResourceCardRatingAndReview from "./resourceCardsubscreens/ResourceCardRatingAndReview";
import ResourceCardTitle from "./resourceCardsubscreens/ResourceCardTitle";
const ResourceCard = ({ item, navigation, fullPageServiceName, editBtnFunction}) => {
  return (
    <ResourceCardContainer>
      <ResourceCardContent>
        <ResourceCardTitle title={item.name} onPress={() => navigation.navigate(fullPageServiceName)}/>
        <ResourceCardRatingAndReview rating={item.rating} review={item.reviews} onPress={() => navigation.navigate('Review')}/>
        <ResourceCardDescription description={item.desc}/>
        <ResourceCardContactInfo location={item.location}/>
        <ResourceCardContactInfo number={item.number}/>
      </ResourceCardContent>
      <ResourceCardImage picture={item.image} editBtnFunction={editBtnFunction}/>
    </ResourceCardContainer>

  ) 
};
  export default ResourceCard;