/**
 * @file LanguageCard.js
 * @description This file contains a component for a language card that users can click on to set their preferred language.
 */

import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Text,Card } from 'react-native-paper';
import {languageCardStyle as styles} from '../css'   
import renderCountryImage from './renderCountryImage';

/**
 * Component for a language card that users can click on to set their preferred language.
 *
 * @component
 * @param {string} picture - The URL of the country's flag image.
 * @param {string} languageName - The name of the language.
 * @param {object} navigation - Navigation object for navigating to other screens.
 * @returns {JSX.Element} - A JSX element representing the LanguageCard component.
 */
const LanguageCard = ({picture, languageName, navigation}) => {
  return (
          //Move to loginSignup screen after choosing a card
          <TouchableOpacity style={styles.languageCardContainer} onPress={() => navigation.navigate('LoginSignup')}> 
            {/* Ultilized Card and Text components from react native paper to make a language card. Go to react native paper and checkout Card and Text components for references */}
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