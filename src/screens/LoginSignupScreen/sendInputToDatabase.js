import axios from "axios";
import { Alert } from "react-native";
export const handleLogin = (onLogin, email, password) => {
  // Insert your IP below
  axios
    .post("http://10.0.0.71:3000/login", {
      email,
      password,
    })
    .then((response) => {
      console.log(response.data);
      onLogin();
    })
    .catch((error) => {
      Alert.alert(
        "Error",
        "Could not log in. Please check your credentials."
      );
      console.log(error);
    });
};