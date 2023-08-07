//Bookmarked service screen
import React from 'react';
import img from '../../images/Dummyresource.png';
import BookmarkedScreenContainer from './subscreens/BookmarkedScreenContainer';
import BookmarkedCard from './subscreens/BookmarkedCard';

//mockup data for testing purpose (Later on, this data will be retrieved from database)
import { getSavedResourcesByUserId } from './mockupData'; // Import the new function
import { ScrollView } from 'react-native';

const BookmarkedServices = () => {

  const userId = 1;
  const savedResources = getSavedResourcesByUserId(userId);
  console.log(savedResources);

  return (
    <BookmarkedScreenContainer>
      <ScrollView>
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
      </ScrollView>
    </BookmarkedScreenContainer>
  );
};

export default BookmarkedServices;