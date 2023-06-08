# Read Me!

---

## **Includes functionality** that is _not yet merged into the main Unite repository_:

- **Implementation of user registration, login, and authentication functionality**

---

## To run/test this code:

1. Clone the latest version of my branch (Daniel-Unite-Demo)

   - Run: `git clone -b Daniel-Unite-Demo https://github.com/URestAppOrganization/Unite.git`

2. Add this ".env" file to the "backend" folder:

   - **_Message me so I can send you the contents of the `.env` file_**

3. Install dependencies

   - Run: `npm install --force` if necessary

4. Update LoginScreen.js and SignUpScreen.js using your local IP address where indicated

5. From the backend folder's command line, run: `node server.js`

6. From the main project/root folder's command line, run: `expo start` or `npx expo start`

7. "Mess around" with Expo simulator
   - Note: You can use `email = test` and `password = test` to log in. Other saved credentials can be found in the Unite database on MongoDB Atlas.
   - Note: Logout functionality has not yet been implemented, meaning you have to restart the Expo build in order to go back to the login screen.

---

## Here's a summary of how this code works:

### **User.js:**

- Defines a Mongoose schema for the User model with fields for name, email, and password.
- The name field is of type String and is required.
- The email field is of type String, is required, and must be unique.
- The password field is of type String and is required.
- The schema includes a timestamps option that automatically adds createdAt and updatedAt fields to the document.

### **server.js:**

- Requires necessary dependencies, including **_Express, Mongoose, and JWT_**.
- Retrieves the JWT secret key and MongoDB connection string from the environment variables.
- Imports the User model defined in User.js.
- Sets up Express middleware for CORS and JSON parsing.
- Connects to the MongoDB database using the provided connection string.
- Defines the authenticateJWT middleware function that verifies and decodes JWT tokens.
- Defines the /register endpoint that handles user registration:
  - Retrieves the name, email, and password from the request body.
  - Checks if a user with the same email already exists in the database.
  - If a user exists, returns a response indicating that the user already exists.
  - If the user doesn't exist, creates a new User instance with the provided information.
  - Saves the user to the database.
  - Generates a JWT token with the user's ID as the payload and signs it with the secret key.
  - Returns the token in the response.
- Defines the /login endpoint that handles user login:
  - Retrieves the email and password from the request body.
  - Finds a user with the provided email in the database.
  - If no user is found, returns a response indicating invalid credentials.
  - Compares the provided password with the user's password.
  - If the passwords match, generates a JWT token with the user's ID as the payload and signs it.
  - Returns the token in the response.
- Defines a protected endpoint /protected-endpoint that requires authentication to access.
- Starts the server on port 5000.

### **.env:**

- Contains environment variables, including the JWT secret key and MongoDB connection string.

### **SignUpScreen.js:**

- Defines a functional component for the sign-up screen.
- Uses state variables (name, email, password, confirmPassword) to manage form input values.
- Uses the useNavigation hook from React Navigation to access the navigation object.
- Defines a handleSignUp function that sends a POST request to the /register endpoint with the name, email, and password.
- If the registration is successful, the response includes a token that can be accessed in response.data.token.
- Renders a sign-up form view with input fields for name, email, password, and confirm password.
- Provides a button to trigger the handleSignUp function and a link to navigate to the login screen.

### **LoginScreen.js:**

- Defines a functional component for the login screen.
- Uses state variables (email, password) to manage form input values.
- Uses the useNavigation hook from React Navigation to access the navigation object.
- Defines a handleLogin function that sends a POST request to the /login endpoint with the email and password.
- If the login is successful, the response includes a token that can be accessed in response.data.token.
- Calls the onLogin function provided as a prop to set the isLoggedIn state to true.
- Renders a login form view with input fields for email and password.
- Provides a button to trigger the handleLogin function and a link to navigate to the sign-up screen.

### ...

When a user wants to create a new account, they enter their name, email, password, and confirm password on the sign-up screen. After clicking the "Sign Up" button, a POST request is sent to the /register endpoint on the server. The server checks if a user with the same email already exists. If not, a new User instance is created with the provided information and saved to the database. A JWT token is generated and returned in the response. The token represents the user's authentication and can be used to identify the user in subsequent requests.

When a user wants to log in, they enter their email and password on the login screen. After clicking the "Login" button, a POST request is sent to the /login endpoint on the server. The server checks if a user with the provided email exists. If so, it compares the provided password with the stored password. If the passwords match, a JWT token is generated and returned in the response. The token represents the user's authentication and can be used to identify the user in subsequent requests.

The authentication process relies on JWT tokens. Tokens are created and signed by the server using the JWT secret key. When a user registers or logs in successfully, they receive a token that can be included in the request headers for protected endpoints. The authenticateJWT middleware verifies and decodes the token, and if valid, allows access to the protected endpoint.

---
