/**
 * @file Star.js
 * @description This file will make the clickable star component that will be ultilized in StarRating.js
 * @param {number} rating rating  
 * @returns {JSX.Element} The Star component.
 */

import React from 'react';
import { TouchableOpacity} from 'react-native';
import { whiteStarIcon, blackStarIcon } from '../icons';
import { starRating as styles } from '../css';
/**
 * Yash's code. Reach out to him for explanation about the code
 */


//starPostion is the postion of star in the scale 1 -> 5
const Star = ({rating, starPosition, setRating}) => {
  const star = rating >= starPosition ? whiteStarIcon : blackStarIcon; //decide whether to render white star or black star based on the rating prop
    return (
      <TouchableOpacity
        onPress={() => setRating(starPosition)} //change the rating so it corresponds to the star's position which is clicked in the list.
        style={styles.starButton}
      >
        {star}
      </TouchableOpacity>
  );
}
export default Star;