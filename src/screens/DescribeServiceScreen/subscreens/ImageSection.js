//this file will render the add image section for the describeService page
import React, {useState} from 'react';
import SectionContainer from './SectionContainer';
import SectionTitle from './SectionTitle';
import ImageInputList from '../../../components/ImageInputList';
import { addImage as styles } from '../css';
import { ScrollView } from 'react-native';
const ImageSection = () => {
  // an array of added images. The file will base on this array to render all the images for the page
  const [imageUris, setImageUris] = useState([])
  //add image function. Whenever we add a new image, the new image will be appended to the imageUris array to render on the screen
  const addImageUri = (uri) => setImageUris([...imageUris, uri])
  //remove image function. Whenever we remove the image by clicking on it, the clicked will be removed from the imageUris array and the removed image will disappear from the page
  const removeImageUri = (uri) => setImageUris(imageUris.filter(imageUri => imageUri !== uri))
  return (
    <SectionContainer style={[styles.addImageSection]} >
      <SectionTitle title={'5 Add Image'}/>
        <ImageInputList imageUris={imageUris} onAddImage={addImageUri} onRemoveImage={removeImageUri}/>
    </SectionContainer>
  );
}
export default ImageSection;