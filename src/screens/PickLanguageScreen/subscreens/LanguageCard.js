//This file will create a language card component
import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Text,Card } from 'react-native-paper';
import AvatarIcon from '../../../components/AvatarIcon';
import {languageCardStyle as styles} from '../css'   
const renderCountryImage = (picture) => {
  const avatarSettings = {
    source: picture ? picture : "https://placehold.co/400?text=No+image+available",
    size: 50
  }
  return <AvatarIcon avatarSettings={avatarSettings}/>
}
const LanguageCard = ({picture, languageName, navigation}) => {
  return (
          <TouchableOpacity style={styles.languageCardContainer} onPress={() => navigation.navigate('LoginSignup')}>
            <Card.Title 
            title={<Text
                         style={styles.languageName}>
                            {languageName}
                    </Text>}
            left={() => renderCountryImage(picture)}
            titleStyle={styles.languageNameContainer}

            />
          </TouchableOpacity>)
}
export default LanguageCard;