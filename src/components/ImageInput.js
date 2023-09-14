/**
 * A component (placeholder) that allows users to pick, load an image from their device and display in this placeholder.
 *
 * @function
 * @param {string} imageUri - The URI of the selected image.
 * @param {function} onChangeImage - Callback function to handle the change of the image.
 * @returns {JSX.Element} - The rendered component.
 */

import React from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import handleImageClicked from './handleImageClicked';
import { cameraIcon } from './icons';
import { imageInput as styles } from './css';
const ImageInput = ({imageUri, onChangeImage}) => {
  return (
    //user will be asked for photo access permission before letting them pick the image
    <TouchableWithoutFeedback onPress={() => handleImageClicked(onChangeImage, imageUri)}>
      <View style={styles.imageInputContainer}>

        {/* If no image is selected, display the camera icon */}
        {!imageUri && cameraIcon}

        {/* If an image is selected, display the image */}
        {imageUri && <Image source={{uri: imageUri}} style={styles.image} resizeMode='cover'/>}
      </View>
   </TouchableWithoutFeedback>
  );
}
export default ImageInput;