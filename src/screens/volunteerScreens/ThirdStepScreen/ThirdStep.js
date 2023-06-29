import React from 'react';
import PreviewServiceContainer from './subscreens/PreviewServiceContainer';
import Title from './subscreens/Title';
import PublishedBtn from './subscreens/PublishedBtn';
import ServicesFullPage from '../../ServiceFullPageScreen/ServicesFullPage';

const ThirdStep = ({navigation}) => {
  return (
    <PreviewServiceContainer>
      <Title/>
      <ServicesFullPage/>
      <PublishedBtn navigation={navigation}/>
    </PreviewServiceContainer>
  )
}
export default ThirdStep;