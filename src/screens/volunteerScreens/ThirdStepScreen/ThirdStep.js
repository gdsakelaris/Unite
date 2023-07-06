//Third Step Screen. This is the screen that the user will see when they run the application
import React from 'react';
import PreviewServiceContainer from './subscreens/PreviewServiceContainer';
import { title as styles } from './css';
import PublishedBtn from './subscreens/PublishedBtn';
import ServicesFullPage from '../../ServiceFullPageScreen/ServicesFullPage';
import ScreenTitle from '../../../components/ScreenTitle';
const ThirdStep = ({navigation}) => {
  return (
    <PreviewServiceContainer>
      <ScreenTitle titleMessage={'Preview'} style={styles.title}/>
      <ServicesFullPage/>
      <PublishedBtn navigation={navigation}/>
    </PreviewServiceContainer>
  )
}
export default ThirdStep;