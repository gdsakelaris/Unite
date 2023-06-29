import { StyleSheet } from "react-native";
import { fontScale, colors } from "../../../base";
export const previewServiceContainer = StyleSheet.create({
  previewServiceContainer: {
    flex: 1, 
    backgroundColor: colors.white
  }
})

export const title = StyleSheet.create({
  title: {
    fontSize: 36 / fontScale,
    fontWeight: "bold",
    marginLeft: '2%',
  }
})

export const submitBtn = StyleSheet.create({
  publishBtn: {
    width:'80%',
    height: '7%',
    bottom:'4%',
    alignSelf:'center',
    justifyContent:'center',
    
  },
  publishBtnText: {
    color: colors.white, 
    fontSize: 20 / fontScale, 
    fontWeight:'700' 
  }

})