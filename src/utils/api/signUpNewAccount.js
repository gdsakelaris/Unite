/**
 * @function signUpNewAccount
 * @description Signup/create new account
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @param {string} name - User's name
 * @param {Function} switchPage - A function that direct user to login page after they have created new account successfully
 */


import axios from "axios";
import { SIGNUP_ROUTE } from "./apiRoutes";
export default signUpNewAccount = async (name, email, password, switchPage) => {
  //Move to login page after sign up account successfully
  //api url
  console.log(name, email, password)
  console.log(SIGNUP_ROUTE)
  try {
    //Send post request here
    const response = await axios.post(SIGNUP_ROUTE,
      {
        name: name,
        email: email,
        password: password
      }
    )
    switchPage()

  } catch (err) {
    alert("Can't signup account")
  }
};