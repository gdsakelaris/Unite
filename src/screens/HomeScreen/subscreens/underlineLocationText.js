/**
 * @file underlineLocationText.js
 * @description This file contains functions to manage the decoration line under the location text when hovered.
 */

import { locationText as styles } from "../css"

/**
 * Function to handle when the user's finger does a long press on the location text.
 *
 * @function
 * @param {function} setIsFocusHook - A state setter function to update the focus state.
 */
export const handleLocationTextFocused = (setIsFocusHook) => (
  setIsFocusHook(true)
)


/**
 * Function to handle when the user's finger moves away from the location text.
 *
 * @function
 * @param {function} setIsFocusHook - A state setter function to update the focus state.
 */
export const handleLocationTextBlurred = (setIsFocusHook) => (
  setIsFocusHook(false)
)


/**
 * Function to render the specific style for location text when it is hovered and when it is not.
 *
 * @function
 * @param {boolean} isFocus - A boolean value indicating whether the location text is focused (hovered).
 * @returns {Array|object} - The style for the location text.
 */
export const getSpecificStyleForlocationText = (isFocus) => {
  if (isFocus) return [styles.locationText, { textDecorationLine: 'underline' }]
  else return styles.locationText
}