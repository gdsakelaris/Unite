//this file will render the media section for the describeService page
import React from 'react';
import MediaContentContainer from './mediaSubscreens/MediaContentContainer';
import SectionContainer from './SectionContainer';
import SectionTitle from './SectionTitle';
import InputFieldForMedia from './mediaSubscreens/InputFieldForMedia';
import { media as styles } from '../css';
const MediaSection = () => {
  return (
    <SectionContainer style={styles.mediaSection}>
      <SectionTitle title={'3 Media'}/>
      <MediaContentContainer>
        <InputFieldForMedia mediaicon={'globe-sharp'} placeholder={'www.https://myweb'}/>
        <InputFieldForMedia mediaicon={'phone'} placeholder={'777-777-7777'}/>
      </MediaContentContainer>
    </SectionContainer>
  );
}
export default MediaSection;