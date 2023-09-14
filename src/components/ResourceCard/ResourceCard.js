/**
 * A reusable component to display a resource card for provided services.
 *
 * @component
 * @param {Object} resource - The resource data to populate the card.
 * @param {Object} navigation - The navigation object from React Navigation.
 * @param {boolean} hasEditButton - A flag indicating whether the card should have an edit button.
 * @returns {JSX.Element} - A resource card component.
 */


import React, {useState} from "react";
import ResourceCardContainer from "./resourceCardsubscreens/ResourceCardContainer";
import ResourceCardContactInfo from "./resourceCardsubscreens/ResourceCardContactInfo";
import ResourceCardContent from "./resourceCardsubscreens/ResourceCardContent";
import ResourceCardDescription from "./resourceCardsubscreens/ResourceCardDescription";
import ResourceCardImage from "./resourceCardsubscreens/ResourceCardImage";
import ResourceCardRatingAndReview from "./resourceCardsubscreens/ResourceCardRatingAndReview";
import ResourceCardTitle from "./resourceCardsubscreens/ResourceCardTitle";
import { useResourceContext } from "../../context/ResourceProvider";
import dummyImg from '../../images/Dummyresource.png'
import updateResourceWithClickedResource from "../../utils/updateResourceWithClickedResource";


const ResourceCard = ({ resource, navigation, hasEditButton}) => {
  // State to store the resourceId for bookmarking
  const [resourceId, setResourceId] = useState(resource.id) 
  const {dispatch} = useResourceContext()

  
  /**
   * For card, which have edit button
   * Callback function when the edit button is pressed.
   * Populates resource-state variables and navigates to the Describe Service page for editing.
   */
  const editButtonPress = () => {
    console.log(resource)
    console.log(resource.hours)
    // Populate resource-state variables with the clicked resource's information
    updateResourceWithClickedResource(dispatch, resource)

     // Navigate to the Describe Service page for updating the resource
    navigation.navigate('Describe Service', {title: 'Update your service', purpose: 'update', resourceId: resourceId})
    
  }

  return (
    <ResourceCardContainer>
      <ResourceCardContent>
        {/* Display resource title and navigate to the View Resource page */}
        <ResourceCardTitle title={resource.name} onPress={
          /**
           * send resource to view resource page to populate all the fields there 
           */
          () => navigation.navigate('ViewResource', {resource: resource})
          
        }
          />


        {/* Display rating and review (placeholder for now) */}
        <ResourceCardRatingAndReview rating={resource.rating} review={'0'}/>

         {/* Display resource description and contact information */}
        <ResourceCardDescription description={resource.description}/>
        <ResourceCardContactInfo location={resource.address}/>
        <ResourceCardContactInfo number={resource.phoneNumber}/>
      </ResourceCardContent>

      {/* Display resource image with optional edit button (using dummy image, not resource's images) */}
      <ResourceCardImage picture={dummyImg} editBtnFunction={editButtonPress} resourceId={resourceId} hasEditButton={hasEditButton}/>
    </ResourceCardContainer>

  ) 
};
  export default ResourceCard;