import React from 'react';
import { whiteStarIcon, blackStarIcon } from '../../WriteReviewScreen/icons';
const RatingStar = ({rating, i}) => {
  if (rating > i) return blackStarIcon
  else  return whiteStarIcon
}
export default RatingStar;