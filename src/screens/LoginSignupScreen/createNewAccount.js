import axios from "axios";
export const handleSignUp = (email, password, confirmPassword) => {
  // Insert your IP below
  axios
    .post("http://<IP Address>:5000/register", {
      confirmPassword,
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
