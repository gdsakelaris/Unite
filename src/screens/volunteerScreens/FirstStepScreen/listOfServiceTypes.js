//provided services
import shelterPicture from '../../../images/shelter.png'
import healthPicture from '../../../images/health.jpeg'
import communityPicture from '../../../images/community.jpeg'
import educationPicture from '../../../images/education.jpeg'
import employmentPicture from '../../../images/employment.jpeg'
import foodPicture from '../../../images/food.jpeg'
import { Image } from 'react-native'
const shelterImageUri = Image.resolveAssetSource(shelterPicture).uri
const healthImageUri = Image.resolveAssetSource(healthPicture).uri
const communityImageUri = Image.resolveAssetSource(communityPicture).uri
const foodImageUri = Image.resolveAssetSource(foodPicture).uri
const educationImageUri = Image.resolveAssetSource(educationPicture).uri
const employmentImageUri = Image.resolveAssetSource(employmentPicture).uri
export const listOfServiceTypes = [
      {name: "Shelter", urlImage: shelterImageUri},
      {name: "Education", urlImage: educationImageUri},
      {name: "Community", urlImage: communityImageUri},
      {name: "Food", urlImage: foodImageUri},
      {name: "Employment", urlImage: employmentImageUri},
      {name: "Health", urlImage: healthImageUri}
]