import { StyleSheet } from "react-native";
import { colors, fontScale } from "../../base";
export const title = StyleSheet.create({
    titleContainer: {
      flex: 1, 
      padding: 20,
    
    },
    titleStyle : {
      fontSize: 40 / fontScale,
      fontWeight: '600',
    },
})

export const section = StyleSheet.create({
  sectionContainer: {
    flex: 2, 
    paddingLeft: 20,
  },
  titleSectionContainer: {
    flex: 1
  },
  titleSection: {
    fontSize: 18 / fontScale, 
    fontWeight:'700'
  },
})

export const about = StyleSheet.create({
  contentContainer: {
    flex: 4, 
    paddingLeft: 20
  },
  inputFieldForTitleContainer: {
    flexDirection:'row', 
    justifyContent:'space-between'
  },
  label: {
    right: 5, 
    fontSize:16 / fontScale, 
    alignSelf:'center', 
    fontWeight:'400'
  },
  titleTextInput: {
    width: '70%',
    height:'100%', 
    borderRadius: colors.lightgray, 
    borderWidth:0.15, 
    borderRadius:5, 
    backgroundColor:colors.lightgray, 
    paddingVertical:3, 
    paddingHorizontal:20
  },
  descriptionTextInput: {
    height:'70%', 
    borderRadius: colors.lightgray, 
    borderWidth:0.15, 
    borderRadius:5, 
    backgroundColor:colors.lightgray,  
    paddingHorizontal:10, 
    marginTop: 12
  },
})

export const media = StyleSheet.create({
  mediaSection: {
    flex: 1
  },  
  contentContainer: {
    paddingLeft: 20, 
    flex: 3, 
    justifyContent:'space-around',
    
  },
  inputFieldForMedia: {
    paddingLeft:8, 
    flexDirection:'row', 
    justifyContent:'space-between', 
    width:'53%',
  },
  mediaTextInput: {
    borderRadius: colors.lightgray,
    borderWidth:0.15, 
    borderRadius:7, 
    backgroundColor: colors.lightgray,  
    paddingHorizontal:10, 
    width:'100%', 
    height:'100%',
    marginLeft:'4%'
  },
})

export const location = StyleSheet.create({
  locationSection: {
    flex: 1
  },  
  contentContainer: {
    paddingLeft: 20, 
    flex: 3, 
    justifyContent:'space-around'
  },
  inputFieldForLocation: {
    paddingLeft:8, 
    flexDirection:'row', 
    justifyContent:'space-between', 
    width:'70%',
  },
  locationTextInput: {
    borderRadius: colors.lightgray, 
    borderWidth:0.15, 
    borderRadius:7, 
    backgroundColor: colors.lightgray,  
    paddingHorizontal:10, 
    width:'100%', 
    height:'100%',
    marginLeft:'4%'
  },
})

export const hour = StyleSheet.create({
  dropDownHourButtonsContainer: {
    flexDirection:'row', 
    justifyContent:'space-around', 
    height:'18%', 
    alignItems:'center',
  },
  saveButton: {
    width:'43%',
    height:'100%',
    borderRadius:'10%',
    backgroundColor: colors.lightorange,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1
  },
  cancelButton: {
    width:'43%',
    height:'100%',
    borderRadius:'10%',
    backgroundColor: colors.white,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1
  },
  saveButtonText: {
    fontSize: 20 / fontScale,
    fontWeight:'400',
  },
  cancelButtonText: {
    fontSize: 20 / fontScale,
    fontWeight:'400',
    
  },
  customHeaderForDropDown: {
    alignSelf:'center'
  },
  timePickingFieldForDayContainer: {
    flexDirection:'row', 
    flex: 1, 
    justifyContent:'space-between'
  },
  day: {
    fontSize: 14 / fontScale
  },
  timePickingFieldContainer: {
    width: '35%', 
    height:'70%', 
    borderRadius: colors.lightgray, 
    borderWidth:0.15, 
    borderRadius:5, 
    backgroundColor:colors.lightgray, 
    flexDirection:'row', 
    //justifyContent:'space-between'
  },
  timePickingField: {
    width:'82%', 
    alignItems:'center',
    justifyContent:'center'
  },
  displayedPickingTime: {
    fontSize: 14 / fontScale, 
    color:'black'
  },
  arrowDownIcon: {
    alignSelf:'center'
  },
  titleForTimePickingField: {
    fontSize: 14 / fontScale
  },
  hourSection: {
    flex: 3
  },
  hourContentContainer: {
    flex: 7,
    paddingLeft: 20,
  }
})

export const addImage = StyleSheet.create({
  addImageSection: {
    flex: 1.5
  }
})

export const nextBtn = StyleSheet.create({
  nextBtnContainer: {
    flex: 1, 
    alignItems:'flex-end'
  },
  nextBtnView: {
    backgroundColor: colors.lightorange, 
    width:'30%', 
    height:'50%', 
    justifyContent:'center', 
    alignItems:'center', 
    borderRadius:'15%'
  },
  nextBtnLabel: {
    fontSize: 30 / fontScale, 
    fontWeight:'700', 
    color:'white'

  }
})

export const describeServicePageContainer = StyleSheet.create({
  describeServicePageContainer: {
    flex: 1,
    marginRight:25,
  }
})