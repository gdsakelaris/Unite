import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { EvilIcons, Ionicons, FontAwesome } from "@expo/vector-icons";
import e from "cors";
import img from '../images/Allura.png'

const Published = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.heading}>Published!</Text>

      <Text style = {styles.congratsText}>Congratulations! You have Published your first service!</Text>

      <Image source={img} style = {styles.image}/>

      <Text style = {styles.next}>What's Next?</Text>

      <View style = {styles.buttonContainer}>

      <TouchableOpacity  style = {styles.buttons}>
        <Text style = {styles.buttonText}>View other services</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.buttons}>
        <Text style = {styles.buttonText}>View published services</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "3.58%",
    backgroundColor: "white",
  },

  heading: {
    fontSize: 36,
    fontWeight: "bold",
    alignSelf: 'center'
  },

  congratsText: {
    fontSize: 16,
    alignSelf: 'center',
    marginTop: '4%',
    marginHorizontal: '5%',
    textAlign: 'center'
  },

  image: {
    alignSelf: 'center',
    margin: '18%',
    width: '35%',
    height: '35%'
  },

  next: {
    fontSize: 32,
    fontWeight: "bold",
    alignSelf: 'center'
  },
  
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '5%'

  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  buttons: {
    width: 163,
    height: 55,
    borderWidth: 2,
    borderColor: '#F78154',
    margin: '3%',
    borderRadius: '6%',
    
    paddingHorizontal: '4%',
    paddingTop: '1.5%'

  }
});

export default Published;
