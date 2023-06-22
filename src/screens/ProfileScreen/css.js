import { StyleSheet } from "react-native"
import {colors, fontScale} from '../../base'
export const profileContainer = StyleSheet.create({
  profileContainer: {
    flex: 1,
  },
})
export const imageContainer = StyleSheet.create({
  imgContainer: {
    flex: 1,
    backgroundColor: colors.lightpink,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
})

export const profileOptionsContainer = StyleSheet.create({
  profileOptContainer: {
    flex: 1.2,
    paddingHorizontal: 20,
  }
})

export const editBtn = StyleSheet.create({
  editButton: {
    backgroundColor: "green",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  editButtonTxt: {
    color: colors.white
  }
})

export const profileOption = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    // borderBottomWidth: 1,
    // borderBottomColor: "#ccc",
  },
})