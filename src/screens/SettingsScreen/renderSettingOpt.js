import SettingOptWithSwitchBtn from "./subscreens/SettingOptWithSwitchBtn"
import SettingOptWithoutSwitchBtn from "./subscreens/SettingOptWithoutSwitchBtn"

/**
 * Determines the type of setting option component to be returned based on the given argument. Use this function to decide whether to render the setting option with switch button
 * @param {Object} opt - The setting option object.
 * @param {number} i - The index of the setting option in the list.
 * @param {Object} navigation - The navigation object from React Navigation.
 * @returns {JSX.Element} The appropriate setting option component.
 */
export const renderSettingOpt = (opt, i, navigation) => {
  if (opt.title === 'Push Notification' || opt.title === 'Dark Mode') return <SettingOptWithSwitchBtn title={opt.title} key={i.toString()}/>
  else return <SettingOptWithoutSwitchBtn title={opt.title} onPress={() => navigateToScreens(navigation, opt.navigateTo)} key={i.toString()}/>
}

/**
 * Navigates to the specified screen using the navigation object.
 * @param {Object} navigation - The navigation object from React Navigation.
 * @param {string} navigateTo - The name of the screen to navigate to.
 */
const navigateToScreens = (navigation, navigateTo) => navigation.navigate(navigateTo)