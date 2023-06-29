import { StyleSheet } from "react-native";
import { fontScale, colors } from "../../base";
export const nextButton = StyleSheet.create({
  nxtButton: {

    width: '35%',
    height: 50,
    borderRadius: 20,
    backgroundColor: '#F78154',
    alignItems: 'center',
    padding: 3,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'flex-end'
},

nxtButtonText: {
    color: colors.white,
    fontSize: 30 / fontScale,
    fontWeight: 'bold',
    paddingRight: 3,
},
nxtButtonContainer: {
  width:'100%', 
  bottom:'4%', 
  paddingHorizontal:10, 
  height:70
}
})