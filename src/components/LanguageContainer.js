import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const LanguageContainer = () => {
      const { fontScale } = useWindowDimensions();
      const styles = makeStyles(fontScale)
      return (
            <View style={styles.container}>
                  {/* English */}
                  <View style={styles.languageContainer}>

                        <Image
                              source={require('../../images/countryflags/americanflag.png')}
                              style={styles.image} />
                        <Text
                              style={[styles.text, { marginRight: '15%' }]}>
                              English
                        </Text>
                  </View>
                  {/* Italia */}
                  <View style={styles.languageContainer}>
                        <Image
                              source={require('../../images/countryflags/italianflag.png')}
                              style={styles.image} />
                        <Text
                              style={[styles.text, { marginRight: '15%' }]}>
                              Italiano
                        </Text>
                  </View>
                  {/* arab */}
                  <View style={styles.languageContainer}>
                        <Image
                              source={require('../../images/countryflags/unitedarabflag.png')}
                              style={styles.image} />
                        <Text
                              style={[styles.text, { marginRight: '30%' }]}>
                              عربي

                        </Text>
                  </View>
                  {/* afghan */}
                  <View style={styles.languageContainer}>
                        <Image
                              source={require('../../images/countryflags/afghanistanflag.png')}
                              style={styles.image} />
                        <Text
                              style={[styles.text, { marginRight: '30%' }]}>
                              پښتو

                        </Text>
                  </View>
                  {/* Brazil */}
                  <View style={styles.languageContainer}>
                        <Image
                              source={require('../../images/countryflags/brazilflag.png')}
                              style={styles.image} />
                        <Text
                              style={[styles.text]}>
                              Português

                        </Text>
                  </View>
                  {/* Germany */}
                  <View style={styles.languageContainer}>
                        <Image
                              source={require('../../images/countryflags/germanyflag.png')}
                              style={styles.image} />
                        <Text
                              style={[styles.text, { marginRight: '10%' }]}>
                              Deutsch
                        </Text>
                  </View>
                  {/* Spain */}
                  <View style={styles.languageContainer}>
                        <Image
                              source={require('../../images/countryflags/spainflag.png')}
                              style={styles.image} />
                        <Text
                              style={[styles.text, { marginRight: '10%' }]}>
                              Español
                        </Text>
                  </View>
                  {/* France */}
                  <View style={styles.languageContainer}>
                        <Image
                              source={require('../../images/countryflags/franceflag.png')}
                              style={styles.image} />
                        <Text
                              style={[styles.text, { marginRight: '8%' }]}>
                              Français
                        </Text>
                  </View>
                  {/* Turkey */}
                  <View style={styles.languageContainer}>
                        <Image
                              source={require('../../images/countryflags/turkeyflag.png')}
                              style={styles.image} />
                        <Text
                              style={[styles.text, { marginRight: '17%' }]}>
                              Türkçe
                        </Text>
                  </View>
                  {/* Ukraine */}
                  <View style={styles.languageContainer}>
                        <Image
                              source={require('../../images/countryflags/ukraineflag.png')}
                              style={styles.image} />
                        <Text
                              style={styles.text}>
                              українська
                        </Text>
                  </View>
                  {/* Japan */}
                  <View style={styles.languageContainer}>
                        <Image
                              source={require('../../images/countryflags/japanflag.png')}
                              style={styles.image} />
                        <Text
                              style={[styles.text, { marginRight: '15%' }]}>
                              日本語
                        </Text>
                  </View>
                  {/* Russia */}
                  <View style={styles.languageContainer}>
                        <Image
                              source={require('../../images/countryflags/russiaflag.png')}
                              style={styles.image} />
                        <Text
                              style={styles.text}>
                              русский
                        </Text>
                  </View>
            </View>
      );
}

const makeStyles = fontScale => StyleSheet.create({
      container: {
            flex: 1,
            flexWrap: 'wrap',
            alignContent: 'space-around',
            paddingHorizontal: '2%',
      },
      languageContainer: {
            width: '44%',
            height: '12%',
            flexDirection: 'row',
            borderRadius: '10%',
            backgroundColor: '#FFFFFF',
            shadowColor: '#171717',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.5,
            shadowRadius: 3,
            elevation: 20,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '6%'
      },
      image:
      {
            width: '30%',
            height: '70%',
            borderRadius: '20%',
            marginLeft: '5%'

      },
      text: {
            fontSize: 18 / fontScale,
            fontWeight: '600',
            marginRight: '5%',


      }
});

export default LanguageContainer;