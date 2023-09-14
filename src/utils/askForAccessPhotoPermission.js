/**
 * @function askForAccessPhotoPermission
 * @description Requests user permission to access the device's photo library using Expo's ImagePicker.
 * @returns {Promise<boolean>} A promise that resolves to `true` if permission is granted, otherwise `false`.
 */

import * as ImagePicker from 'expo-image-picker'
export default askForAccessPhotoPermission = async () => {
  /**
   * Requests media library permissions asynchronously from Expo's ImagePicker.
   * Destructures the `granted` property from the response.
   */
  const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync()
  return granted
}
