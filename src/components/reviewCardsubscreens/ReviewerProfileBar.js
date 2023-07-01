//make a reviewer profile bar portion in review card
import { Card, Text } from "react-native-paper";
import { reviewCard as styles } from "../css";
import { renderPostedDate, renderRating, renderReviewerPicture } from "./profilebarelements";
const ReviewerProfileBar = ({reviewerName, reviewerProfile, postedDate, ratings}) => (
  <Card.Title 
                title={<Text variant='titleLarge' style={styles.titleText}>
                            {reviewerName}
                        </Text>} 
                left={() => renderReviewerPicture(reviewerProfile)} 
                right={() =>renderPostedDate(postedDate)} 
                subtitle={() =>renderRating(ratings)} 
                subtitleStyle={styles.titleMargin} 
                titleStyle={styles.titleMargin}/>

)
export default ReviewerProfileBar