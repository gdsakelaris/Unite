//for login page
import axios from "axios";
import { Alert } from "react-native";
export default handleLogin = (onLogin, email, password) => {
  // Insert your IP below
  axios
    .post("http://10.0.0.249:3000/login", {
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