/**
 * @file ThirdStep.js
 * @description This file defines the third step screen where the user previews and publishes a service.
 * @param {Object} navigation - navigation object that allows user to move to different pages 
 * @param {Object} route - route object that allows ThirdStep screen to retrieve the params passed  from the screen that navigate to it 
 * @returns {JSX.Element} The third step screen component.
 */


import React from 'react';
import PreviewServiceContainer from './subscreens/PreviewServiceContainer';
import { title as styles } from './css';
import PublishedBtn from './subscreens/PublishedBtn';
import ServicesFullPage from '../../ServiceFullPageScreen/ServicesFullPage';
import ScreenTitle from '../../../components/ScreenTitle';
import ProgressBar from '../../../components/ProgressBar';
import submitResource from '../../../utils/api/submitResource';
import updateResource from '../../../utils/api/updateResource';
import { useResourceContext } from '../../../context/ResourceProvider';
import { useAuth } from '../../../context/AuthProvider';
const ThirdStep = ({navigation, route}) => {
  /**
   * Get resource state variable. This resource is an object, which contains all the informations that user entered for creating new resource or updating the existing resource
   * That's why, the ThirdStep screen need to retrieve the param 'purpose' that is passed from the screen that the user navigate from to determine whether the entered informations in resource-state variable is for creating new resource or updating existing resource
   */
  const {resource, dispatch} = useResourceContext()

  /**
   * if purpose is update, get resourceId from the route.params and use updateResources func for onPress for PublishBtn
   * if purpose is create, use submitResource func for onPress for PublishBtn
   */
  const {purpose} = route.params

  //get userToken to authenticate with the backend when creating resource or updaing resource 
  const { userToken} = useAuth()

  //In Ui of describe service page, we don't have a field to enter the email of resource. Consider mentioning this issue with the UI team so they can add the email field in the Describe Service page. Currently using the dummy email for resource
  const email = resource.email ? resource.email : resource.name + '@gmail.com'


  //Use the information from the resource-state variable to create a new object that will be sent as the body of the request to the backend. Later, consider changing the structure of the resource-state variable so that its format matches the format required by the backend. At that point, there is no need to generate a new object that corresponds to the required format for the body from the backend.
  const resourceInfo = {
    name: resource.name,
    kindofresource: resource.kindOfResource,
    email: email,
    address: resource.address,
    description: resource.description,
    phonenumber: resource.phoneNumber,
    website: resource.website,
    hours: {
      '1': {
        "opentime": resource.monday.openTime,
        "closetime": resource.monday.closeTime
      },
      '2': {
        "opentime": resource.tuesday.openTime,
        "closetime": resource.tuesday.closeTime
      },
      '3': {
        "opentime": resource.wednesday.openTime,
        "closetime": resource.wednesday.closeTime
      },
      '4': {
        "opentime": resource.thursday.openTime,
        "closetime": resource.thursday.closeTime
        
      },
      '5': {
        "opentime": resource.friday.openTime,
        "closetime": resource.friday.closeTime
      },
      '6': {
        "opentime": resource.saturday.openTime,
        "closetime": resource.saturday.closeTime
      },
      '7': {
        "opentime": resource.sunday.openTime,
        "closetime": resource.sunday.closeTime
      }
    }

  }
  return (
    <PreviewServiceContainer>
      {/* Display Progress bar when creating new resource */}
      {purpose === 'create' && <ProgressBar step={3}/>}

      {/* Title of the screen */}
      <ScreenTitle titleMessage={'Preview'} style={styles.title}/>

      {/* Currently ultilizing Service Full Page component to render a view that display resources' infos.
         
        When the user navigates from the "Describe Service" screen to this "ThirdStep" screen. The application experienced a crash due to a bug stemming from the fact of using the ServiceFullPage screen to render a view that display resources' info. Specifically, if go to "ServiceFullPage" screen, the "ServiceFullPage" screen attempted to get the resource parameters from route object, however, during the rendering of this component,there was no params 'resource' passed to "ServiceFullPage" screen, that's why making it unable to locate any passed parameters named 'resource'. 
         
         To fix this error, consider making a separate ServicesFullPage component that only display the entered infos for resource in the Describe Service Screen */}
      <ServicesFullPage/>

      {/* Published Button */}
      <PublishedBtn onPress={() => {
        
        // if updating existing resource
        if (purpose === 'update')
        {
          const {resourceId} = route.params
          updateResource(resourceInfo, userToken, resourceId, navigation, dispatch)
        }

        //if creating new resource
        else {
          submitResource(resourceInfo, userToken, navigation, dispatch)
        }
        //based on the value of purpose and use the correct function for Publish btn, whether update or publish resource

      }} />
    </PreviewServiceContainer>
  )
}
export default ThirdStep;