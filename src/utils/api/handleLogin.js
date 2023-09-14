/**
 * @function handleLogin
 * @description Send to user's crendential to backend for verification when user logs in
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @param {Function} loggingIn - A function which directs user to hompage once their crendentials are verified
 * @param {Function} savedUserAuth - A function that save userToken and userInfo returned from the backend to user's local storage. 
 * @param {Function} setIsLoading - A function that start and end loading state
 */


import axios from "axios";
import { LOGIN_ROUTE } from "./apiRoutes";

export default handleLogin = async (email, password, loggingIn, saveUserAuth, setIsLoading) => {
  
//api url
  try {
    setIsLoading(true)
    //Send post request here
    const response = await axios.post(LOGIN_ROUTE, {
      email,
      password
    })
    const userInfo = response.data.data.client
    const token = response.headers.authorization.split(' ')[1]
    saveUserAuth(token, userInfo)
    loggingIn()
    setIsLoading(false)

  } catch (err) {
    alert("Login failed")
    setIsLoading(false)

  }
};