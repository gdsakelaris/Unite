import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageInput from './ImageInput';

const ImageInputList = ({imageUris = [], onRemoveImage, onAddImage}) => {
  return (
    <View style={styles.container}>
      {imageUris.map(uri => (
     
        <ImageInput imageUri={uri} onChangeImage ={() => onRemoveImage(uri)} key={uri}/>
     
      ))}
      <ImageInput onChangeImage={(uri) => onAddImage(uri)}/>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    width:'100%',
    flexWrap:'wrap',
    justifyContent:'space-between'
  },


});

export default ImageInputList;