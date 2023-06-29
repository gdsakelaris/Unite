import React from 'react';
import {View} from 'react-native';
import { serviceFullPageDetail as styles } from '../css';
import ServiceOptionDetail from './ServiceOptionDetail';
import ServiceOption from './ServiceOption';
const ServiceDetail = ({detailOption, setdetailOption}) => (
  <View style={styles.serviceDetailStyle}>
      <View style={styles.servicesDetailInnerContainer}>
          <View style={styles.serviceDetailOptionContainer}>
              {/* About */}
              <ServiceOption title='About' setdetailOption={setdetailOption} detailOption={detailOption} index={0}/>
              {/* Hours */}
              <ServiceOption title='Hours' setdetailOption={setdetailOption} detailOption={detailOption} index={1}/>
               
               {/* Media */}
               <ServiceOption title='Media' setdetailOption={setdetailOption} detailOption={detailOption} index={2}/>
          </View>
          {detailOption && <ServiceOptionDetail detailOption={detailOption}/>}

      </View>
  </View>
)

export default ServiceDetail;