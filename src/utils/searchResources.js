//this was written for mongodb, and needs to be converted to mysql


//import { Alert } from "react-native";
//import userip from "./getuserip";
//import { Location } from "expo-location"; // Import the Location object

//const searchByLocation = (latitude, longitude, maxDistance, kindOfResource) => { 
    //, token) => { //included for when we do authentication

    //take in parameters from resourcedataarray

    //this will proabaly need to change into an sql query
  //  const queryParams = new URLSearchParams({
    //    userLatitude: latitude.toString(),
      //  userLongitude: longitude.toString(),
       // maxDistance: maxDistance.toString(),
       // kindofresource: kindOfResource,
      //}).toString();


    //this will likely need to change as we move on

    //this is the url query
    //console.log(queryParams);
    //const url = `https://energetic-teal-dugong.cyclic.app/resource/getResources/location?${queryParams}`;

    //console.log(url);
    //fetch(url, {
      //  method: 'GET',
        //headers: {
          //  'Content-Type': 'application/json',
        //}
   // })
    //.then((response) => {
      //  if (!response.ok) {
        //  throw new Error("Network response was not ok");
        //}
        //let xxx = response.json();
        //console.log(xxx);
       // return xxx;
     // })
      //.then((response) => {
      //  console.log(response);
       // return response;
     // })
     // .catch((error) => {
       // Alert.alert("Error", "Internal Server Error");
       // console.log(error);
       // return null;
     // });
 // };


// const searchByNameandNearby = (_name, latitude, longitude, _maxDistance, kindOfResource) => { //, token) => { //included for when we do authentication

//     const data = {
//         name: _name,
//         userLatitude: latitude,
//         userLongitude: longitude,
//         maxDistance: _maxDistance,
//         kindofresource: kindOfResource
//     };

//     console.log(data);

//     fetch('https://energetic-teal-dugong.cyclic.app/resource/getResources/namenearby', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })

//         .then((response) => {
//             console.log(response.data);
//             return response.data;
//         })
//         .catch((error) => {
//             Alert.alert("Error", "Internal Server Error");
//             console.log(error);
//             return null;
//         });
// };

// const searchByName = (_name, _maxDistance, kindOfResource) => { //, token) => { //included for when we do authentication
    
//     const data = {
//         name: _name,
//         maxDistance: _maxDistance,
//         kindofresource: kindOfResource
//     };

//     console.log(data);

//     fetch('https://energetic-teal-dugong.cyclic.app/resource/getResources/name', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })

//     .then((response) => {
//         console.log(response.data);
//         return response.data;
//     })
//     .catch((error) => {
//         Alert.alert("Error", "Internal Server Error");
//         console.log(error);
//         return null;
//     });
// };

//export { searchByLocation}//, searchByNameandNearby, searchByName };
//=======
//import { Alert } from "react-native";
//import * as Location from "expo-location";
//import userip from "./getuserip";
//import mysql from "mysql2/promise";

//const searchByLocation = async (latitude, longitude, maxDistance, kindOfResource) => {
  //try {
    // Create a MySQL connection pool for better performance and resource management
    //const pool = mysql.createPool({
      //host: 'your_mysql_host',
     // user: 'your_mysql_user',
     // password: 'your_mysql_password',
     // database: 'your_database_name',
   // });

    // Get a connection from the pool
    //const connection = await pool.getConnection();

    //const queryParams = {
     // userLatitude: latitude.toString(),
     // userLongitude: longitude.toString(),
     // maxDistance: maxDistance.toString(),
     // kindOfResource: kindOfResource,
   // };

    //const query = `
      //SELECT *
     // FROM your_database_name.your_table_name
     // WHERE userLatitude = ":userLatitude"
      //  AND userLongitude = :"userLongitude"
      //  AND maxDistance = :"maxDistance"
       // AND kindofresource = :"kindOfResource";
    //`;

    // Execute the query using named placeholders
    //const [results, fields] = await connection.query(query, queryParams);

    // Release the connection back to the pool
    //connection.release();

    //console.log(results);

   // const url = `https://energetic-teal-dugong.cyclic.app/resource/getResources/location?${new URLSearchParams(queryParams)}`;

    //console.log(url);

    //const response = await fetch(url, {
      //method: 'GET',
      //headers: {
        //'Content-Type': 'application/json',
      //}
    //});

    //if (!response.ok) {
     // throw new Error("Network response was not ok");
   // }

    //const responseData = await response.json();
    //console.log(responseData);
    //return responseData;

  //} catch (error) {
    //console.error('Error executing MySQL query:', error);
    //Alert.alert("Error", "Internal Server Error");
    //return null;
  //}
//};
// const searchByNameandNearby = (_name, latitude, longitude, _maxDistance, kindOfResource) => { //, token) => { //included for when we do authentication

 //     const data = {
 //         name: _name,
 //         userLatitude: latitude,
 //         userLongitude: longitude,
 //         maxDistance: _maxDistance,
 //         kindofresource: kindOfResource
 //     };

 //     console.log(data);

//     fetch('https://energetic-teal-dugong.cyclic.app/resource/getResources/namenearby', {
 //         method: 'GET',
 //         headers: {
 //             'Content-Type': 'application/json',
 //         },
 //         body: JSON.stringify(data),
 //     })

 //         .then((response) => {
 //             console.log(response.data);
 //             return response.data;
 //         })
 //         .catch((error) => {
 //             Alert.alert("Error", "Internal Server Error");
 //             console.log(error);
 //             return null;
 //         });
 // };

 // const searchByName = (_name, _maxDistance, kindOfResource) => { //, token) => { //included for when we do authentication

 //     const data = {
 //         name: _name,
 //         maxDistance: _maxDistance,
 //         kindofresource: kindOfResource
 //     };
 //     console.log(data);

 //     fetch('https://energetic-teal-dugong.cyclic.app/resource/getResources/name', {
 //         method: 'GET',
 //         headers: {
 //             'Content-Type': 'application/json',
 //         },
 //         body: JSON.stringify(data),
 //     })

 //     .then((response) => {
 //         console.log(response.data);
 //         return response.data;
 //     })
 //     .catch((error) => {
 //         Alert.alert("Error", "Internal Server Error");
 //         console.log(error);
 //         return null;
 //     });
 // };


//export { searchByLocation };
//>>>>>>> Stashed changes

