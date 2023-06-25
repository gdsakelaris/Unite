// SignUpScreen.js:
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import UniteLogo from "../images/Unite_Logo.png";
import Backgroundimg from "../images/login_image.png";
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const SignUpScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  const handleSignUp = () => {
    // Insert your IP below
    axios
      .post("http://<YOUR IP HERE>:5000/register", {
        name,
        email,
        password,
      })
      .then(function (response) {
        console.log(response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const placeHolderText = "Enter Email/Phone Number/Username";

  return (
    <ImageBackground source={Backgroundimg} style={styles.backgroundImage}>
      <LinearGradient
        colors={["#337155", "rgba(251, 164, 135, 0.8)"]} // Set the gradient colors
        style={styles.gradient}
      >
        <View style={styles.container}>
          <View style={styles.logocontainer}>
            <Image source={UniteLogo} style={styles.logo} />
          </View>

          <View style={styles.loginBox}>
            <View style={styles.sliderBox}>
              <TouchableOpacity
                style={styles.sliderSignUp}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.sliderSignUpText}> Log in</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.sliderLogin}>
                <Text style={styles.sliderLoginText}> Sign Up</Text>
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.input}
              placeholder={placeHolderText}
              placeholderTextColor="#F78154"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#F78154"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#F78154"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>

            <Text style={styles.orText}> OR </Text>

            <View style={styles.socialBox}>
              <View style={styles.circle}>
                <AntDesign name="google" size={30} color="black" />
              </View>
              <View style={styles.circle}>
                <FontAwesome name="facebook-f" size={30} color="black" />
              </View>
              <View style={styles.circle}>
                <AntDesign name="twitter" size={30} color="black" />
              </View>
            </View>

            <TouchableOpacity>
              <Text style={styles.guestText}>Continue as guest</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "90%",
    height: 30,
    marginBottom: "6%",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.2)",
    alignSelf: "center",
    fontSize: 12,
  },
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
    marginTop: "5%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  signupText: {
    marginTop: 20,
    color: "#0066cc",
    fontSize: 18,
    textDecorationLine: "underline",
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
  backgroundImage: {
    flex: 1,
  },

  gradient: {
    flex: 1,
  },

  placeholderText: {
    fontSize: 12,
    color: "#F78154",
  },

  loginBox: {
    width: "91.79%",
    height: "60.18%",
    backgroundColor: "white",
    borderRadius: 43,
    marginTop: "20%",
    padding: 20,
    verticalAlign: "middle",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  sliderBox: {
    width: "95%",
    height: 41.45,
    borderRadius: 12,
    backgroundColor: "white",
    marginTop: "10%",
    marginBottom: "20%",
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

  orText: {
    fontSize: 12,
    color: "#A8A7A7",
    alignSelf: "center",
    marginTop: "10%",
    marginBottom: "5%",
  },

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

  guestText: {
    color: "#F78154",
    fontSize: 14,
    textDecorationLine: "underline",
    alignSelf: "center",
    marginTop: "5%",
  },

  passBox: {
    display: "flex",
    flexDirection: "row",
  },

  eyeIcon: {
    marginLeft: "-10%",
    marginTop: 8,
  },

  forgotPass: {
    color: "#F78154",
    fontSize: 10,
    alignSelf: "flex-end",
    marginTop: "-5%",
  },
});

export default SignUpScreen;
