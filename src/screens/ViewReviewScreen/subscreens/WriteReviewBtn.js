import React from 'react';
import { View} from 'react-native';
import { Button, Text} from 'react-native-paper';
import { btnSettings } from '../../volunteerScreens/ThirdStepScreen/submitBtnProp';
const WriteReviewBtn = () => (
  <View style={{flex: .5, justifyContent:'center', alignItems:'center'}}>
    <Button  {...btnSettings} style={{height:'50%', width:'70%', justifyContent:'center', alignItems:'center'}}>
        <Text style={{color: 'white', 
    fontSize: 20 , 
    fontWeight:'700' }}>Write a Review</Text>
    </Button>
  </View>
)
export default WriteReviewBtn;