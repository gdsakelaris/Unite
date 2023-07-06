//make a reviewer card component that will display the user's review about the service they used
import * as React from 'react';
import { Card} from 'react-native-paper';
import { reviewCard as styles } from '../css';
import ReviewContent from './reviewCardsubscreens/ReviewContent';
import ReviewerProfileBar from './reviewCardsubscreens/ReviewerProfileBar';
function ReviewCard(props) {
  const {reviewerName, content, reviewerProfileUri, rating, postedDate} = props
  const reviewerPicture = {
    source: reviewerProfileUri
  }
  return (
    <Card mode='outlined' style={styles.container} >
      <ReviewerProfileBar postedDate={postedDate} ratings={rating} reviewerName={reviewerName} reviewerProfile={reviewerPicture}/>
      <ReviewContent content={content}/>
    </Card>
  );
}

export default ReviewCard;