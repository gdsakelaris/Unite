// //this was written for mongodb, and needs to be converted to mysql


// import { Alert } from "react-native";
// import userip from "./getuserip";
// import { Location } from "expo-location"; // Import the Location object

// const searchByLocation = (latitude, longitude, maxDistance, kindOfResource) => { 
//     //, token) => { //included for when we do authentication

//     //take in parameters from resourcedataarray

//     //this will proabaly need to change into an sql query
//     const queryParams = new URLSearchParams({
//         userLatitude: latitude.toString(),
//         userLongitude: longitude.toString(),
//         maxDistance: maxDistance.toString(),
//         kindofresource: kindOfResource,
//       }).toString();


//     //this will likely need to change as we move on

//     //this is the url query
//     console.log(queryParams);
//     const url = `https://energetic-teal-dugong.cyclic.app/resource/getResources/location?${queryParams}`;

//     console.log(url);
//     fetch(url, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     })
//     .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         let xxx = response.json();
//         console.log(xxx);
//         return xxx;
//       })
//       .then((response) => {
//         console.log(response);
//         return response;
//       })
//       .catch((error) => {
//         Alert.alert("Error", "Internal Server Error");
//         console.log(error);
//         return null;
//       });
//   };


// // const searchByNameandNearby = (_name, latitude, longitude, _maxDistance, kindOfResource) => { //, token) => { //included for when we do authentication

// //     const data = {
// //         name: _name,
// //         userLatitude: latitude,
// //         userLongitude: longitude,
// //         maxDistance: _maxDistance,
// //         kindofresource: kindOfResource
// //     };

// //     console.log(data);

// //     fetch('https://energetic-teal-dugong.cyclic.app/resource/getResources/namenearby', {
// //         method: 'GET',
// //         headers: {
// //             'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(data),
// //     })

// //         .then((response) => {
// //             console.log(response.data);
// //             return response.data;
// //         })
// //         .catch((error) => {
// //             Alert.alert("Error", "Internal Server Error");
// //             console.log(error);
// //             return null;
// //         });
// // };

// // const searchByName = (_name, _maxDistance, kindOfResource) => { //, token) => { //included for when we do authentication
    
// //     const data = {
// //         name: _name,
// //         maxDistance: _maxDistance,
// //         kindofresource: kindOfResource
// //     };

// //     console.log(data);

// //     fetch('https://energetic-teal-dugong.cyclic.app/resource/getResources/name', {
// //         method: 'GET',
// //         headers: {
// //             'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(data),
// //     })

// //     .then((response) => {
// //         console.log(response.data);
// //         return response.data;
// //     })
// //     .catch((error) => {
// //         Alert.alert("Error", "Internal Server Error");
// //         console.log(error);
// //         return null;
// //     });
// // };

// export { searchByLocation}//, searchByNameandNearby, searchByName };
