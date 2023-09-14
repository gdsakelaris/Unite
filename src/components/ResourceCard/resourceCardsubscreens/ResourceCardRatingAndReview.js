/**
 * A component that displays the rating and review information for a resource in a resource card.
 *
 * @function
 * @param {number} rating - The rating of the resource.
 * @param {string} review - The number of reviews for the resource.
 * @param {function} onPress - The function to be executed when the reviews section is pressed.
 * @returns {JSX.Element} - A component that displays the rating and review information for a resource in a resource card.
 */

import React from 'react';
import { View} from 'react-native';
import { reviewStar, dotIcon } from '../../icons';
import { Text } from 'react-native-paper';
import { resourceCard as styles } from '../../css';
import { TouchableOpacity } from 'react-native';

const ResourceCardRatingAndReview = ({rating, review, onPress}) => {
  return (
    <View style={styles.resourceCardRatingContainer}>
        {/* Review start icon 
            Should display the average start rating from the reviews that the resource has received */}
        {reviewStar}

        {/* Rating of resource*/}
        <Text style={styles.resourceCardRatingAndReview}> {rating} </Text>

        {/* Dot icon */}
        {dotIcon}

        {/* When the "Review" text is clicked. The user will be directed to the review page to view the reviews of resource
            Currently, moving to "Review screen" is disenabled */}
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.resourceCardRatingAndReview}>
          {" "}
          {review} Reviews
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default ResourceCardRatingAndReview;