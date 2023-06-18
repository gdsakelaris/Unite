import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import CustomSwitch from 'react-native-custom-switch';
import { AntDesign } from '@expo/vector-icons';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const SettingOptWithoutSwitchBtn = ({title, navigateTo, settings}) => (
  <TouchableOpacity
          style={settings.settingOptContainer}
          onPress={() => settings.navigation.navigate(navigateTo)}>
          <Text
            style={settings.settingOptText}>
            {title}
          </Text>
          <View
            style={settings.settingButton}>
            <AntDesign
              name="right"
              size={20}
              color="black"/>
          </View>
  </TouchableOpacity>
)
const SettingOptWithSwitchBtn = ({settings, title}) => (
  <View
      style={settings.settingOptContainer}>
      <Text
        style={settings.settingOptText}>
        {title}
      </Text>
      <View>
        <CustomSwitch
          buttonWidth={30}
          switchLeftText={"ON"}
          switchLeftTextStyle={settings.switchBtnText}
          switchRightText={"OFF"}
          switchRightTextStyle={settings.switchBtnText}
          switchWidth={80}
          buttonPadding={4}
          buttonColor={'#FFFFFF'}
          startOnLeft={settings.pushNotification} //set the default of the switch value is off
          switchBackgroundColor={'#AD2525'} //default background color of the switch when it's off
          onSwitchBackgroundColor={'#0F993E'} //change background color of the switch when it's on
          onSwitch={settings.setPushNotification} //called when the switch is pressed
        />
      </View>
  </View>

)
const SettingContainer = ({container, children, settingContainer}) => (
  <View style={container}>
      <View style={settingContainer}>
        {children}
      </View>
  </View>

)

const Settings = ({ navigation }) => {
  const [pushNotification, setPushNotification] = useState(false);
  const toggleNotification = () => setPushNotification(prevVal => !prevVal)
  const { fontScale } = useWindowDimensions()
  const styles = makeStyle(fontScale)
  const settings = {
    settingOptContainer: styles.settingOptContainer,
    settingOptText: styles.settingOptText,
    switchBtnText: styles.switchBtnText,
    pushNotification: pushNotification,
    setPushNotification: setPushNotification,
    navigation: navigation,
    settingButton: styles.settingButton
  }
  const settingsOption = [
    {title: 'Push Notification'},
    {title: 'Dark Mode'},
    {title: 'Language', navigateTo: 'Language'},
    {title: 'Privacy & Security', navigateTo: 'PrivacyAgreementScreen'},
    {title: 'Terms of Service', navigateTo: 'TermsOfServiceScreen'},
    {title: 'Connected Accounts', navigateTo: 'ConnectedAccount'},
    {title: 'App Info', navigateTo: 'AppInfo'}
  ]
  return (
    <SettingContainer container={styles.container} settingContainer={styles.settingContainer}>
      {settingsOption.map((opt, i) => 
                                      {
                                        if (opt.title === 'Push Notification' || opt.title === 'Dark Mode') return <SettingOptWithSwitchBtn settings={settings} title={opt.title} key={i.toString()}/>
                                        else return <SettingOptWithoutSwitchBtn settings={settings} title={opt.title} navigateTo={opt.navigateTo} key={i.toString()}/>
                                      })}

    </SettingContainer>
    
  );
}

const makeStyle = fontScale => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  settingContainer: {
    height: '90%',
    width: '100%'
  },
  settingOptContainer: {
    flex: 1,
    borderBottomWidth: 0.25,
    borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '7%',
    justifyContent: 'space-between',
    paddingRight: '4%'
  },
  settingOptText: {
    fontSize: 24 / fontScale
  },
  settingButton: {
    paddingRight: '4%'
  },
  switchBtnText: {
    color: '#fff', 
    fontSize: 14
  }
});
export default Settings;
