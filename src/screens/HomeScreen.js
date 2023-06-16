import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Pressable} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import SearchBar from '../components/SearchBar';
import shelterPicture from '../images/shelter.png'
import healthPicture from '../images/health.jpeg'
import communityPicture from '../images/community.jpeg'
import educationPicture from '../images/education.jpeg'
import employmentPicture from '../images/employment.jpeg'
import foodPicture from '../images/food.jpeg'
import Card from '../components/Card';
const Location = ({location, styles}) => {
  const [isFocus, setIsFocus] = useState(false)
  return (
  <View style={styles.locationSignContainer}>
        <Ionicons
          name="ios-location-sharp"
          size={24}
          color="#FF4A0E"
          style={styles.locationIcon} />

        <View style={styles.locationTextContainer}>
          <Pressable
            onPressIn={() => setIsFocus(true)}
            onPressOut={() => setIsFocus(false)}>
            <Text
              style={isFocus ? [styles.locationText, { textDecorationLine: 'underline' }] : styles.locationText}
              adjustsFontSizeToFit={true}
              minimumFontScale={0.5}>
              {location}
            </Text>
          </Pressable>
        </View>
  </View>)
}

const CardsContainer = ({styles, children}) => (
  <View style={styles.cardsContainer}>
    {children}
  </View>
)

const Cards = ({navigation, styles}) => {
  const shelterImageUri = Image.resolveAssetSource(shelterPicture).uri
  const healthImageUri = Image.resolveAssetSource(healthPicture).uri
  const communityImageUri = Image.resolveAssetSource(communityPicture).uri
  const foodImageUri = Image.resolveAssetSource(foodPicture).uri
  const educationImageUri = Image.resolveAssetSource(educationPicture).uri
  const employmentImageUri = Image.resolveAssetSource(employmentPicture).uri
  const resources = [
      {name: "Shelter", urlImage: shelterImageUri, navigateTo: 'ShelterCard'},
      {name: "Education", urlImage: educationImageUri, navigateTo: 'EducationCard' },
      {name: "Community", urlImage: communityImageUri, navigateTo: 'CommunityCard'},
      {name: "Food", urlImage: foodImageUri, navigateTo: 'FoodResourceCard'},
      {name: "Employment", urlImage: employmentImageUri, navigateTo: 'EmploymentCard'},
      {name: "Health", urlImage: healthImageUri, navigateTo: 'HealthCard'}
]
  return (
    <CardsContainer styles={styles}>
      {resources.map((resource, i) => 
                                      <Card key={i.toString()} picture={resource.urlImage} title={resource.name} onPress={
                                        () => {
                                          navigation.navigate(resource.navigateTo)
                                        }
                                      }/>)}
    </CardsContainer>
  )
}

const HomeScreen = ({navigation}) => {
  
  const { fontScale } = useWindowDimensions()
  const styles = makeStyle(fontScale)
  return (
    <SafeAreaView style={styles.container}>
      {/* Search bar */}
      <View style={styles.searchBarContainer}>
          <SearchBar/>
      </View>
      {/* Location sign */}
      <Location location={'Florida, USA'} styles={styles}/>

      {/* Cards container */}
      <Cards styles={styles} navigation={navigation}/>
    </SafeAreaView>
  );
};
// const makeStyle = (width, height) => StyleSheet.create({
const makeStyle = (fontScale) => {

  return StyleSheet.create({
    container: {
      flex: 1
    },
    searchBarContainer: {
      width: '100%',
      height: '6%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal:'2%'
    },
    locationSignContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    locationTextContainer: {
      marginLeft: '1%'
    },
    locationText: {
      fontSize: 20 / fontScale,
      color: '#337155',
      fontWeight: '600',
    },
    cardsContainer: {
      flex: 8,
      flexWrap: 'wrap',
      alignContent: 'space-around',
      paddingTop: '5%',
    },
  });
};

export default HomeScreen;
