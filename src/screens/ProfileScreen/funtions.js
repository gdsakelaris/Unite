import { bookmarkedIcon, documentIcon, helpIcon, logoutIcon, settingIcon } from "./icons"
export const goToEditPage = (navigation) => navigation.navigate('EditProfile')
export const getOptionIcon = (iconName) => {
  if (iconName === 'bookmark') return {bookmarkedIcon}
  else if (iconName === 'md-document-outline') return {documentIcon}
  else if (iconName === 'settings-sharp') return {settingIcon}
  else if (iconName === 'help-with-circle') return {helpIcon}
  else return {logoutIcon}
}