//Third Step Screen. This is the screen that the user will see when they run the application
import React from 'react';
import PreviewServiceContainer from './subscreens/PreviewServiceContainer';
import { title as styles } from './css';
import PublishedBtn from './subscreens/PublishedBtn';
import ServicesFullPage from '../../ServiceFullPageScreen/ServicesFullPage';
import ScreenTitle from '../../../components/ScreenTitle';
import ProgressBar from '../../../components/ProgressBar';
import submitResource from '../../../utils/api/submitResource';
import updateResource from '../../../utils/updateResource';
const ThirdStep = ({navigation, route}) => {
  /**
   * if purpose is update, use updateResources(resource, userToken, resourceId) for onPress for PublishBtn
   * if purpose is create, use submitResource(resource)
   */
  const {purpose} = route.params
  return (
    <PreviewServiceContainer>
      {purpose === 'create' && <ProgressBar step={3}/>}
      <ScreenTitle titleMessage={'Preview'} style={styles.title}/>
      <ServicesFullPage/>
      <PublishedBtn onPress={() => {
        updateResources(resource, userToken, resourceId)
        submitResource(resource, userToken)
        //based on the value of purpose and use the correct function for Publish btn, whether update or publish resource
        console.log(purpose)
      }} />
    </PreviewServiceContainer>
  )
}
export default ThirdStep;