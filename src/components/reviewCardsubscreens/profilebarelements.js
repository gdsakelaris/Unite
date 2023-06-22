//make components for profile bar in review card
import { reviewCard as styles } from "../css"
import { FiveStars } from "../icons"
import AvatarIcon from "../AvatarIcon"
import { Text } from "react-native-paper"
export const renderReviewerPicture = (reviewerProfile) => <AvatarIcon avatarSettings={reviewerProfile}/>
export const renderPostedDate = (postedDate) => <Text style={styles.postedDateStyle}>{postedDate}</Text>
export const renderRating = (ratings) => <Text variant='labelLarge'>{FiveStars} {parseFloat(ratings)}</Text>