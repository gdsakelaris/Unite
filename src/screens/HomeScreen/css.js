import { StyleSheet } from "react-native";
import { fontScale, colors } from "../../base";


export const homeScreenContainer = StyleSheet.create({
  homeScreenContainer: {
    flex: 1
  }
})

export const providedServicesContainer = StyleSheet.create({
  servicesContainer: {
    flex: 8,
    flexWrap: 'wrap',
    alignContent: 'space-around',
    paddingTop: '5%',
  },
})

export const locationText = StyleSheet.create({
  locationSignContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  locationTextContainer: {
    marginLeft: '1%'
  },
  locationText: {
    fontSize: 20 / fontScale,
    color: colors.green,
    fontWeight: '600',
  },
})

export const searchbar = StyleSheet.create({
   searchbar: { 
      shadowColor: colors.lightdark,
      shadowOpacity:0.25,
      shadowRadius:10,
      borderWidth:1,
      borderColor: colors.lightdark,
      shadowOffset:{ height: 5 }
  }
})

export const servicecard = StyleSheet.create({
   servicecard: { 
    shadowColor:colors.lightdark,
    shadowOpacity:0.25,
    shadowRadius:10,
    borderWidth:0.25,
    shadowOffset:{ height: 9 }
  
   }
})