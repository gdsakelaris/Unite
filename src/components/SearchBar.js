import * as React from 'react';
import { StyleSheet} from 'react-native';
import { Searchbar } from 'react-native-paper';
const SearchBar = ({style}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={[styles.searhBarDefaultStyle, style]}
    />
  );
};
const styles = StyleSheet.create({
  searhBarDefaultStyle: {
    backgroundColor:'white', 
    borderColor:'black', 
    marginHorizontal:'3%', 
    borderWidth:1
  }
})

export default SearchBar;