import React from 'react';
import PickLanguageBtn from './subscreens/PickLanguageBtn';
import PickLanguageContainer from './subscreens/PickLanguageContainer';
import SupportedLangsView from './subscreens/SupportedLangsView';
import Title from './subscreens/Title';
const PickLanguages = () => {
  return (
    <PickLanguageContainer>
      {/* Title */}
      <Title/>
      {/* Supported Languages View */}
      <SupportedLangsView/>
      {/* Button */}
      <PickLanguageBtn/>
    </PickLanguageContainer>
   
  );
}
export default PickLanguages;