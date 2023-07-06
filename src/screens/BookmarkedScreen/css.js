import { StyleSheet } from "react-native";
import {fontScale, colors} from '../../base'
//bookmarkedScreen container
export const bookmarkedScreenContainer = StyleSheet.create({
  bookmarkedScreenContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
})

//icons
export const icons = StyleSheet.create({
  locationIcon: {
    marginLeft: -4,
  }
})

//bookmarked card
export const bookmarkedCard = StyleSheet.create({
  bookmarkedCardContainer: {
    flexDirection: "row",
    width: "90%",
    height: '17%',
    backgroundColor: colors.white,
    marginTop: '6%',
   //marginBottom: -6,
    marginHorizontal: 13,
    borderRadius: '10%',
    padding: 10,
    shadowColor: colors.lightdark,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.55,
    shadowRadius: 3,
    elevation: 20,
    borderColor: colors.lightdark,
    borderWidth: 0.5,
  },

  bookmarkedCardInfoContainer: {
    marginLeft: '7%',
    width: "70%",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20 / fontScale,
    color: colors.lightorange,
    fontWeight: "bold",
    marginBottom: '3%',
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  info: {
    marginLeft: 4,
    fontSize:16 / fontScale
  },
})

//remove btn
export const removeBtn = StyleSheet.create({
  removeButton: {
    position: "absolute",
    bottom: '20%',
    right: '4%',
    width: '30%',
    height: '45%',
    backgroundColor: "#F24E1E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: '6%',
  },
  removeButtonText: {
    color: colors.white,
    fontSize: 16 / fontScale,
    fontWeight:'500'
  },
})