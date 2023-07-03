import * as ImagePicker from 'expo-image-picker'
export default pickAndLoadImage = (onChangeImage, imageUri) => {
  if (!imageUri) selectImage(onChangeImage)
  // alert is still not working properly
  else onChangeImage(null)
}

const selectImage = async (onChangeImage) => {
  try {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5
    })
    if (!result.canceled)
        console.log(result.assets[0].uri)
        onChangeImage(result.assets[0].uri)
    
  } catch (error) {
    console.log('Error reading an image', error)
  }
}