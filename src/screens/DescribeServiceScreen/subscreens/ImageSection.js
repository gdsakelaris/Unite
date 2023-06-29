import React, {useState} from 'react';
import SectionContainer from './SectionContainer';
import SectionTitle from './SectionTitle';
import ImageInputList from '../../../components/ImageInputList';
import { addImage as styles } from '../css';
const ImageSection = () => {
  const [imageUris, setImageUris] = useState([])
  const addImageUri = (uri) => setImageUris([...imageUris, uri])
  const removeImageUri = (uri) => setImageUris(imageUris.filter(imageUri => imageUri !== uri))
  return (
    <SectionContainer style={styles.addImageSection} >
      <SectionTitle title={'5 Add Image'}/>
      <ImageInputList imageUris={imageUris} onAddImage={addImageUri} onRemoveImage={removeImageUri}/>
    </SectionContainer>
  );
}
export default ImageSection;