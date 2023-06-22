import { StyleSheet } from "react-native";
import {fontScale, colors} from '../../base'
export const bookmarkedScreenContainer = StyleSheet.create({
  bookmarkedScreenContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
})

export const icons = StyleSheet.create({
  locationIcon: {
    marginRight: -1,
    marginLeft: -4,
  },
  phoneIcon: {
    marginRight: -1,
  },
})

export const bookmarkedCard = StyleSheet.create({
  bookmarkedCardContainer: {
    flexDirection: "row",
    width: "90%",
    height: 103,
    backgroundColor: colors.white,
    marginTop: 37,
    marginBottom: -6,
    marginHorizontal: 13,
    borderRadius: 12,
    padding: 10,
    shadowColor: "#A9a9a9",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.55,
    shadowRadius: 3,
    elevation: 20,
    borderColor: "#285943",
    borderWidth: 0.5,
  },

  bookmarkedCardInfoContainer: {
    marginLeft: 31,
    width: "70%",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    color: "#E87F10",
    fontWeight: "bold",
    marginBottom: 12,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  info: {
    marginLeft: 4,
  },
})

export const removeBtn = StyleSheet.create({
  removeButton: {
    position: "absolute",
    bottom: 17,
    right: 10,
    width: 80,
    height: 25,
    backgroundColor: "#F24E1E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: 105,
  },
  removeButtonText: {
    color: "white",
    fontSize: 12,
  },
})