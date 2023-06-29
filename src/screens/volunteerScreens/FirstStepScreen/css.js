import { StyleSheet } from "react-native";
import {fontScale, colors} from '../../../base'
export const firstStepScreenContainer = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  }
})

export const cardContainer = StyleSheet.create({
  providedServicesContainer: {
    flex: 8,
    flexWrap: "wrap",
    alignContent: "space-around",
    paddingTop: "5%",
  },
})

export const title = StyleSheet.create({
  title: {
    fontSize: 40 / fontScale,
    fontWeight: 'bold',
    padding: 10,
    maxWidth: '80%',
  },
})