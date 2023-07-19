//Bookmarked service screen
import React from 'react';
import img from '../../images/Dummyresource.png';
import BookmarkedScreenContainer from './subscreens/BookmarkedScreenContainer';
import BookmarkedCard from './subscreens/BookmarkedCard';
//mockup data for testing purpose (Later on, this data will be retrieved from database)
import {bookmarkData} from './mockupData';

const BookmarkedServices = () => (
  // container for bookmarked services screen
  <BookmarkedScreenContainer>
    {/* render several bookmarked cards from the bookmarkData*/}
    {bookmarkData.map((resource, i) =>
      <BookmarkedCard cardName={resource.name} location={resource.location} phoneNumber={resource.phoneNumber}
                      source={img} key={i.toString()}/>)}
  </BookmarkedScreenContainer>
)
export default BookmarkedServices;