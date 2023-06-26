import axios from "axios";
export const handleLogin = (onLogin, email, password) => {
  // Insert your IP below
  axios
    .post("http://<IP>/login", {
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