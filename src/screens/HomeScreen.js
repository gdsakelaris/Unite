import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, Image, Pressable} from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
const HomeScreen = () => {
  const {fontScale} = useWindowDimensions()
  const styles = makeStyle(fontScale)
  const [isFocus, setIsFocus] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
        {/* search bar */}
        <View style={styles.searchBarContainer}>
          <View style={styles.searchBarView}>
            <TextInput style={styles.searchBar} 
                       placeholder={'Search...'} 
                       autoCapitalize={false} 
                       autoComplete={false} 
                       clearButtonMode={true} 
                       inputMode={'text'}/>
  
            <EvilIcons 
                       name="search" 
                       size={30 / fontScale} 
                       color="black" 
                       style={styles.searchIcon}  
                        />
          </View>
        </View>

        {/* Location sign */}
        <View style={styles.locationSignContainer}>
              <Ionicons 
                       name="ios-location-sharp" 
                       size={24 /fontScale} 
                       color="#FF4A0E"   
                       style={styles.locationIcon} />
              <View 
                       style={styles.locationTextContainer}>
                  <Pressable 
                       onPressIn={() => setIsFocus(true)} 
                       onPressOut={() => setIsFocus(false)}>
                    <Text 
                        style={isFocus ? [styles.locationText, {textDecorationLine: 'underline'}] : styles.locationText } 
                        >
                            Florida, USA
                    </Text>
                  </Pressable>
              </View>
                   
        </View>

        {/* Cards container */}
        <View 
              style={styles.cardsContainer}>
              {/* shelter */}
              <View 
                    style={styles.cardStyle}>
                    <Image 
                          source={require('../images/shelter.png')} 
                          style={styles.cardImage} 
                          resizeMode='cover'/>
                    <View 
                          style={styles.cardTitleContainer}>
                          <Text 
                                style={styles.cardTitle}>
                                      Shelter
                          </Text>
                    </View>
              </View>

              <View 
                    style={styles.cardStyle}>
                    <Image 
                           source={require('../images/education.jpeg')} 
                           style={styles.cardImage} 
                           resizeMode='cover'/>
                    <View 
                           style={styles.cardTitleContainer}>
                           <Text 
                                 style={styles.cardTitle}>
                                        Education
                           </Text>
                    </View>
              </View>

              <View 
                    style={styles.cardStyle}>
                    <Image 
                            source={require('../images/community.jpeg')} 
                            style={styles.cardImage} 
                            resizeMode='cover'/>
                    <View 
                            style={styles.cardTitleContainer}>
                            <Text 
                                  style={styles.cardTitle}>
                                         Community
                            </Text>
                    </View>
              </View>

              <View 
                    style={styles.cardStyle}>
                    <Image 
                            source={require('../images/food.jpeg')} 
                            style={styles.cardImage} 
                            resizeMode='cover'/>
                    <View 
                            style={styles.cardTitleContainer}>
                            <Text 
                                  style={styles.cardTitle}>
                                           Food
                            </Text>
                    </View>
              </View>

              <View 
                    style={styles.cardStyle}>
                    <Image 
                            source={require('../images/employment.jpeg')} 
                            style={styles.cardImage} 
                            resizeMode='cover'/>
                    <View 
                            style={styles.cardTitleContainer}>
                            <Text 
                                  style={styles.cardTitle}>
                                          Employment
                            </Text>
                    </View>
              </View>

              <View 
                    style={styles.cardStyle}>
                    <Image 
                            source={require('../images/health.jpeg')} 
                            style={styles.cardImage} 
                            resizeMode='cover'/>
                    <View 
                            style={styles.cardTitleContainer}>
                            <Text 
                                  style={styles.cardTitle}>
                                          Health
                            </Text>
                    </View>
              </View>
        </View>
        
    </SafeAreaView>
  );
};

const makeStyle = fontScale => StyleSheet.create({
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
    elevation: 20,
  

   
   
  },  

  searchBar: {

    fontSize: 20 / fontScale,
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
    fontSize: 20 / fontScale,
    color:'#337155',
    fontWeight: '600',
  },
  locationIcon: {
    //top:'2%'
  },

  cardsContainer: {
    flex:8,
    flexWrap:'wrap',
    alignContent: 'space-around',
    paddingTop: '5%',
    
  },

  cardStyle : {
    width: '45%',
    height: '25%',
    marginBottom: '5%',
    backgroundColor: "#FFF",
    borderWidth: 0.05,
    borderRadius:'12%',
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.55,
    shadowRadius: 3,
    elevation: 20,
    
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius:'12%',
  },
  cardTitleContainer: {
    position: 'absolute',
    backgroundColor: "#FFF",
    justifyContent:'center',
    alignItems:'center',
    width: '100%',
    top: '70%',
    borderBottomLeftRadius:'12%',
    borderBottomRightRadius:'12%',
    height: '30%'

  },
  cardTitle: {
    fontSize: 20 / fontScale,
    fontWeight: '500'
  }



})
export default HomeScreen;
