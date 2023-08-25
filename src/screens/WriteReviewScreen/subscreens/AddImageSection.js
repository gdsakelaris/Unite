/**
 * @file AddImageSection.js
 * @description This file defines a section where user can add unlimited images for their review
 * @returns {JSX.Element} The AddImageSection component.
 */
import React, {useState} from 'react';
import SectionContainer from './SectionContainer';
import SectionTitle from './SectionTitle';
import ImageInputList from '../../../components/ImageInputList';
import { imageInput as styles } from '../css';
import addImageToImageList from '../../../utils/addImageToImageList';
import removeImageFromImageList from '../../../utils/removeImageFromImageList';
const AddImageSection = () => {
  const [imageUris, setImageUris] = useState([]) //list of picked images
  const addImageUri = (uri) => addImageToImageList(imageUris, setImageUris, uri) //add image function
  const removeImageUri = (uri) => removeImageFromImageList(imageUris, setImageUris, uri) //remove image function
  return (
    <SectionContainer>
      {/* Section title */}
      <SectionTitle title={'Add Image'}/>
      
       {/* Add image field */}
      <ImageInputList imageUris={imageUris} onAddImage={addImageUri} onRemoveImage={removeImageUri} style={styles.imageInput}/>
    </SectionContainer>
  );
}
export default AddImageSection;