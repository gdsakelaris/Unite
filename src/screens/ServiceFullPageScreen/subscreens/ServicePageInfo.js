//this file will make a view component that displays the resource's infos sunch as name, rating, reviews on the service full page screen. 
import React from 'react';
import { View} from 'react-native';
import { Text } from 'react-native-paper';
import { serviceFullPageInfo as styles } from '../css';
import { star, location } from '../icons';
const ServicePageInfo = () => (
  <View style={styles.serviceInfoStyle}>
      <View style={styles.infoStyle1}>
          <Text style={styles.serviceTitleStyle} >Anchor Church</Text>
          <Text>
            {star}
            <Text>3.0</Text> 
          </Text>
          <Text style={styles.numberOfReviewStyle}>6 Reviews</Text>  
      </View> 

      <View style={styles.infoStyle2}>
          {location}
          <Text>Austin, Texas</Text>
      </View>           
  </View>
)
export default ServicePageInfo;