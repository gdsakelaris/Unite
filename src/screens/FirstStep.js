import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";
import shelterPicture from '../images/shelter.png'
import healthPicture from '../images/health.jpeg'
import communityPicture from '../images/community.jpeg'
import educationPicture from '../images/education.jpeg'
import employmentPicture from '../images/employment.jpeg'
import foodPicture from '../images/food.jpeg'
import Card from '../components/Card';


const CardsContainer = ({styles, children}) => (
  <View style={styles.cardsContainer}>
    {children}
  </View>
)

const Cards = ({styles}) => {
  const shelterImageUri = Image.resolveAssetSource(shelterPicture).uri
  const healthImageUri = Image.resolveAssetSource(healthPicture).uri
  const communityImageUri = Image.resolveAssetSource(communityPicture).uri
  const foodImageUri = Image.resolveAssetSource(foodPicture).uri
  const educationImageUri = Image.resolveAssetSource(educationPicture).uri
  const employmentImageUri = Image.resolveAssetSource(employmentPicture).uri
  const resources = [
      {name: "Shelter", urlImage: shelterImageUri},
      {name: "Education", urlImage: educationImageUri},
      {name: "Community", urlImage: communityImageUri},
      {name: "Food", urlImage: foodImageUri},
      {name: "Employment", urlImage: employmentImageUri},
      {name: "Health", urlImage: healthImageUri}
]
  return (
    <CardsContainer styles={styles}>
      {resources.map((resource, i) => 
                                      <Card key={i.toString()} picture={resource.urlImage} title={resource.name}/>)}
    </CardsContainer>
  )
}
const FirstStep = () => {
  const { fontScale } = useWindowDimensions();
  const styles = makeStyle(fontScale);

  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.headin}>Select a category for your service </Text>
      <Cards styles={styles} />
      <View style={styles.nxtButtonContainer}>
        <TouchableOpacity style = {styles.nxtButton}>
          <Text style = {styles.nxtButtonText}> Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const makeStyle = (fontScale) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    cardsContainer: {
      flex: 8,
      flexWrap: "wrap",
      alignContent: "space-around",
      paddingTop: "5%",
    },
    headin: {
        fontSize: 40 / fontScale,
        fontWeight: 'bold',
        padding: 10,
        maxWidth: '80%',
    },

    nxtButton: {

        width: '35%',
        height: 50,
        borderRadius: 20,
        backgroundColor: '#F78154',
        alignItems: 'center',
        padding: 3,
        // marginBottom: 10,
        // marginLeft: 271,
        // marginTop: -55,
        // marginBottom: 28,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-end'
       
        
    },

    nxtButtonText: {
        color: 'white',
        fontSize: 30 / fontScale,
        fontWeight: 'bold',
        paddingRight: 3,
    },
    nxtButtonContainer: {
      width:'100%', 
      bottom:'4%', 
      paddingHorizontal:10, 
      height:70
    }

  });

export default FirstStep;
