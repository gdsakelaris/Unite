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
    marginLeft: '2%',
  }
})

export const submitBtn = StyleSheet.create({
  publishBtn: {
    width:'80%',
    height: '6%',
    alignSelf:'center',
    justifyContent:'center',
    bottom:'5%',
    borderWidth: 0,
    alignItems: 'center',

  },
  publishBtnText: {
    color: colors.white, 
    fontSize: 25 / fontScale,
    fontWeight:'700',
    paddingHorizontal:'4%',
    paddingVertical:'1%',
    textAlign: 'center',
  }

})