import { locationText as styles } from "./css"
export const handleLocationTextFocused = (setIsFocusHook) => (
  setIsFocusHook(true)
)
export const handleLocationTextBlurred = (setIsFocusHook) => (
  setIsFocusHook(false)
)

export const getSpecificStyleForlocationText = (isFocus) => {
  if (isFocus) return [styles.locationText, { textDecorationLine: 'underline' }]
  else return styles.locationText
}