import { PreventRemoveContext } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import CustomSwitch from 'react-native-custom-switch';
import { AntDesign } from '@expo/vector-icons';



function Settings({navigation}) {
  const [pushNotification, setPushNotification] = useState(false);
  const toggleNotification = () => setPushNotification(prevVal => !prevVal)
  return (

    <View style={styles.container}>
      <View style={styles.settingContainer}>
            {/* Push Notifications  */}
            <View 
                style={styles.settingOptContainer}>  
                <Text 
                    style={styles.settingOptText}
                    adjustsFontSizeToFit={true}
                    minimumFontScale={0.5}>
                          Push Notifications
                </Text>
                <View>
                    <CustomSwitch  
                                  buttonWidth={30}
                                  switchLeftText={"ON"}
                                  switchLeftTextStyle={{color: '#fff', fontSize: 14}}
                                  switchRightText={"OFF"}
                                  switchRightTextStyle={{color: '#fff', fontSize: 14}}
                                  switchWidth={80}
                                  buttonPadding={4}
                                  buttonColor={'#FFFFFF'}
                                  startOnLeft={pushNotification} //set the default of the switch value is off
                                  switchBackgroundColor={'#AD2525'} //default background color of the switch when it's off
                                  onSwitchBackgroundColor={'#0F993E'} //change background color of the switch when it's on
                                  onSwitch={setPushNotification} //called when the switch is pressed
                                  />
                </View>

            </View>

            {/* Dark Mode */}
            <View 
                style={styles.settingOptContainer}>  
                <Text 
                    style={styles.settingOptText}
                    adjustsFontSizeToFit={true}
                    minimumFontScale={0.5}>
                            Dark Mode
                </Text>
                <View>
                    <CustomSwitch  
                                  buttonWidth={30}
                                  switchLeftText={"ON"}
                                  switchLeftTextStyle={{color: '#fff', fontSize: 14}}
                                  switchRightText={"OFF"}
                                  switchRightTextStyle={{color: '#fff', fontSize: 14}}
                                  switchWidth={80}
                                  buttonPadding={4}
                                  buttonColor={'#FFFFFF'}
                                  startOnLeft={pushNotification} //set the default of the switch value is off
                                  switchBackgroundColor={'#AD2525'} //default background color of the switch when it's off
                                  onSwitchBackgroundColor={'#0F993E'} //change background color of the switch when it's on
                                  onSwitch={setPushNotification} //called when the switch is pressed

                                  />
                </View>
            </View>

            {/* Language */}
            <TouchableOpacity 
                          style={styles.settingOptContainer}
                          onPress={() => navigation.navigate('Language')}>
                      
                        
                          <Text 
                              style={styles.settingOptText}
                              adjustsFontSizeToFit={true}
                              minimumFontScale={0.5}>
                                    Language
                          </Text> 
                          <View 
                              style={styles.settingButton}>
                                        <AntDesign 
                                                  name="right" 
                                                  size={20} 
                                                  color="black" 
                                                  adjustsFontSizeToFit={true}
                                                  minimumFontScale={0.5}/>
                            
                          </View> 
                      
            </TouchableOpacity>

            {/* Privacy & Security */}
            <TouchableOpacity 
                          style={styles.settingOptContainer}
                          onPress={() => console.log('Pressed')}>
                      
                        
                          <Text 
                              style={styles.settingOptText}
                              adjustsFontSizeToFit={true}
                              minimumFontScale={0.5}>
                                    Privacy & Security
                          </Text> 
                          <View 
                              style={styles.settingButton}>
                                        <AntDesign 
                                                  name="right" 
                                                  size={20} 
                                                  color="black" 
                                                  adjustsFontSizeToFit={true}
                                                  minimumFontScale={0.5}/>
                            
                          </View> 
                      
            </TouchableOpacity>

            {/* Terms of Service */}
            <TouchableOpacity 
                          style={styles.settingOptContainer}
                          onPress={() => console.log('Pressed')}>
                      
                        
                          <Text 
                              style={styles.settingOptText}
                              adjustsFontSizeToFit={true}
                              minimumFontScale={0.5}>
                                    Terms of Service
                          </Text> 
                          <View 
                              style={styles.settingButton}>
                                        <AntDesign 
                                                  name="right" 
                                                  size={20} 
                                                  color="black" 
                                                  adjustsFontSizeToFit={true}
                                                  minimumFontScale={0.5}/>
                            
                          </View> 
                      
            </TouchableOpacity>

            {/* Connected Account */}
            <TouchableOpacity 
                          style={styles.settingOptContainer}
                          onPress={() => navigation.navigate('ConnectedAccount')}>
                      
                        
                          <Text 
                              style={styles.settingOptText}
                              adjustsFontSizeToFit={true}
                              minimumFontScale={0.5}>
                                    Connected Accounts
                          </Text> 
                          <View 
                              style={styles.settingButton}>
                                        <AntDesign 
                                                  name="right" 
                                                  size={20} 
                                                  color="black" 
                                                  adjustsFontSizeToFit={true}
                                                  minimumFontScale={0.5}/>
                            
                          </View> 
                      
            </TouchableOpacity>

            {/* App Info */}
            <TouchableOpacity 
                          style={styles.settingOptContainer}
                          onPress={() => console.log('Pressed')}>
                      
                        
                          <Text 
                              style={styles.settingOptText}
                              adjustsFontSizeToFit={true}
                              minimumFontScale={0.5}>
                                    App Info
                          </Text> 
                          <View 
                              style={styles.settingButton}>
                                        <AntDesign 
                                                  name="right" 
                                                  size={20} 
                                                  color="black" 
                                                  adjustsFontSizeToFit={true}
                                                  minimumFontScale={0.5}/>
                            
                          </View> 
                      
            </TouchableOpacity>
            
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  settingContainer: {
    height: '90%',
    width: '100%'
  },
  settingOptContainer: {
    flex: 1,
    borderBottomWidth: 0.25,
    borderColor: 'black',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft: '7%',
    justifyContent:'space-between',
    paddingRight: '4%'

  },
  settingOptText: {
    fontSize:18
  },
  settingButton: {
    paddingRight: '4%'
  }
  
});

export default Settings;