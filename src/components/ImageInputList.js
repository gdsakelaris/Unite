//this file will render a list of image picker components
import React from 'react';
import { View, ScrollView } from 'react-native';
import ImageInput from './ImageInput';
import { imageInputList as styles } from './css';
const ImageInputList = ({imageUris = [], onRemoveImage, onAddImage, style,...scrollViewProps}) => {
  return (
    <View style={[styles.inputListContainer, style]}>
       <ScrollView  horizontal contentContainerStyle={styles.scrollViewContent}  >
          {imageUris.map(uri => (
            <ImageInput imageUri={uri} onChangeImage ={() => onRemoveImage(uri)} key={uri}/>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)}/> 
        </ScrollView> 
    </View>
  );

}
export default ImageInputList;