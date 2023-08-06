//Bookmarked service screen
import React from 'react';
import img from '../../images/Dummyresource.png';
import BookmarkedScreenContainer from './subscreens/BookmarkedScreenContainer';
import BookmarkedCard from './subscreens/BookmarkedCard';

//mockup data for testing purpose (Later on, this data will be retrieved from database)
import { getSavedResourcesByUserId } from './mockupData'; // Import the new function

const BookmarkedServices = () => {

  const userId = 1;
  const savedResources = getSavedResourcesByUserId(userId);
  console.log(savedResources);

  return (
    <BookmarkedScreenContainer>
      {/* Render bookmarked cards for the retrieved saved resources */}
      {savedResources.map((resource, i) => (
        <BookmarkedCard
          cardName={resource.name}
          location={resource.location}
          phoneNumber={resource.phoneNumber}
          source={img}
          key={i.toString()}
        />
      ))}
    </BookmarkedScreenContainer>
  );
};

export default BookmarkedServices;