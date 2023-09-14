import { bookmarkedIcon, documentIcon, helpIcon, logoutIcon, settingIcon } from '../icons'

/**
 * Utility function to get the icon component based on the icon name.
 * @param {string} iconName - The name of the icon.
 * @returns {JSX.Element} - The icon component.
 */

export default getOptionIcon = (iconName) => {
  if (iconName === 'bookmark') return bookmarkedIcon
  else if (iconName === 'md-document-outline') return documentIcon
  else if (iconName === 'settings-sharp') return settingIcon
  else if (iconName === 'help-with-circle') return helpIcon
  else return logoutIcon
}
