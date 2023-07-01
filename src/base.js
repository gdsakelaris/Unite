//This file will contain all color references as well as several libraries that will be used repeatedly throughout the app.
import { PixelRatio } from "react-native"
import * as ExpoIcon from "@expo/vector-icons";
/////////////////////////////////////////////////////////////
//fontScale
//this function will return the font scale of the user's device
//the returned property of this function will make the text resizes automatically based on the device's fontSize preference
export const fontScale = PixelRatio.getFontScale()
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//Colors
//an object of color references
export const colors = {
  lightorange: '#F78154',
  white: '#FFFFFF',
  darkorange: '#F24E1E',
  lightgray: '#F4F4F4',
  lightdark: '#4E4E4E',
  green: '#337155',
  orange: '#E87F10',
  transparent: "transparent",
  lightpink: '#ffe4df',
  switchOff: '#AD2525',
  switchOn: '#0F993E',
  mediumgray:'#D9D9D9',
  black: '#000000'
}
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//icon:
//PHONE
export const renderPhoneIcon = (iconStyle, iconSize, iconColor) => <ExpoIcon.Ionicons name="ios-call-outline"  size={iconSize ? iconSize : 24 } color={iconColor ? iconColor : colors.black} style={iconStyle}/>

//PHONE WITH THICKER BORDER WIDTH
export const renderPhoneIconWithThickerWidth = (iconStyle, iconSize, iconColor) => <ExpoIcon.Feather name="phone"  size={iconSize ? iconSize : 24 } color={iconColor ? iconColor : colors.black} style={iconStyle}/>


//LOCATION SIGN
export const renderLocationSignIcon = (iconStyle, iconSize, iconColor) => <ExpoIcon.EvilIcons name="location" size={iconSize ? iconSize : 24 } color={iconColor ? iconColor : colors.black} style={iconStyle}/>

//LOCATION SIGN WITH THICKER BORDER WIDTH
export const renderLocationSignIconWithThickerWidth = (iconStyle, iconSize, iconColor) => <ExpoIcon.Ionicons name="md-location-outline"  size={iconSize ? iconSize : 24 } color={iconColor ? iconColor : colors.black} style={iconStyle}/>


//GLOBAL 
export const renderGlobalIcon = (iconStyle, iconSize, iconColor) => <ExpoIcon.Ionicons name="globe-sharp" size={iconSize ? iconSize : 24 } color={iconColor ? iconColor : colors.black} style={iconStyle}/>

//ARROW DOWN
export const renderArrowDownIcon = (iconStyle, iconSize, iconColor) => <ExpoIcon.MaterialIcons name="keyboard-arrow-down"  size={iconSize ? iconSize : 24 } color={iconColor ? iconColor : colors.black} style={iconStyle}/>
/////////////////////////////////////////////////////////////
