import { StyleSheet } from "react-native";
import {fontScale, colors} from '../../../base'
export const confirmPublishedContainer = StyleSheet.create({
  confirmPublishedContainer: {
    flex: 1,
    padding: "3.58%",
    backgroundColor: colors.white,
  }
})

export const button = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '5%'

  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttons: {
    width: 163,
    height: 55,
    borderWidth: 2,
    borderColor: '#F78154',
    margin: '3%',
    borderRadius: '6%',
    paddingHorizontal: '4%',
    paddingTop: '1.5%'
  }
})

export const infos = StyleSheet.create({
  title: {
    fontSize: 36 / fontScale,
    fontWeight: "bold",
    alignSelf: 'center'
  },
  congratsText: {
    fontSize: 16,
    alignSelf: 'center',
    marginTop: '4%',
    marginHorizontal: '5%',
    textAlign: 'center'
  },
  image: {
    alignSelf: 'center',
    margin: '18%',
    width: '35%',
    height: '35%'
  },
  next: {
    fontSize: 32,
    fontWeight: "bold",
    alignSelf: 'center'
  }
})