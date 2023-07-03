//make a rating and review poriton in resource card
import React from 'react';
import { View} from 'react-native';
import { reviewStar, dotIcon } from '../../icons';
import { Text } from 'react-native-paper';
import { resourceCard as styles } from '../../css';
const ResourceCardRatingAndReview = ({rating, review}) => {
  return (
    <View style={styles.resourceCardRatingContainer}>
        {reviewStar}
        <Text style={styles.resourceCardRatingAndReview}> {rating} </Text>
        {dotIcon}
        <Text style={styles.resourceCardRatingAndReview}>
          {" "}
          {review} Reviews
        </Text>
    </View>
  );
}
export default ResourceCardRatingAndReview;