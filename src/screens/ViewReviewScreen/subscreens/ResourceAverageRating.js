import React from 'react';
import { View} from 'react-native';
import { Text } from 'react-native-paper';
import RatingStar from './RatingStar';
const ResourceAverageRating = ({rating}) => {
  const star = Array.from({length: 5})
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text variant='displayLarge'>3.0</Text>
        <View style={{flexDirection:'row'}}>
            {star.map((_, i) => <RatingStar rating={3} i={parseInt(i)} key={i.toString()}/>)}
        </View>
        <Text variant='labelSmall' style={{fontWeight:'300'}}>based on 6 reviews</Text>
    </View>
  )
}
export default ResourceAverageRating;