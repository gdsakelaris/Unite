import Geocoder from 'react-native-geocoding';


// Initialize the module (needs to be done only once)
Geocoder.init("xxxxxxxxxxxxxxxxxxxxxxxxx"); // use a valid API key
// With more options
// Geocoder.init("xxxxxxxxxxxxxxxxxxxxxxxxx", {language : "en"}); // set the language

const addressToLatLong = (address) => { //, token) => { //included for when we do authentication
    // Search by address
    Geocoder.from(address)
        .then(json => {
            let location = json.results[0].geometry.location;
            console.log(location);
            return location;
        })
        .catch(error => console.warn(error));
}

const latLongtoAddress = (_latitude, _longitude) => { //, token) => { //included for when we do authentication
    // Search by geo-location (reverse geo-code)
    Geocoder.from({
        latitude: _latitude,
        longitude: _longitude
    })
        .then(json => {
            var addressComponent = json.results[0].address_components[0];
            console.log(addressComponent);
        })
        .catch(error => console.warn(error));
}


export { addressToLatLong, latLongtoAddress };
