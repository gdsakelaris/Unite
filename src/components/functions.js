// this file will contains all the functions that component used
import * as ImagePicker from 'expo-image-picker'
import { locationIcon, phoneIcon} from './icons'
import { resourceCard as styles } from './css'
import { Avatar } from 'react-native-paper'
//Image Picker
export const askForAccessPhotoPermission = async () => {
  const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync()
  return granted

}

export const handleImageClicked = (onChangeImage, imageUri) => {
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
//Resource Card
export const renderResourceCardContactInfoBasedOnIconName = (location, number) => {
  if (location) return (<View style={styles.resourceCardContactInfoContainer}>
                          {locationIcon}
                          <Text style={styles.resourceCardcontactInfo}>{location}</Text>
                        </View>)
  else return (<View style={styles.resourceCardContactInfoContainer}>
                {phoneIcon}
                <Text style={styles.resourceCardcontactInfo}>{number}</Text>
              </View>)
}

//AvatarIcon
// this function will receive one param and return the correct type of Avatar based on that param
export const getAvartaType = (type) => {
  if (type.icon) return <Avatar.Icon {...type}/>
  else if (type.source) {
    const {source, ...remainingSettings} = type
    return <Avatar.Image source={{uri: source}} {...remainingSettings} />}
  else return <Avatar.Text {...type}/>

}