import axios from "axios";
export const handleSignUp = (email, password, confirmPassword) => {
  // Insert your IP below
  axios
    .post("http://10.0.0.71:3000/register", {
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
