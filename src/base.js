//This file will contain all color references as well as several libraries that will be used repeatedly throughout the app.
import { PixelRatio } from "react-native"

//this function will return the font scale of the user's device
//the returned property of this function will make the text resizes automatically based on the device's fontSize preference
export const fontScale = PixelRatio.getFontScale()

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
  switchOn: '#0F993E'
}
