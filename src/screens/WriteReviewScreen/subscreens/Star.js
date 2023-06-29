import React from 'react';
import { TouchableOpacity} from 'react-native';
import { whiteStarIcon, blackStarIcon } from '../icons';
import { starRating as styles } from '../css';
//starPostion is the postion of star in the scale 1 -> 5
const Star = ({rating, starPosition, setRating}) => {
  const star = rating >= starPosition ? whiteStarIcon : blackStarIcon;
    return (
      <TouchableOpacity
        onPress={() => setRating(starPosition)}
        style={styles.starButton}
      >
        {star}
      </TouchableOpacity>
  );
}
export default Star;