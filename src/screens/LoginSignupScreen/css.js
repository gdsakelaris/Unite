import { StyleSheet } from "react-native";
import { colors, fontScale } from "../../base";
export const container = StyleSheet.create({
  container: {
    flex:1.5,
    alignItems: "center",
   // justifyContent: "center",
    paddingHorizontal: 20,
  },
})

export const gradient = StyleSheet.create({
  gradient: {
    flex: 1,
    borderBottomEndRadius: 20,
  }
})

export const logo = StyleSheet.create({
  logo: {
    backgroundColor: colors.white, 
    marginTop: '25%'
  }
})

export const inputBox = StyleSheet.create({
  inputBox: {
    width: '90%',
    height: '60%',
    backgroundColor: colors.white,
    borderRadius: 43,
    top: '35%',
    padding: 20,
    position:'absolute',
    alignSelf:'center',
    shadowColor:colors.lightdark,
    shadowOpacity:0.5,
    shadowRadius:10,
    borderWidth:1,
    borderColor:colors.lightgray,
    shadowOffset:{height: 10},
  
    
  },
})

export const slider = StyleSheet.create({
  sliderBox: {
    width: "90%",
    height: '10%',
    borderRadius: 12,
    backgroundColor: colors.white,
    marginTop: "10%",
    marginBottom: "15%",
    flexDirection: "row",
    shadowColor:colors.lightdark,
    shadowOpacity:0.25,
    shadowRadius:10,
    borderWidth:1,
    borderColor:colors.lightgray,
    shadowOffset:{height: 9},
    alignSelf:'center',
    
  },

  clickedSlider: {
    flex:1,
    backgroundColor: colors.lightorange,
    borderRadius:14,
    width: 133,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  clickedSliderText: {
    color: colors.white,
    fontSize: 18 / fontScale,
    fontWeight: "bold",
  },

  nonClickedSlider: {
    flex:1,
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  nonClickedSliderText: {
    fontSize: 18 / fontScale,
    fontWeight: "bold",
    color: colors.lightorange,
  },
})

export const inputField = StyleSheet.create({
  input: {
    width: "90%",
    height: 30,
    marginBottom: "6%",
    borderBottomWidth: 1,
    borderBottomColor: colors.lightgray,
    alignSelf: "center",
    fontSize: 15 / fontScale,
  },
})

export const forgotPass = StyleSheet.create({
  forgotPass: {
    color: colors.lightorange,
    fontSize: 14 / fontScale,
    alignSelf: "flex-end",
  },
})

export const loginBtn = StyleSheet.create({
  button: {
    width: "90%",
    height: "11%",
    backgroundColor: colors.lightorange,
    borderRadius: 43,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    shadowColor:colors.lightdark,
    shadowOpacity:0.25,
    shadowRadius:10,
    borderWidth:1,
    borderColor:colors.lightgray,
    shadowOffset:{ height: 9 },
    marginTop: "10%",
  },
  buttonText: {
    color: colors.white,
    fontSize: 24 / fontScale,
    fontWeight: "bold",
  },
})

export const orText = StyleSheet.create({
  orText: {
    fontSize: 12 / fontScale,
    color: "#A8A7A7",
    alignSelf: "center",
    marginTop: "7%",
    marginBottom: "5%",
  },
})

export const socialBox = StyleSheet.create({
   socialBox: {
    width: '50%',
    height: '10%',
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  socialIcon: {
    backgroundColor:colors.white,
    borderColor:colors.lightgray,
    borderWidth:1
  },
})

export const guestText = StyleSheet.create({
  guestText: {
    color: colors.lightorange,
    fontSize: 14 / fontScale,
    textDecorationLine: "underline",
    alignSelf: "center",
    marginTop: "5%",
  }
})

export const bottomPart= StyleSheet.create({
  bottomPart: {
    flex:1, 
    backgroundColor: colors.white
  }
})