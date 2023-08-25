/**
 * Handles the click event on an image, which triggers the process of asking for photo access permission,
 * picking an image from the user's device library, and loading the selected image.
 *
 * @async
 * @function
 * @param {function} onChangeImage - Callback function to handle the change of the image.
 * @param {string} imageUri - The current image URI. This represent the image URI that the image container is displaying. If the image container with image URI is clicked, it will remove the image URI of that image container. However if the value of imageUri is null, it means the image container is currently not displaying any images, and let user go to their photos and pick image. 
 * @returns {void}
 */

import askForAccessPhotoPermission from "../utils/askForAccessPhotoPermission"
import pickAndLoadImage from "../utils/pickAndLoadImage"
export default handleImageClicked = async (onChangeImage, imageUri) => {
  //Ask photo access permission
  const granted = await askForAccessPhotoPermission()

  //If the access is not granted, raise an alert
  if (!granted) {
    alert('You need too enable permission')
    return
  }
  // If permission is granted, pick and load the image
  pickAndLoadImage(onChangeImage, imageUri)
}