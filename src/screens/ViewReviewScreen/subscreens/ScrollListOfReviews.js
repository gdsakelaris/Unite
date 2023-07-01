import React from 'react';
import { View, ScrollView} from 'react-native';

const ScrollListOfReviews = ({children}) => (
  <View style={{flex: 3}}>
    <ScrollView>
      {children}
    </ScrollView>
  </View>
)
export default ScrollListOfReviews;