import React from 'react';
import HomeScreenContainer from './subscreens/HomeScreenContainer';
import SearchBar from '../../components/SearchBar';
import LocationText from './subscreens/LocationText'
import ProvidedServices from './subscreens/ProvidedServices';
import { searchbar as styles } from './css';
import NewResourceButton from './subscreens/NewResourceButton';
const HomeScreen = ({navigation}) => {
  return (
    <HomeScreenContainer>
      {/* Search bar */}
      <SearchBar style={styles.searchbar}/>
      {/* Location sign */}
      <LocationText location={'Florida,USA'}/>
      {/* Provided Services */}
      <ProvidedServices navigation={navigation}/>
      <NewResourceButton navigation={navigation}/>
    </HomeScreenContainer>
  );
};
export default HomeScreen;
