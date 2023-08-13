//this file will render the media section for the describeService page
import React from 'react';
import MediaContentContainer from './mediaSubscreens/MediaContentContainer';
import SectionContainer from './SectionContainer';
import SectionTitle from './SectionTitle';
import InputFieldForMedia from './mediaSubscreens/InputFieldForMedia';
import { media as styles } from '../css';
import { useResourceContext } from '../../../context/ResourceProvider';
import { resourceActions } from '../../../context/resourceTemplate';
const MediaSection = () => {
  const {resource, dispatch} = useResourceContext()
  return (
    <SectionContainer style={styles.mediaSection}>
      <SectionTitle title={'3 Media'}/>
      <MediaContentContainer>
        <InputFieldForMedia mediaicon={'globe-sharp'} placeholder={'www.https://myweb'} value={resource.website} onChangeText={(newText) => {
        dispatch(resourceActions.create({website: newText}))
        console.log(resource)
        }} />
        <InputFieldForMedia mediaicon={'phone'} placeholder={'777-777-7777'} value={resource.phoneNumber} onChangeText={(newText) => {
        dispatch(resourceActions.create({phoneNumber: newText}))
        console.log(resource)
        }}/>
      </MediaContentContainer>
    </SectionContainer>
  );
}
export default MediaSection;