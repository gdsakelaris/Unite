const axios = require('axios');

function submitResource(resource, userToken) {
  const headers = {
    Authorization: `Bearer ${userToken}`
  };

  const requestBody = {
    name: resource.name,
    kindofresource: resource.kindofresource,
    email: resource.email,
    address: resource.address,
    description: resource.description,
    phonenumber: resource.phonenumber || null, // Make it null if not provided
    website: resource.website || null, // Make it null if not provided
    hours: resource.hours || {} // Make it an empty object if not provided
  };

  // Perform the POST request using axios
  return axios.post('api/v1/resource/create', requestBody, { headers })
    .then(response => {
      return response.data; // Return the response data
    })
    .catch(error => {
      throw error; // Throw any errors that occur during the request
    });
}

export default submitResource;