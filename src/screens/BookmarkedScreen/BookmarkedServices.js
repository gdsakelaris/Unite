import React from 'react';
import { ScrollView } from 'react-native';
import img from '../../images/Dummyresource.png';
import BookmarkedScreenContainer from './subscreens/BookmarkedScreenContainer';
import BookmarkedCard from './subscreens/BookmarkedCard';
import { bookmarkData } from './mockupData';
const BookmarkedServices = () => (
  <BookmarkedScreenContainer>
    <ScrollView>
      {bookmarkData.map((service, i) => 
                                        <BookmarkedCard cardName={service.name} location={service.location} phoneNumber={service.phoneNumber} source={img} key={i.toString()}/>)}

    </ScrollView>
  </BookmarkedScreenContainer>
)
export default BookmarkedServices;