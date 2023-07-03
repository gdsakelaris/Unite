//make a portion that displays the reviewer profile, posted days, and the reviwer name on the review card
import { Card, Text } from "react-native-paper";
import { reviewCard as styles } from "../../css";
import { renderPostedDate, ReviewerRating, renderReviewerPicture } from "./content";
const ReviewerProfileBar = ({reviewerName, reviewerProfile, postedDate, ratings}) => (
  <Card.Title 
                title={<Text variant='titleLarge' style={styles.titleText}>
                            {reviewerName}
                        </Text>} 
                left={() => renderReviewerPicture(reviewerProfile)} 
                right={() =>renderPostedDate(postedDate)} 
                subtitle={<ReviewerRating rating={5}/>} 
                subtitleStyle={styles.titleMargin} 
                titleStyle={styles.titleMargin}/>

)
export default ReviewerProfileBar