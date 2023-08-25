import * as ImagePicker from 'expo-image-picker'

/**
 * Picks and loads an image from the user's device library based on the provided image URI.
 *
 * @function
 * @param {function} onChangeImage - Callback function to handle the change of the image.
 * @param {string} imageUri - The current image URI.
 * @returns {void}
 */
export default pickAndLoadImage = (onChangeImage, imageUri) => {
  if (!imageUri) selectImage(onChangeImage)
  // If the placeholder already has an image, remove the image
  else onChangeImage(null)
}


 /**
 * Launches the image picker to select an image from the user's library.
 *
 * @async
 * @function
 * @param {function} onChangeImage - Callback function to handle the change of the image.
 * @returns {void}
 */
const selectImage = async (onChangeImage) => {
  try {
    //launch to user's library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5
    })
    
     // If an image is selected and not canceled
    if (!result.canceled){
        // Get the URI of the selected photo
        const imagePath = result.assets[0].uri
        
        // Place the selected image into the placeholder
        onChangeImage(imagePath)
        return imagePath
    }
    
  } catch (error) {
    console.log('Error reading an image', error)
  }
}