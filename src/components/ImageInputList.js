//this file will render a list of image picker components
import React from 'react';
import { View, ScrollView } from 'react-native';
import ImageInput from './ImageInput';
import { imageInputList as styles } from './css';
const ImageInputList = ({imageUris = [], onRemoveImage, onAddImage, ...scrollViewProps}) => {
  return (
    <View style={styles.inputListContainer}>
       
          {imageUris.map(uri => (
            <ImageInput imageUri={uri} onChangeImage ={() => onRemoveImage(uri)} key={uri}/>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)}/>  
    </View>
  );

}
export default ImageInputList;