import { StyleSheet } from "react-native";
import {colors, fontScale} from '../../base'
export const settingConnectedContainer = StyleSheet.create({
  settingConnectedcontainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 16 / fontScale,
  },

  flex_container: {
    display: "flex",
    flexDirection: "row",
    margin: 15,
    alignItems: "center",
    paddingTop: 1,
    paddingBottom: 15,
  },

  font: {
    fontSize: 22,
  },
})
export const settingConnectedOpt = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 21,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightdark,
    marginRight: 6,
  }
})