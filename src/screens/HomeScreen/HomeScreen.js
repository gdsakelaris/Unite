/**
 * HomeScreen component.
 * This component represents the home screen of the application.
 * It displays a search bar, location text, a list of provided services, and a button for adding new resources.
 *
 * @component
 * @param {Object} navigation - Navigation object used for navigating between screens.
 * @returns {JSX.Element} HomeScreen component
 */

import React from 'react';
import SearchBar from '../../components/SearchBar';
import LocationText from './subscreens/LocationText';
import { SafeAreaView, View, Dimensions } from 'react-native'; // Import Dimensions
import { homeScreenContainer, providedServicesContainer, locationText, searchbar, servicecard } from './css';
import { providedServices } from './listOfProvidedServices'; // Import providedServices array
import HomeScreenContainer from './subscreens/HomeScreenContainer';
import ProvidedServices from './subscreens/ProvidedServices';
import NewResourceButton from './subscreens/NewResourceButton';
import ServiceCard from '../../components/ServiceCard';

const HomeScreen = ({ navigation }) => {
   /**
   * Handle clicking the service card.
   * Navigate to the corresponding resource screen with the provided service card name as a parameter.
   * 
   * Pass the 'resourceName' parameter to the 'AnyResource' screen to tell the backend to give resources categorized under the specified 'resourceName,' 
   *
   * @param {string} resourceName - The name of the resource.
   */
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
            onPress={() => handleResourceButtonClick(service.name.toLowerCase())} // Pass the resource name as a parameter
            key={i.toString()}
            style={servicecard.servicecard}
          />
        ))}
      </View>
       {/* Button for adding new resources */}
      <NewResourceButton navigation={navigation}/>
    </SafeAreaView>
  );
};

export default HomeScreen;
