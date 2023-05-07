import React from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProductCard from '../components/Card';


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        {/* search bar */}
        <View style={styles.searchBarContainer}>
          <View style={styles.searchBarView}>
            <TextInput style={styles.searchBar} placeholder={'Search...'} autoCapitalize={false} autoComplete={false} clearButtonMode={true} inputMode={'text'}/>
  
            <EvilIcons name="search" size={30} color="black" style={styles.searchIcon}  adjustsFontSizeToFit={true} minimumFontScale={0.5} />
          </View>
        </View>

        {/* Location sign */}
        <View style={styles.locationSignContainer}>
              <Ionicons name="ios-location-sharp" size={24} color="#FF4A0E"  adjustsFontSizeToFit={true} minimumFontScale={0.5}  style={styles.locationIcon} />
              <View style={styles.locationTextContainer}>
                <TouchableOpacity>
                  <Text style={styles.locationText} adjustsFontSizeToFit={true} minimumFontScale={0.5}>Florida, USA</Text>
                </TouchableOpacity>
              </View>

        </View>

        {/* Cards container */}
        <View style={styles.cardsContainer}>
            <ProductCard description={'Shelter'} title={'Shel'} ></ProductCard>

        </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchBarContainer: {
    flex: 1,
  //  backgroundColor:'red',
    justifyContent: 'center',
    alignItems:'center'
    
  },
  searchBarView: {
    
    width: '95%',
    height: '60%',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: "#FFF",
    borderRadius:'12%',
    flexDirection:'row',
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 20

   
   
  },  

  searchBar: {

    fontSize: '15%',
    flex: 1,
    paddingLeft: '14%',
  },
  searchIcon: {
    position: 'absolute',
    top: '22%',
    left: '4%'
    

  },



  locationSignContainer: {
    flex:1,
   // backgroundColor:'blue',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },

  locationTextContainer: {
    
    height: '30%',
    //top:'2%',
    marginLeft: '1%'
  },

  locationText: {
    fontSize: '20%',
    color:'#337155',
    fontWeight: '600'
  },
  locationIcon: {
    //top:'2%'
  },

  cardsContainer: {
    flex:8,
    backgroundColor:'green'
  }

})
export default HomeScreen;
