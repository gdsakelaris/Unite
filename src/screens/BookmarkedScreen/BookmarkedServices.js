//Bookmarked service screen
import React, { useState } from 'react';
import img from '../../images/Dummyresource.png';
import BookmarkedScreenContainer from './subscreens/BookmarkedScreenContainer';
import BookmarkedCard from './subscreens/BookmarkedCard';

//mockup data for testing purpose (Later on, this data will be retrieved from database)
import { getSavedResourcesByUserId } from './mockupData'; // Import the new function
import { ScrollView } from 'react-native';
import { useAuth } from '../../context/AuthProvider';

const BookmarkedServices = () => {

  const userId = 1;
  const savedResources = getSavedResourcesByUserId(userId);
  console.log(savedResources);
  const [bookmarkedResource, setBookmarkedResource] = useState([])

  /**
   * useEffect(
   * const {userToken, setIsLoading} = useAuth()
   *  setIsLoading(true) - start loading state
   *  const bookmarkedResources =getbookmarkedresources(userToken) -get bookmarkedresouces - if 200, return an array of resources
   *  setBookmarkedResource(bookmarkedResources)
   *  setIsLoading(false) - end loading state
   * )
   * 
   */

  return (
    <BookmarkedScreenContainer>
      <ScrollView>
      {/* Render bookmarked cards for the retrieved saved resources */}
      {/* loop through bookmarkedResource array and make  */}
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