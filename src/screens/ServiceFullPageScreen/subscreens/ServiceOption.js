//this file will make a component that renders a single section for About, Hour or Media 
import React from 'react';
import { View, Pressable} from 'react-native';
import { Text } from 'react-native-paper';
import { serviceOption as styles } from '../css';
import listOfProvidedSection from '../listOfProvidedServiceDetail'
//this component will take a title prop, which stands for the title of section, 
//setdetailOption, detailOption, and index props, which helps in the implementation of the logic for rendering the detailed view of the section that has been clicked on the service full page screen
const ServiceOption = ({title, setdetailOption, detailOption, index}) => (
  <View style={[styles.serviceDetailOptionStyle, {borderBottomWidth: detailOption === index && 4}]}>
      {/* when the user clicks on the section, we will render the detail page for the clicked section */}
      <Pressable onPress={() => setdetailOption(index)}> 
        <Text style={styles.serviceDetailOptionTextStyle}>{title}</Text>
      </Pressable>
  </View>
  )

export default ServiceOption;