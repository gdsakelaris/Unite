import React, {useState} from 'react';
import SectionContainer from './SectionContainer';
import SectionTitle from './SectionTitle';
import ImageInputList from '../../../components/ImageInputList';
import { imageInput as styles } from '../css';
const AddImageSection = () => {
  const [imageUris, setImageUris] = useState([])
  const addImageUri = (uri) => setImageUris([...imageUris, uri])
  const removeImageUri = (uri) => setImageUris(imageUris.filter(imageUri => imageUri !== uri))
  return (
    <SectionContainer>
      <SectionTitle title={'Add Image'}/>
      <ImageInputList imageUris={imageUris} onAddImage={addImageUri} onRemoveImage={removeImageUri} style={styles.imageInput}/>
    </SectionContainer>
  );
}
export default AddImageSection;