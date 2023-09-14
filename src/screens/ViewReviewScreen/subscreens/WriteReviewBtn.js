/**
 * @file WriteReviewBtn.js
 * @description This file makes a "Write Review" button for the review screen.
 * @param {Object} props - The props that are passed to the component.
 * @returns {JSX.Element} A "Write Review" button component.
 */

import React from 'react';
import { View} from 'react-native';
import { Button, Text} from 'react-native-paper'; //Use button and text components from react native paper because it provide a prop that can change the color of component to dark mode
import { btnSettings } from '../../volunteerScreens/ThirdStepScreen/submitBtnProp'; // an object that contains props to make Button component from react native paper
import { writeReviewBtn as styles } from '../css';
const WriteReviewBtn = ({onPress}) => (
  <View style={styles.container}>
    <Button  {...btnSettings} style={styles.btnView} onPress={onPress}>
        <Text style={styles.btnText}>Write a Review</Text>
    </Button>
  </View>
)
export default WriteReviewBtn;