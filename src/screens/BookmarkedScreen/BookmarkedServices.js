//Bookmarked service screen
import React, { useState, useEffect } from 'react';
import img from '../../images/Dummyresource.png';
import BookmarkedScreenContainer from './subscreens/BookmarkedScreenContainer';
import BookmarkedCard from './subscreens/BookmarkedCard';

//mockup data for testing purpose (Later on, this data will be retrieved from database)
import { ScrollView } from 'react-native';
import { useAuth } from '../../context/AuthProvider';
import {getbookmarkedresources} from '../../utils/api/bookmarkservices'

const BookmarkedServices = () => {
  const { userToken, setIsLoading } = useAuth();
  const [bookmarkedResource, setBookmarkedResource] = useState([]);

  // Loads the resources, if any, into the variable
  useEffect(() => {
    setIsLoading(true); // Start loading state

    try {
      const fetchBookmarkedResources = async () => {
        const resources = await getbookmarkedresources(userToken);
        setBookmarkedResource(resources);
      };

      fetchBookmarkedResources().catch((err) => {
        setError(err.message);
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false); // End loading state
    }
  }, [userToken, setIsLoading]);

  //return the component
  if (bookmarkedResource == null) {
    //if empty, return a blank screen
    return (<BookmarkedScreenContainer>
      <ScrollView>
        {/* return empty */}
      </ScrollView>
    </BookmarkedScreenContainer>);
  }
  else {
    //otherwise return any resources
    return (
      <BookmarkedScreenContainer>
        <ScrollView>
          {/* Render bookmarked cards for the retrieved saved resources */}
          {/* loop through bookmarkedResource array and make BookmarkedCard */}

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