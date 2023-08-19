import React, { useState, useEffect } from 'react';
import img from '../../images/Dummyresource.png';
import BookmarkedScreenContainer from './subscreens/BookmarkedScreenContainer';
import BookmarkedCard from './subscreens/BookmarkedCard';
import { ScrollView } from 'react-native';
import { useAuth } from '../../context/AuthProvider';
import getbookmarkedresources from '../../utils/api/bookmarkservices';

const BookmarkedServices = () => {
  const { userToken, setIsLoading } = useAuth(); // Move this inside the functional component

  const [bookmarkedResource, setBookmarkedResource] = useState([]);

  useEffect(() => {
    setIsLoading(true); // Start loading state

    const fetchBookmarkedResources = async () => {
      try {
        const bookmarkedResources = await getbookmarkedresources(userToken);
        setBookmarkedResource(bookmarkedResources);
      } catch (error) {
        // Handle the error here
        console.error('Error fetching bookmarked resources', error);
      } finally {
        setIsLoading(false); // End loading state
      }
    };

    fetchBookmarkedResources(); // Call the async function

  }, [userToken]);

  if (bookmarkedResource == null) {
    return (
      <BookmarkedScreenContainer>
        <ScrollView>
          {/* return empty */}
        </ScrollView>
      </BookmarkedScreenContainer>
    );
  } else {
    return (
      <BookmarkedScreenContainer>
        <ScrollView>
          {bookmarkedResource.map((resource, i) => (
            <BookmarkedCard
              cardName={resource.name}
              location={resource.location}
              phoneNumber={resource.phoneNumber}
              source={img}
              resourceId={'id'}
              key={i.toString()}
            />
          ))}
        </ScrollView>
      </BookmarkedScreenContainer>
    );
  }
};

export default BookmarkedServices;
