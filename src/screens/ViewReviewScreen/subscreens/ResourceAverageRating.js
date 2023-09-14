/**
 * @file ResourceAverageRating.js
 * @description This file defines a view component that displays the average rating for a resource, along with a star rating representation and the text "based on reviews".
 * @param {string} rating - Rating of resource.
 * @returns {JSX.Element} A component displaying the resource's average rating, star rating, and review count.
 */


import React from 'react';
import { View} from 'react-native';
import { Text } from 'react-native-paper'; //Ultilized text component from react native paper because it provides a prop that can change the color of the text to darkmode
import renderStarRating from '../../../utils/renderStarRating';
import { resourceAverageRating as styles } from '../css';
const ResourceAverageRating = ({rating}) => {
  return (
    // Container for the resource's average rating and related elements
    <View style={styles.container}>

        {/* Display the resource's average rating. Currently using dummy rating */}
        <Text variant='displayLarge'>3.0</Text>

        {/* Resource's rating star */}
        {renderStarRating(rating, styles.starRating)}
        
        {/* Display the text "based on reviews". Currently using dummy number for number of reviews */}
        <Text variant='labelSmall' style={styles.text}>based on 6 reviews</Text>
    </View>
  )
}
export default ResourceAverageRating;