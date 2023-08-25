/**
 * A component that displays the reviewer's profile, posted date, and reviewer name on the review card.
 *
 * @function
 * @param {string} reviewerName - The name of the reviewer.
 * @param {object} reviewerProfile - The profile picture of the reviewer. The object should be in this format {
                                                                                                                  source: 'url'
                                                                                                              }
 * @param {string} postedDate - The date when the review was posted.
 * @param {string} props.ratings - The rating given by the reviewer.
 * @returns {JSX.Element} - A component that displays the reviewer's profile, posted date, and reviewer name.
 */

import { Card, Text } from "react-native-paper";
import { reviewCard as styles } from "../../css";

/**
 * Ultilize functions from ./content folder to render view and reduce the amount of code needed to build the whole the ReviewProfileBar component 
 */
import { renderPostedDate, ReviewerRating, renderReviewerPicture } from "./content";
const ReviewerProfileBar = ({reviewerName, reviewerProfile, postedDate, ratings}) => (
  //Ultilize Card.Title component from react native paper to render the portion that display the profile picture, posted date, and reviewer name on the review card. Go to reac-native-paper document for references
  <Card.Title 
                title={<Text variant='titleLarge' style={styles.titleText}>
                            {reviewerName}
                        </Text>} 
                left={() => renderReviewerPicture(reviewerProfile)} 
                right={() =>renderPostedDate(postedDate)} 
                subtitle={<ReviewerRating rating={ratings}/>} 
                subtitleStyle={styles.titleMargin} 
                titleStyle={styles.titleMargin}/>

)
export default ReviewerProfileBar