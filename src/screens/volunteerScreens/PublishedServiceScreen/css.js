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
    height: '6%',
    backgroundColor: "#F78154",
    borderRadius: '20%',
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    top: "90%",
    left: "30%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },

  addbtntext: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25 / fontScale,
    paddingTop:'5%',
    
  },
  addbtnContent: {
    width: '100%',
    
  }
})