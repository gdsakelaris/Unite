import * as React from 'react';
import { Card, Avatar, Text, Button } from 'react-native-paper';
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; //star: black star, star-o: white star, star-half-empty: haft black half white star


const FiveStars = () => {
  const fivestarsArr = Array.from({length: 5})
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      {fivestarsArr.map((_, i) => 
                                  <FontAwesome name='star' size={20} key={i.toString()}/>
                                  )}
    </View>
  )
  
}
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

function ReviewCard(props) {
  const [componentHeight, setComponentHeight] = React.useState(0);

  const handleLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    console.log(height)
    setComponentHeight(height);
  };
  return (
    <Card>
      <Card.Title title='Phong Diep' left={() => <Avatar.Image source={require('../images/Dummyresource.png')}/>} right={() => <Text>2 days ago</Text>} subtitle={<Text variant='labelLarge'><FiveStars/> 5.0</Text>}/>
      <Card.Content style={{backgroundColor:'red',}}>
              <ScrollView style={{height: 2000}}>
                <Text variant='bodyLarge'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</Text>
                </ScrollView>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default ReviewCard;