import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import afghanistanflag from '../images/countryflags/afghanistanflag.png'
import americanflag from '../images/countryflags/americanflag.png'
import brazilflag from '../images/countryflags/brazilflag.png'
import franceflag from '../images/countryflags/franceflag.png'
import germanyflag from '../images/countryflags/germanyflag.png'
import italianflag from '../images/countryflags/italianflag.png'
import japanflag from '../images/countryflags/japanflag.png'
import russiaflag from '../images/countryflags/russiaflag.png'
import spainflag from '../images/countryflags/spainflag.png'
import turkeyflag from '../images/countryflags/turkeyflag.png'
import ukraineflag from '../images/countryflags/ukraineflag.png'
import unitedarabflag from '../images/countryflags/unitedarabflag.png'

const LanguageCard = ({picture, styles, title}) => (
      <View style={styles.languageContainer}>
            <Image
                  source={ picture !== null
                        ? { uri: picture }
                        : { uri: "https://placehold.co/400?text=No+image+available" }}
                  style={styles.image} />
            <Text
                  style={styles.text}>
                  {title}
            </Text>
      </View>

)
const LanguageContainer = () => {
      const { fontScale } = useWindowDimensions();
      const styles = makeStyles(fontScale)
      const supportedLanguages = [
            {title: 'English', picture: Image.resolveAssetSource(americanflag).uri},
            {title: 'Italiano', picture: Image.resolveAssetSource(italianflag).uri},
            {title: 'عربي', picture: Image.resolveAssetSource(unitedarabflag).uri},
            {title: 'پښتو', picture: Image.resolveAssetSource(afghanistanflag).uri},
            {title: 'Português', picture: Image.resolveAssetSource(brazilflag).uri},
            {title: 'Deutsch', picture: Image.resolveAssetSource(germanyflag).uri},
            {title: 'Español', picture: Image.resolveAssetSource(spainflag).uri},
            {title: 'Français', picture: Image.resolveAssetSource(franceflag).uri},
            {title: 'Türkçe', picture: Image.resolveAssetSource(turkeyflag).uri},
            {title: 'українська', picture: Image.resolveAssetSource(ukraineflag).uri},
            {title: '日本語', picture: Image.resolveAssetSource(japanflag).uri},
            {title: 'русский', picture: Image.resolveAssetSource(russiaflag).uri},
      ]
      return (
            <View style={styles.container}>
                 {supportedLanguages.map((language, i) => 
                                                      <LanguageCard picture={language.picture} title={language.title} key={i.toString()} styles={styles}/>)}
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