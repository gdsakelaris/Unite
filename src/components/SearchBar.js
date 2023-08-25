/**
 * Creates a search bar component.
 *
 * @component
 * @param {Object} style - Additional styles for the search bar.
 * @returns {JSX.Element} The SearchBar component.
 */

import * as React from 'react';
import { searchBar as styles } from './css';
import { Searchbar } from 'react-native-paper';
const SearchBar = ({style}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    // Ultilize Searchbar component from react-native-paper so don't have to build this component from scratch. Go to react native paper and check out Searchbar component for more reference
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={[styles.searhBarDefaultStyle, style]}
    />
  );
};
export default SearchBar;