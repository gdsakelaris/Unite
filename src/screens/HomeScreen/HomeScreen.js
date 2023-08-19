import React from 'react';
import SearchBar from '../../components/SearchBar';
import LocationText from './subscreens/LocationText';
import ServiceCard from '../../components/ServiceCard';
import { SafeAreaView, View, Dimensions } from 'react-native'; // Import Dimensions
import {
  homeScreenContainer,
  providedServicesContainer,
  locationText,
  searchbar,
  servicecard,
} from './css';
import { providedServices } from './listOfProvidedServices'; // Import providedServices array

const HomeScreen = ({ navigation }) => {
  const handleResourceButtonClick = (resourceName) => {
    navigation.navigate('AnyResource', { resourceName });
  };

  // Calculate the width of each item in the 2x3 grid based on the screen width
  const itemWidth = Dimensions.get('window').width / 2; // Two items per row

  return (
    <SafeAreaView style={homeScreenContainer.homeScreenContainer}>
      {/* Search bar */}
      <SearchBar style={searchbar.searchbar} />
      {/* Location sign */}
      <View style={locationText.locationSignContainer}>
        <LocationText location={'Florida,USA'} />
      </View>
      {/* Provided Services */}
      <View style={providedServicesContainer.servicesContainer}>
        {providedServices.map((service, i) => (
          <ServiceCard
            title={service.name}
            picture={service.urlImage}
            onPress={() => handleResourceButtonClick(service.name)} // Pass the resource name as a parameter
            key={i.toString()}
            style={servicecard.servicecard}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
