import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { EvilIcons} from '@expo/vector-icons';


const SearchBar = ({style, ...props}) => {
  const { fontScale } = useWindowDimensions()
  const styles = makeStyle(fontScale)
  return (
    <View style={[styles.searchBarView, style]}>
          <TextInput
            style={styles.searchBar}
            placeholder={'Search...'}
            autoCapitalize={'none'}
            autoCompleteType={'off'}
            clearButtonMode={'always'}
            {...props} />

          <EvilIcons
            name="search"
            size={30}
            color="black"
            style={styles.searchIcon}
          />
    </View>
  );
}

const makeStyle = fontScale => StyleSheet.create({
  searchBarView: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 0.80 ,
    borderRadius: 12,
    height:'100%',
  },
  searchBar: {
    flex: 1,
    fontSize: 20 / fontScale,
    paddingLeft: '14%',
  },
  searchIcon: {
    position: 'absolute',
    top: '22%',
    left: '4%'
  },
});

export default SearchBar;