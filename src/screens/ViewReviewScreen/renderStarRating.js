import { whiteStarIcon, blackStarIcon } from "../WriteReviewScreen/icons"
export default renderStarRating = (rating = 0, i) => {
  if (rating >= i) return blackStarIcon
  else return whiteStarIcon
}