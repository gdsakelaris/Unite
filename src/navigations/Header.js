/**
 * Header component.
 * This component renders a header with optional back button and search button.
 *
 * @component
 * @param {object} navigation - React Navigation navigation object.
 * @param {string} title - Title to display in the header.
 * @param {boolean} hasSearchBar - Whether to display the search button.
 * @returns {JSX.Element} Header component
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { colors } from '../base';
function Header({navigation, title, hasSearchBar}) {
  return (
    //Utilized Appbar from react native paper to make a header for the navigation. Go to react native paper and check out Appbar for reference
    <Appbar.Header style={styles.headerContainer}>
       
       {/* Back Button */}
      <Appbar.BackAction onPress={() => navigation.goBack()} />

       {/* Title */}
     <Appbar.Content title={title} titleStyle={styles.headerTitle}/>

       {/* Search Button */}
      {hasSearchBar &&
                    <Appbar.Action icon="magnify" onPress={() => {console.log('pressed search')}} />}
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    alignSelf:'flex-start',
    fontSize:25,
  },
  headerContainer: {
    backgroundColor: colors.white,
  }
});

export default Header;