//this file contains all provided services of the app
import { Image } from 'react-native'
import shelterPicture from '../../images/shelter.png'
import healthPicture from '../../images/health.jpeg'
import communityPicture from '../../images/community.jpeg'
import educationPicture from '../../images/education.jpeg'
import employmentPicture from '../../images/employment.jpeg'
import foodPicture from '../../images/food.jpeg'

//image's uri of the provided services
const shelterImageUri = Image.resolveAssetSource(shelterPicture).uri
const healthImageUri = Image.resolveAssetSource(healthPicture).uri
const communityImageUri = Image.resolveAssetSource(communityPicture).uri
const foodImageUri = Image.resolveAssetSource(foodPicture).uri
const educationImageUri = Image.resolveAssetSource(educationPicture).uri
const employmentImageUri = Image.resolveAssetSource(employmentPicture).uri

export const providedServices = [
  {name: "Shelter", urlImage: shelterImageUri, navigateTo: 'ShelterCard'},
  {name: "Education", urlImage: educationImageUri, navigateTo: 'EducationCard' },
  {name: "Community", urlImage: communityImageUri, navigateTo: 'CommunityCard'},
  {name: "Food", urlImage: foodImageUri, navigateTo: 'FoodResourceCard'},
  {name: "Employment", urlImage: employmentImageUri, navigateTo: 'EmploymentCard'},
  {name: "Health", urlImage: healthImageUri, navigateTo: 'HealthCard'}
]


