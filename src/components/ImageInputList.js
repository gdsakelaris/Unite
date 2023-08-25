/**
 * A component that renders a list of image picker components.
 *
 * @function
 * @param {string[]} imageUris - An array of URIs for the selected images.
 * @param {function} onRemoveImage - Callback function to handle image removal.
 * @param {function} onAddImage - Callback function to handle adding an image.
 * @param {object} style - Additional styling for the component.
 * @param {object} scrollViewProps - Additional props for the ScrollView.
 * @returns {JSX.Element} - The rendered component.
 */

import React from 'react';
import { ScrollView } from 'react-native';
import ImageInput from './ImageInput';
const ImageInputList = ({imageUris = [], onRemoveImage, onAddImage, style,...scrollViewProps}) => {

  return (
    <ScrollView horizontal>
          {/* list of added images */}
          {imageUris.map(uri => (
              <ImageInput imageUri={uri} onChangeImage ={() => onRemoveImage(uri)} key={uri}/>
          ))}

          {/* An additional ImageInput component for adding new images */}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)}/>
    </ScrollView>

  );

}
export default ImageInputList;