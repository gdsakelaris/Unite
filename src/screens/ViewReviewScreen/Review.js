import React from 'react';
import ReviewContainer from './subscreens/ReviewContainer';
import ReviewCard from '../../components/ReviewCard';
import ScrollListOfReviews from './subscreens/ScrollListOfReviews';
import WriteReviewBtn from './subscreens/WriteReviewBtn';
import ResourceAverageRating from './subscreens/ResourceAverageRating';
import reviewerPicture from '../../images/twitterIcon.png'
import { Image } from 'react-native';
const Review = () => (
  <ReviewContainer>
    <ResourceAverageRating/>
    <ScrollListOfReviews>
      <ReviewCard reviewerName='Phong' content='This resource is good' reviewerProfileUri={Image.resolveAssetSource(reviewerPicture).uri} ratings={4} postedDate={'5 days ago'}/>
      <ReviewCard reviewerName='Phong' content='Hello, this resource is not good as it desribed. Recommend not to use this' reviewerProfileUri={Image.resolveAssetSource(reviewerPicture).uri} ratings={4} postedDate={'5 days ago'}/>
      <ReviewCard reviewerName='Phong' content='Hello, this resource is not good as it desribed. Recommend not to use this Hello, this resource is not good as it desribed. Recommend not to use this Hello, this resource is not good as it desribed. Recommend not to use this' reviewerProfileUri={Image.resolveAssetSource(reviewerPicture).uri} ratings={4} postedDate={'5 days ago'}/>
      <ReviewCard reviewerName='Phong' content='This resource is good' reviewerProfileUri={Image.resolveAssetSource(reviewerPicture).uri} ratings={4} postedDate={'5 days ago'}/>
    </ScrollListOfReviews>
    <WriteReviewBtn/>
  </ReviewContainer>
  
)
export default Review;