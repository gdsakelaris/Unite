/**
 * Renders a contact information view with an appropriate icon on the resource card.
 *
 * @function
 * @param {string} location - The location information of the resource.
 * @param {string} number - The phone number of the resource.
 * @returns {JSX.Element} - A view of contact information with an icon on the resource card.
 */

import { locationIcon, phoneIcon } from "../icons"
import { View } from "react-native"
import { Text } from "react-native-paper"
import { resourceCard as styles } from "../css"
export default renderResourceCardContactInfo = (location, number) => {
  if (location) return (<View style={styles.resourceCardContactInfoContainer}>
                          {locationIcon}
                          <Text style={styles.resourceCardcontactInfo}>{location}</Text>
                        </View>)
  else return (<View style={styles.resourceCardContactInfoContainer}>
                {phoneIcon}
                <Text style={styles.resourceCardcontactInfo}>{number}</Text>
              </View>)
}
