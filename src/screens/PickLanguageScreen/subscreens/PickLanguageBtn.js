//this file will create a button for the picklanguage page
import React from 'react';
import {Text } from 'react-native-paper';
import { pickLanguageBtnStyle as styles} from '../css';
import { TouchableOpacity, View} from 'react-native';

const PickLanguageBtn = ({navigation}) => (
  <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('LoginSignup')}>
    <View style={styles.button}>
        <Text style={styles.buttonLabel}>
          Other
        </Text>
    </View>
  </TouchableOpacity>
 
)

export default PickLanguageBtn;