import { StyleSheet } from "react-native";
//import { fontScale, colors } from "../../base";
export const loginScreenContainer = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  
  // title: {
  //   fontSize: 24,
  //   fontWeight: "bold",
  //   marginBottom: 20,
  // },

  
  // signupText: {
  //   marginTop: 20,
  //   color: "#0066cc",
  //   fontSize: 18,
  //   textDecorationLine: "underline",
  // },

  // placeholderText: {
  //   fontSize: 12,
  //   color: "#F78154",
  // },

  // passBox: {
  //   display: "flex",
  //   flexDirection: "row",
  //   alignSelf: "center",
  //   marginRight: "3%",
  //   marginLeft: "-3%",
  // },

  // eyeIcon: {
  //   marginLeft: "-10%",
  //   marginTop: 8,
  // },
})

export const gradient = StyleSheet.create({
  gradient: {
    flex: 1
  }
})

export const logo = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
  },
  logocontainer: {
    width: "45%",
    height: "18.95%",
    backgroundColor: "white",
    borderRadius: 100,
    alignItems: "center",
    padding: 5,
    marginBottom: "-10%",
    marginTop: "15%",
  },
})

export const loginBox = StyleSheet.create({
  loginBox: {
    width: "91.79%",
    height: "60.18%",
    backgroundColor: "white",
    borderRadius: 43,
    marginTop: "20%",
    padding: 20,
    verticalAlign: "middle",
  },
})

export const slider = StyleSheet.create({
  sliderBox: {
    width: "95%",
    height: 41.45,
    borderRadius: 12,
    backgroundColor: "white",
    marginTop: "10%",
    marginBottom: "25%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 1,
    marginLeft: "2%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    border: 1.5,
    borderColor: "#EAEAF5",
  },

  sliderLogin: {
    backgroundColor: "#F78154",
    borderRadius: 10,
    width: 133,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  sliderLoginText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },

  sliderSignUp: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  sliderSignUpText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#F78154",
  },
})

export const inputField = StyleSheet.create({
  input: {
    width: "90%",
    height: 30,
    marginBottom: "6%",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.2)",
    alignSelf: "center",
    fontSize: 12,
  },
})

export const forgotPass = StyleSheet.create({
  forgotPass: {
    color: "#F78154",
    fontSize: 10,
    alignSelf: "flex-end",
    marginTop: "-3%",
    marginRight: "-3%",
  },
})

export const loginBtn = StyleSheet.create({
  button: {
    width: "90%",
    height: 41,
    backgroundColor: "#F78154",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 43,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: "13%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
})

export const orText = StyleSheet.create({
  orText: {
    fontSize: 12,
    color: "#A8A7A7",
    alignSelf: "center",
    marginTop: "10%",
    marginBottom: "5%",
  },
})

export const socialBox = StyleSheet.create({
   socialBox: {
    width: 169,
    height: 48.88,
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  circle: {
    width: "28%",
    aspectRatio: 1,
    borderRadius: "50%",
    borderWidth: 1,
    borderColor: "#EAEAF5",
    justifyContent: "center",
    alignItems: "center",
  },
})

export const guestText = StyleSheet.create({
  guestText: {
    color: "#F78154",
    fontSize: 14,
    textDecorationLine: "underline",
    alignSelf: "center",
    marginTop: "5%",
  }
})