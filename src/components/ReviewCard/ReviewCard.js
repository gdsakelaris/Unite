/**
 * A component that displays a reviewer's review about a service they used.
 *
 * @function
 * @param {Object} props - The props passed to the ReviewCard component.
 * @param {string} props.reviewerName - The name of the reviewer.
 * @param {string} props.content - The content of the review.
 * @param {string} props.reviewerProfileUri - The URI of the reviewer's profile picture.
 * @param {number} props.rating - The rating given in the review.
 * @param {string} props.postedDate - The date when the review was posted.
 * @returns {JSX.Element} - A component that displays the reviewer's review.
 */


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
    // Utilize card component from react native paper to make a review card. Go to reac-native-paper document for references
    <Card mode='outlined' style={styles.container} >

      {/* Display the reviewer's profile bar */}
      <ReviewerProfileBar 
        postedDate={postedDate} 
        ratings={rating} 
        reviewerName={reviewerName} 
        reviewerProfile={reviewerPicture}
        />

      {/* Display the review content */}
      <ReviewContent content={content}/>
    </Card>
  );
}

export default ReviewCard;