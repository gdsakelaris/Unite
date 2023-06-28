import React, { useState } from 'react';
import { View } from 'react-native';
import { starRating as styles } from '../css';
import Star from './Star';
const StarRating = () => {
  const [ratingNum, setRatingNum] = useState(0)
  const ratingScale = [1,2,3,4,5]
  return (
    <View style={styles.starContainer}>
      {ratingScale.map((position) => <Star rating={ratingNum} setRating={setRatingNum} starPosition={position
      } key={position.toString()}/>)}
    </View>
  );
}
export default StarRating;