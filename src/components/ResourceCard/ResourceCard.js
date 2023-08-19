//this file will create a resource card component for every provided services
import React from "react";
import ResourceCardContainer from "./resourceCardsubscreens/ResourceCardContainer";
import ResourceCardContactInfo from "./resourceCardsubscreens/ResourceCardContactInfo";
import ResourceCardContent from "./resourceCardsubscreens/ResourceCardContent";
import ResourceCardDescription from "./resourceCardsubscreens/ResourceCardDescription";
import ResourceCardImage from "./resourceCardsubscreens/ResourceCardImage";
import ResourceCardRatingAndReview from "./resourceCardsubscreens/ResourceCardRatingAndReview";
import ResourceCardTitle from "./resourceCardsubscreens/ResourceCardTitle";

/**
 @resource - an object - {
                                “name”: “example name”,
                                “kindofresource”: “example kind”,
                                “email”: “example@gmail.com”,
                                “address”: “123 main street, new york city, NY 101010”,
                                “description”: “example description”
                                “phonenumber”: “14087777777”,  // not required
                                “website”: “www.example.com”,   // not required
                                “publishedby: “userid”
                                “hours”: {
                                        1: {	//Monday
                                              “opentime”: “8:00”  // string type
                                              “closetime”: “8:00”  // string type
                                            },
                                              … include for all 7 days
                                  }

                          }
  @navigation - navigation object
  @ediBtnFunction - function for the edit btn if resource has edit btn
 */
const ResourceCard = ({ resource, navigation, editBtnFunction}) => {
  //make a variable to store resourceId for sending to the bookmark route
  const [resourceId, setResourceId] = useState('1') //resource id 
  return (
    <ResourceCardContainer>
      <ResourceCardContent>
        <ResourceCardTitle title={resource.name} onPress={
          /**
           * send resource to view resource page to populate all the fields there 
           */
          () => navigation.navigate('View Resource', {params: resource})
          
        }
          />
        <ResourceCardRatingAndReview rating={resource.rating} review={resource.reviews} onPress={() => navigation.navigate('Review')}/>
        <ResourceCardDescription description={resource.desc}/>
        <ResourceCardContactInfo location={resource.location}/>
        <ResourceCardContactInfo number={resource.number}/>
      </ResourceCardContent>
      <ResourceCardImage picture={resource.image} editBtnFunction={editBtnFunction} resourceId={resourceId}/>
    </ResourceCardContainer>

  ) 
};
  export default ResourceCard;