import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { Dimensions } from 'react-native';

const HeaderNavigation = (title) => {
  const {fontScale} = useWindowDimensions()
  const {width} = Dimensions.get('window');
  const styles = makeStyle(fontScale, width)
  const headerCustom = () => (<AntDesign name="arrowleft" size={35} color="#252525" style={styles.headerCustomIcon}/>)
  const headerTitleCustom = (title) => (
                                      <View style={styles.headerTitleContainer}>  
                                        <Text style={styles.headerBackTitleStyle}>{title}</Text>
                                      </View>
                                  )
  const settingsHeaderNavigation = (title) => (
    {
      headerBackImage: headerCustom,
      headerTitle: () => headerTitleCustom(title),
      headerBackground: () => <View style={styles.headerBackground}/>,
      headerStyle: styles.headerStyle,
      headerBackTitleVisible: false
    }
  )
  return settingsHeaderNavigation(title)
}

  const makeStyle = (fontScale, widthOfTheScreen) => StyleSheet.create({
    headerCustomIcon: {
      marginLeft: '35%',
      
      
    },
    headerBackground: {
      backgroundColor:'white', 
      width: '100%', 
      height: '100%'
  
    },
    headerStyle: {
      height: 150,
      
    },
    headerBackTitleStyle: {
      fontSize: 32 / fontScale,
      color: '#252525',
    },
    headerTitleContainer: {
      width: (widthOfTheScreen - 130),
    }
  })
  
export default HeaderNavigation;