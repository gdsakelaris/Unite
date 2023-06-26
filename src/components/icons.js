//this file contains all the icons that is used in this component folder
import { MaterialCommunityIcons, FontAwesome, Feather, Entypo, Ionicons, EvilIcons} from '@expo/vector-icons';  //star: black star, star-o: white star, star-half-empty: haft black half white star
import { fontScale } from '../base';
export const cameraIcon = <MaterialCommunityIcons name='camera' size={40 / fontScale}/>

export const FiveStars = () => {
  const arr = Array.from({length: 5})
  return (<View style={styles.fiveStars}>
      {arr.map((_, i) => (
        <FontAwesome name='star' size={15 / fontScale} key={i.toString()}/>
      ))}
      
  </View>)
} 

export const resourceCardStarIcon = <FontAwesome name="star" size={14 / fontScale} color="black"/>
export const dotIcon =  <Entypo name="dot-single" size={20 / fontScale} color="black"/>
export const locationIcon = <EvilIcons name="location" size={20 / fontScale} color="black"/>
export const phoneIcon = <Ionicons name="ios-call-outline" size={20 / fontScale} color="black"/>
export const bookmarkedIcon =  <Feather name="bookmark" size={17 / fontScale} color="black" />