import React from 'react';
import { SafeAreaView, StyleSheet,Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LanguageContainer from '../components/LanguageContainer';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const PickLanguages = () => {
  const {fontScale} = useWindowDimensions()
  const styles = makeStyle(fontScale)
  return (
    <SafeAreaView style={styles.container}>
      {/* Greeting */}
      <View 
            style={styles.textContainer}>
        <Text 
              style={styles.text}>
                  Let's pick
        </Text>
        <Text 
              style={styles.text}>
                  your language!
        </Text>
      </View>

      {/* Languages */}
      <View 
            style={styles.languaguesContainer}>
            <LanguageContainer/>
      </View>

      {/* Button */}
      <View 
            style={styles.buttonContainer}>
        <TouchableOpacity 
                        style={styles.button}>
                          <Text 
                                style={styles.buttonText}>
                                            Other
                          </Text> 
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const makeStyle = fontScale => StyleSheet.create({
  container: {
    flex:1,
  },
  textContainer: {
    marginLeft: '6%',
    flex: 1,
  },
  text: {
    fontSize:30 / fontScale,
    fontWeight: '600'
  },
  languaguesContainer: {
    flex: 7
  },
  buttonContainer: {
    flex: 1,
    alignItems:'center',
  },
  button: {
    backgroundColor:'#F78154',
    borderRadius: '40%',
    width: 330 / fontScale,
    height:'80%',
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText: {
    fontSize: 25 / fontScale,
    fontWeight: '600',
    color:'#FFFFFF'
  }
});

export default PickLanguages;