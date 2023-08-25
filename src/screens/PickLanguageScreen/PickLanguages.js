/**
 * @file PickLanguages.js
 * @description This file contains a component for picking supported languages.
 */

import React from 'react';
import PickLanguageBtn from './subscreens/PickLanguageBtn';
import PickLanguageContainer from './subscreens/PickLanguageContainer';
import SupportedLangsView from './subscreens/SupportedLangsView';
import Title from './subscreens/Title';

/**
 * Component for picking supported languages.
 *
 * @component
 * @param {object} navigation - Navigation object for navigating to other screens.
 * @returns {JSX.Element} - A JSX element representing the PickLanguages component.
 */
const PickLanguages = ({navigation}) => {
  return (
    <PickLanguageContainer>
      {/* Title */}
      <Title/>
      {/* Supported Languages View */}
      <SupportedLangsView navigation={navigation}/>
      {/* Button */}
      <PickLanguageBtn navigation={navigation}/>
    </PickLanguageContainer>
   
  );
}
export default PickLanguages;