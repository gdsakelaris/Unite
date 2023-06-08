import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, Image, Pressable } from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const HomeScreen = () => {
  const { width, height } = useWindowDimensions();
  const styles = makeStyle(width, height);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* search bar */}
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBarView}>
          <TextInput
            style={styles.searchBar}
            placeholder={'Search...'}
            autoCapitalize={'none'}
            autoCompleteType={'off'}
            clearButtonMode={'always'}
            keyboardType={'default'} />

          <EvilIcons
            name="search"
            size={30}
            color="black"
            style={styles.searchIcon}
            adjustsFontSizeToFit={true}
            minimumFontScale={0.5} />
        </View>
      </View>

      {/* Location sign */}
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
              Florida, USA
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Cards container */}
      <View style={styles.cardsContainer}>
        {/* shelter */}
        <View style={styles.cardStyle}>
          <Image
            source={require('../images/shelter.png')}
            style={styles.cardImage}
            resizeMode='cover' />

          <View style={styles.cardTitleContainer}>
            <Text
              style={styles.cardTitle}
              adjustsFontSizeToFit={true}
              minimumFontScale={0.5}>
              Shelter
            </Text>
          </View>
        </View>

        {/* other cards */}
        {/* ... */}
      </View>
    </SafeAreaView>
  );
};

const makeStyle = (width, height) => StyleSheet.create({
  container: {
    flex: 1
  },
  searchBarContainer: {
    width: width * 0.95,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchBarView: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 12,
    elevation: 20,
    backgroundColor: "#FFF"
  },
  searchBar: {
    flex: 1,
    fontSize: 20,
    paddingLeft: '14%',
  },
  searchIcon: {
    position: 'absolute',
    top: '22%',
    left: '4%'
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
    fontSize: 20,
    color: '#337155',
    fontWeight: '600',
  },
  locationIcon: {},
  cardsContainer: {
    flex: 8,
    flexWrap: 'wrap',
    alignContent: 'space-around',
    paddingTop: '5%',
  },
  cardStyle: {
    width: '45%',
    height: '25%',
    marginBottom: '5%',
    backgroundColor: "#FFF",
    borderWidth: 0.05,
    borderRadius: 12,
    elevation: 20,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  cardTitleContainer: {
    position: 'absolute',
    backgroundColor: "#FFF",
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    top: '70%',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    height: '30%'
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '500'
  }
});

export default HomeScreen;
