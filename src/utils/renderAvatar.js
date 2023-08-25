/**
 * Renders an Avatar component based on the provided type settings.
 *
 * @function
 * @param {Object} type - The settings for rendering the Avatar component. An object that contains all the props of the Avatar react-native-paper component. Go to react native paper and checkout Avatar component for all the props
 * @returns {JSX.Element} - The rendered Avatar component.
 */

import { Avatar } from "react-native-paper"
export default renderAvarta = (type) => {
  // Render an Avatar.Icon component if the type has an icon property.
  if (type.icon) return <Avatar.Icon {...type}/>

  // If the type has a source property, extract it and create an Avatar.Image component.
  else if (type.source) {
    const {source, ...remainingSettings} = type
    return <Avatar.Image source={{uri: source}} {...remainingSettings} />}

  // Otherwise, render an Avatar.Text component
  else return <Avatar.Text {...type}/>
}