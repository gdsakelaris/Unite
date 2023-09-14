/**
 * @file Review.js
 * @description This file defines the main Review screen that users will see when they run the application. It displays a list of reviews for a resource, along with the average rating, and a button to write a new review.
 * @param {Object} navigation - navigation object that allows user to move to Write Review screen
 * @returns {JSX.Element} The Review screen component.
 */


import React from 'react';
import ReviewContainer from './subscreens/ReviewContainer';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import ScrollListOfReviews from './subscreens/ScrollListOfReviews';
import WriteReviewBtn from './subscreens/WriteReviewBtn';
import ResourceAverageRating from './subscreens/ResourceAverageRating';
import mockupreviews from './mockupreviews';


const Review = ({navigation}) => (
  <ReviewContainer>
    {/* Display the average rating for the resource */}
    <ResourceAverageRating/>

    {/* Display a scrollable list of reviews */}
    <ScrollListOfReviews>

      {/* Map through mockup reviews to render ReviewCard components. Later on replace the mockup datas with the actual reviews retrieved from the backend */}
      {mockupreviews.map((e, i) => 
                                 <ReviewCard reviewerName={e.name}
                                 content={e.content} reviewerProfileUri={e.avatar} rating={e.rating} postedDate={e.postedDate} key={i.toString()}/> )}
    </ScrollListOfReviews>

    {/* Button to navigate to the "Write a Review" screen */}
    <WriteReviewBtn onPress={() => navigation.navigate('Write a Review') }/>
  </ReviewContainer>
  
)
export default Review;