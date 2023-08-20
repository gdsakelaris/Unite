import { View, Text } from "react-native";

// Supported sections and their details for the service full page screen
const listOfProvidedSection = [
  {
    optionTitle: 'About',
    detail: 'Anchor Church is a Christ-centered community. We worship together each Sunday at 9:00 AM and have small group ministry in various locations & at various times throughout the week. We desire each gathering adds value to your life. We specialize in encouraging people to experience their destiny as an individual designed for beauty and fulfillment. We have an especially strong focus in the arts, the infallible Word of God, and growing in relationships with Jesus through meaningful relationships.'
  },
  //add the Hours detail
  {
    optionTitle: 'Hours',
    detail: 'Sunday:         Closed\nMonday:        10 to 16 \nTuesday:       10 to 16 \nWednesday: 10 to 16 \nThursday:     10 to 16 \nFriday:           10 to 16 \nSaturday:      10 to 16'
  },
  //add the Media detail
  {
    optionTitle: 'Media',
    detail: 'www.https://myweb\n777-777-7777'
  }
];


//indexes 0 to 2
//0: about
//1: hours
//2: media 
//default: about

function ResourceObjToJSX(key, object) {

  let optionTitle;
  let detail;

  switch (key) {
    case 1:
      const hours = object.hours;

      //this produces each day as a text jsx, if it doesn't exist, it's red Closed

      const Sunday = hours.Sunday
        ? <Text>Sunday: {hours.Sunday.open} to {hours.Sunday.closed}</Text>
        : <Text><Text>Sunday: </Text><Text style={{ color: 'red' }}>Closed</Text></Text>;

      const Monday = hours.Monday
        ? <Text>Monday: {hours.Monday.open} to {hours.Monday.closed}</Text>
        : <Text><Text>Monday: </Text><Text style={{ color: 'red' }}>Closed</Text></Text>;

      const Tuesday = hours.Tuesday
        ? <Text>Tuesday: {hours.Tuesday.open} to {hours.Tuesday.closed}</Text>
        : <Text><Text>Tuesday: </Text><Text style={{ color: 'red' }}>Closed</Text></Text>;

      const Wednesday = hours.Wednesday
        ? <Text>Wednesday: {hours.Wednesday.open} to {hours.Wednesday.closed}</Text>
        : <Text><Text>Wednesday: </Text><Text style={{ color: 'red' }}>Closed</Text></Text>;

      const Thursday = hours.Thursday
        ? <Text>Thursday: {hours.Thursday.open} to {hours.Thursday.closed}</Text>
        : <Text><Text>Thursday: </Text><Text style={{ color: 'red' }}>Closed</Text></Text>;

      const Friday = hours.Friday
        ? <Text>Friday: {hours.Friday.open} to {hours.Friday.closed}</Text>
        : <Text><Text>Friday: </Text><Text style={{ color: 'red' }}>Closed</Text></Text>;

      const Saturday = hours.Saturday
        ? <Text>Saturday: {hours.Saturday.open} to {hours.Saturday.closed}</Text>
        : <Text><Text>Saturday: </Text><Text style={{ color: 'red' }}>Closed</Text></Text>;

      optionTitle = 'Hours';
      detail = <View>
        {Sunday}
        {Monday}
        {Tuesday}
        {Wednesday}
        {Thursday}
        {Friday}
        {Saturday}
      </View>
      break;

    case 2:
      const website = object.website;
      const phone = object.phone;


      optionTitle = 'Media';
      detail = <View>
        <Text>{website}</Text>
        <Text>{phone}</Text>
      </View>;

      break;

    case 0:
    default:
      const descrition = object.descrition;

      optionTitle = 'About';
      detail = descrition;
      break;
  }
  return returnVal;
}

export default { listOfProvidedSection, ResourceObjToJSX };
