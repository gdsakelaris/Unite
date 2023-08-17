//Third Step Screen. This is the screen that the user will see when they run the application
import React from 'react';
import PreviewServiceContainer from './subscreens/PreviewServiceContainer';
import { title as styles } from './css';
import PublishedBtn from './subscreens/PublishedBtn';
import ServicesFullPage from '../../ServiceFullPageScreen/ServicesFullPage';
import ScreenTitle from '../../../components/ScreenTitle';
const ThirdStep = ({navigation, route}) => {
  const {purpose} = route.params
  return (
    <PreviewServiceContainer>
      <ScreenTitle titleMessage={'Preview'} style={styles.title}/>
      <ServicesFullPage/>
      <PublishedBtn onPress={() => {
        //based on the value of purpose and use the correct function for Publish btn, whether update or publish resource
        console.log(purpose)
      }} />
    </PreviewServiceContainer>
  )
}
export default ThirdStep;