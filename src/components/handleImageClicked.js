import askForAccessPhotoPermission from "../utils/askForAccessPhotoPermission"
import pickAndLoadImage from "../utils/pickAndLoadImage"
export default handleImageClicked = (onChangeImage, imageUri) => {
  //ask photo access permission
  const granted = askForAccessPhotoPermission()
  //if the access is not granted, raise an alert
  if (!granted) alert('You need too enable permission')
  //if the access is granted, go into user's device library, pick and then load image
  else pickAndLoadImage(onChangeImage, imageUri)
}