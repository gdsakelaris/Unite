//this file will make the lower part of the service full page, which includes the about, media, hours section 
import React from 'react';
import {View} from 'react-native';
import { serviceFullPageDetail as styles } from '../css';
import ServiceOptionDetail from './ServiceOptionDetail';
import ServiceOption from './ServiceOption';
const ServiceDetail = ({detailOption, setdetailOption}) => (
  //outter container
  <View style={styles.serviceDetailStyle}>
      {/* inner container */}
      <View style={styles.servicesDetailInnerContainer}>
            {/*section container  */}
          <View style={styles.serviceDetailOptionContainer}>
              {/* About Section*/}
              <ServiceOption title='About' setdetailOption={setdetailOption} detailOption={detailOption} index={0}/> 
              {/* Hours Section */}
              <ServiceOption title='Hours' setdetailOption={setdetailOption} detailOption={detailOption} index={1}/>
               
               {/* Media Section */}
               <ServiceOption title='Media' setdetailOption={setdetailOption} detailOption={detailOption} index={2}/>
          </View>
          {/* expanded view for the detail of one of the sections above */}
          {detailOption && <ServiceOptionDetail detailOption={detailOption}/>}
      </View>
  </View>
)
export default ServiceDetail;