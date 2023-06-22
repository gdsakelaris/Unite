import { StyleSheet } from "react-native";
import {fontScale, colors} from '../../base'
export const settingsLanguage = StyleSheet.create({
  rowContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightdark,
    height: 80 
  },
  languageText: {
    marginLeft: '4%',
    flex: 1,
    fontSize: 18 / fontScale,
  },
})