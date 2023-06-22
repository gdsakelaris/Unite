import { StyleSheet } from "react-native"
import { colors, fontScale} from "../../base"
export const pickLanguageContainerStyle = StyleSheet.create({
  container: {
    flex:1,
  }
})
export const titleStyle = StyleSheet.create({
  titleContainer: {
    marginLeft: '6%',
    flex: 1,
  },
  titleText: {
    fontSize: 35 / fontScale,
    fontWeight: '600'
  }
})


export const pickLanguageBtnStyle = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems:'center',
  },
  button: {
    borderRadius: '40%',
    width: 330,
    height:'80%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.lightorange
  },
  buttonLabel: {
    fontSize: 25 / fontScale,
    fontWeight: '600',
    color:colors.white,
    
  }
})

export const languageCardStyle = StyleSheet.create({
  languageCardContainer: {
    width: '47%',
    height: '12%',
    borderRadius: '10%',
    backgroundColor: colors.white,
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 20,
    marginTop: '6%',
    justifyContent:'center'
},
  languageName: {
      fontWeight: '700',
      fontSize: 15 / fontScale
    },
  languageNameContainer: {
    marginLeft:'4%'
  }
})

export const supportedLangsViewStyle = StyleSheet.create({
  supportedLangsContainer: {
    flex: 7
  },
  innerViewOfSupportedLangs: {
    flex: 1,
    flexWrap: 'wrap',
    alignContent: 'space-around',
    paddingHorizontal: '2%',
},
})