import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'
const ImageInput = ({imageUri, onChangeImage}) => {
  const askForAccessPhotoPermission = async () => {
    const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync()
    return granted
    // if (!granted) alert('You need too enable permission')
  
  }
  const handlePress = () => {
    if (!imageUri) selectImage()
    // alert is still not working properly
    else onChangeImage(null)
  }
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      })
      if (!result.canceled)
          console.log(result.assets[0].uri)
          onChangeImage(result.assets[0].uri)
      
    } catch (error) {
      console.log('Error reading an image', error)
      
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => {
        const granted = askForAccessPhotoPermission()
        if (!granted) alert('You need too enable permission')
        else handlePress()
    }}>
      <View style={styles.container}>
        {!imageUri && <MaterialCommunityIcons name='camera' size={40}/>}
        {imageUri && <Image source={{uri: imageUri}} style={styles.image}/>}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dcdcdc',
    borderRadius: 15, 
    height: 100,
    width: '27%',
    justifyContent:'center',
    alignItems:'center',
    overflow:'hidden'

  },
  image: {
    width:'100%',
    height:'100%'
  }
});

export default ImageInput;