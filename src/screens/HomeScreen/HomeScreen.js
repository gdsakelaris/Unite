import React from 'react';
import HomeScreenContainer from './subscreens/HomeScreenContainer';
import SearchBar from '../../components/SearchBar';
import LocationText from './subscreens/LocationText'
import ProvidedServices from './subscreens/ProvidedServices';
const HomeScreen = ({navigation}) => {
  return (
    <HomeScreenContainer>
      {/* Search bar */}
      <SearchBar/>
      {/* Location sign */}
      <LocationText location={'Florida,USA'}/>
      {/* Provided Services */}
      <ProvidedServices navigation={navigation}/>
    </HomeScreenContainer>
  );
};
export default HomeScreen;
