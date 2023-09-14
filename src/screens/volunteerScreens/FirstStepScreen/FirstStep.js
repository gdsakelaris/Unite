/**
 * @file FirstStep.js
 * @description This file defines the first step screen where the user selects the kind of service for their resource.
 * @param {Object} navigation - navigation object that allows user to move to different screen.
 * @returns {JSX.Element} The first step screen component.
 */


import React, {useState} from "react";
import FirstStepScreenContainer from "./subscreens/FirstStepScreenContainer";
import ListOfProvidedServices from "./subscreens/ListOfProvidedServices";
//use the next btn component created for the Describe Service screen
import NextBtn from "../../DescribeServiceScreen/subscreens/NextBtn";
import ScreenTitle from "../../../components/ScreenTitle";
import { title as styles } from "./css";
import { ScrollView, View, Text } from "react-native"; // Import ScrollView
import ProgressBar from "../../../components/ProgressBar";


const FirstStep = ({navigation}) => {

   // State to track the selected service
  const [selectedService, setSelectedService] = useState(null);


  return (
  <FirstStepScreenContainer>
    {/* Progress bar indicating the step */}
    <ProgressBar step={1}/>

    {/* Title of the screen  */}
    <ScreenTitle titleMessage={'Select a category for your service'} style={styles.title}/>

    {/* List of provided service cards (kind of resource) that users can select for their resource */}
    <ListOfProvidedServices selectedService={selectedService} setSelectedService={setSelectedService}/>

    {/* Next button */}
    <NextBtn onPress={() => {
      //check if users have selected the kind of service. Pass the some params to the Describe your service screen. The reason is when user update resource, they also go to the Describe your service screen to update resource. So we need to pass some params to the Describe your service screen that help it know the purpose of the user when they come to it (whether user want to use Describe your Service screen to create resource or update resource) in order to perform the correct action (such as calling submitResorce function or updateResource function)
      if (selectedService) {
              navigation.navigate('Describe Service', {title: 'Describe your service',purpose: 'create'})
          }
      //if users haven't selected any service cards and click next
      else {
        alert('Please select service card')
      }
    }
  }
    />
  </FirstStepScreenContainer>
  )
};


export default FirstStep;
