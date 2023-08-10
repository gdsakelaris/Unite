// for sign up screen
import axios from "axios";
export default signUpNewAccount = (name, email, password, confirmPassword, switchPage) => {
  // Insert your IP below
  // axios
  //   .post("http://<IP Address>:5000/register", {
  //     confirmPassword,
  //     email,
  //     password,
  //   })
  //   .then(function (response) {
  //     console.log(response.data.token);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  console.log(email, password, confirmPassword, name)
  switchPage()
};