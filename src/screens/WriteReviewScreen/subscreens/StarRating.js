/**
 * Yash's code. Reach out to him for explanation about the code
 */

import React, { useState } from 'react';
import { View } from 'react-native';
import { starRating as styles } from '../css';
import Star from './Star';
const StarRating = () => {
  const [ratingNum, setRatingNum] = useState(0) //rating star
  const ratingScale = [1,2,3,4,5] //rating scale
  return (
    // list of rating stars container
    <View style={styles.starContainer}>
      {/* list of rating stars */}
      {ratingScale.map((position) => <Star rating={ratingNum} setRating={setRatingNum} starPosition={position
      } key={position.toString()}/>)}
    </View>
  );
}
export default StarRating;