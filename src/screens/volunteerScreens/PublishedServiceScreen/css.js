import { StyleSheet } from "react-native";
import { fontScale, colors } from "../../../base";
export const publishedServiceContainer = StyleSheet.create({
  publishedServiceContainer: {
    flex: 1,
    backgroundColor: colors.white,
  }
})

export const title = StyleSheet.create({
  title: {
    padding: 14,
    maxWidth: 327,
  }
})

export const addBtn = StyleSheet.create({
  addbtn: {
    display: "flex",
    flexDirection: "row",
    width: '40%',
    height: '7%',
    backgroundColor: "#F78154",
    borderRadius: '15%',
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    top: "90%",
    left: "30%",
  },

  addbtntext: {
    fontWeight: "bold",
    color: "white",
    fontSize: 26 / fontScale,
    paddingTop:'5%',
    
  },
  addbtnContent: {
    width: '100%',
    
  }
})