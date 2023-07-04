//this file will create a button for navigating to the login/sign up screen on the pick language screen
import React from 'react';
import {Text, Button } from 'react-native-paper';
import { pickLanguageBtnStyle as styles} from '../css';
import {View} from 'react-native';

const PickLanguageBtn = ({navigation}) => (
  <View style={styles.buttonContainer}>
    <Button mode='elevated' style={styles.button} contentStyle={styles.buttonContent} onPress={() => navigation.navigate('LoginSignup')}>
        <Text style={styles.buttonLabel}>
          Other
        </Text>
    </Button>
  </View>
 
)

export default PickLanguageBtn;