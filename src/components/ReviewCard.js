import * as React from 'react';
import { Card, Avatar, Text} from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; //star: black star, star-o: white star, star-half-empty: haft black half white star
import AvatarIcon from './AvatarIcon';
const FiveStars = () => {
  const arr = Array.from({length: 5})
  return (<View style={styles.fiveStars}>
      {arr.map((_, i) => (
        <FontAwesome name='star' size={15} key={i.toString()}/>
      ))}
      
  </View>)
} 
function ReviewCard(props) {
  const {reviewerName, content, reviewerProfileUri, ratings, postedDate} = props
  const avatarSetting = {
    source: reviewerProfileUri
  }
  return (
    <Card mode='outlined' style={styles.container} >
      <Card.Title 
                title={<Text variant='titleLarge' style={styles.titleText}>
                            {reviewerName}
                        </Text>} 
                left={() => <AvatarIcon avatarSettings={avatarSetting}/>} 
                right={() => <Text style={styles.postedDateStyle}>{postedDate}</Text>} 
                subtitle={<Text variant='labelLarge'><FiveStars/> {parseFloat(ratings)}</Text>} 
                subtitleStyle={styles.titleMargin} 
                titleStyle={styles.titleMargin}/>
      <Card.Content >
          <Text variant='bodyMedium'>{content}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor:'transparent'
  },
  titleText: {
    fontWeight:'600',
  },
  titleMargin: {
    marginLeft:'7%'
  },
  fiveStars: {
    flexDirection:'row', 
    justifyContent:'space-between',
    marginRight: 10
  },
  postedDateStyle: {
    fontWeight: '300',
  
  }

});

export default ReviewCard;