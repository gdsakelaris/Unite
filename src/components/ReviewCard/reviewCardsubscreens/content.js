import { reviewCard as styles } from "../../css"
import AvatarIcon from "../../AvatarIcon"
import { Text } from "react-native-paper"
import renderStarRating from "../../../utils/renderStarRating"

/**
 * A utility function that renders a reviewer's profile picture on the review card.
 *
 * @function
 * @param {Object} reviewerProfile - The profile settings for the reviewer's picture.
 * @returns {JSX.Element} - A component that displays the reviewer's profile picture.
 */
export const renderReviewerPicture = (reviewerProfile) => <AvatarIcon avatarSettings={reviewerProfile}/>


/**
 * A utility function that renders the number of days the review was posted on the review card.
 *
 * @function
 * @param {string} postedDate - The date when the review was posted.
 * @returns {JSX.Element} - A component that displays the number of posted days.
 */
export const renderPostedDate = (postedDate) => <Text style={styles.postedDateStyle}>{postedDate}</Text>


/**
 * A component that renders the rating given by the reviewer for the resource on the review card.
 *
 * @function
 * @param {string} rating - The rating given in the review.
 * @returns {JSX.Element} - A component that displays the reviewer's rating.
 */
export const ReviewerRating = ({rating}) => <Text variant='labelLarge'>{renderStarRating(rating)} {rating}.0</Text>