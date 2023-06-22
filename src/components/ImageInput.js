//This file will create an image picker component
import React from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import { handleImageClicked, askForAccessPhotoPermission } from './functions';
import { cameraIcon } from './icons';
import { imageInput as styles } from './css';
const ImageInput = ({imageUri, onChangeImage}) => {
  return (
    <TouchableWithoutFeedback onPress={() => {
        const granted = askForAccessPhotoPermission()
        if (!granted) alert('You need too enable permission')
        else handleImageClicked(onChangeImage, imageUri)
    }}>
      <View style={styles.imageInputContainer}>
        {!imageUri && cameraIcon}
        {imageUri && <Image source={{uri: imageUri}} style={styles.image} resizeMode='cover'/>}
      </View>
   </TouchableWithoutFeedback>
  );
}
export default ImageInput;