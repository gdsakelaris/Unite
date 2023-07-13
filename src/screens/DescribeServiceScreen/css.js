import { StyleSheet, useWindowDimensions } from "react-native";
import { colors, fontScale } from "../../base";
export const title = StyleSheet.create({
    titleContainer: {
      bottom:'4%',
      backgroundColor:'red'
    
    },
    titleStyle : {
      fontSize: 40 / fontScale,
      lineHeight: '40%'

    },
})

export const section = StyleSheet.create({
  sectionContainer: {
    // flex: 2,
    // paddingLeft: 20,
    paddingHorizontal: 5,
    paddingBottom: 30,

  },
  titleSectionContainer: {
    flex: 1,
    paddingBottom: 10,
    //marginBottom:'3%'
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
    borderWidth:0.5,
    borderRadius:5, 
    backgroundColor:colors.lightgray, 
    paddingVertical:3, 
    paddingHorizontal:20
  },
  descriptionTextInput: {
    height:'70%', 
    borderWidth:0.5,
    borderRadius:5, 
    backgroundColor:colors.lightgray,  
    paddingHorizontal:10, 
    marginTop: 12,
  },
})

export const media = StyleSheet.create({
  mediaSection: {
    flex: 1
  },  
  contentContainer: {
    paddingLeft: 10,
    flex: 3, 
    justifyContent:'space-around',
  },
  inputFieldForMedia: {
    paddingLeft: 10,
    flexDirection:'row', 
    justifyContent:'space-between', 
    width:'53%',
    paddingBottom: 10,
  },
  mediaTextInput: {
    // borderRadius: colors.lightgray,
    borderWidth:0.5, 
    borderRadius:7, 
    backgroundColor: colors.lightgray,  
    paddingHorizontal:10, 
    width:'100%', 
    height:'90%',
    marginLeft:'5%',
    top: '2%'

    
  },
})

export const location = StyleSheet.create({
  locationSection: {
    flex: 1
  },  
  contentContainer: {
    paddingLeft: 10,
    flex: 3, 
    justifyContent:'space-around'
  },
  inputFieldForLocation: {
    paddingLeft: 8,
    flexDirection:'row', 
    justifyContent:'space-between', 
    width:'70%',
  },
  locationTextInput: {
    // borderRadius: colors.lightgray,
    borderWidth:0.5, 
    borderRadius:7, 
    backgroundColor: colors.lightgray,  
    paddingHorizontal:10,
    width:'100%', 
    height:'120%',
    marginLeft:'5%',
    // top: '1%'
  },
})

export const hour = StyleSheet.create({
  dropDownHourButtonsContainer: {
    flexDirection:'row', 
    justifyContent:'space-around', 
    height:'10%',
    alignItems:'center',
  },
  saveButton: {
    width:'43%',
    height: 45,
    borderRadius:'10%',
    backgroundColor: colors.lightorange,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:colors.lightorange
  },
  cancelButton: {
    width:'43%',
    height: 45,
    borderRadius:'10%',
    backgroundColor: colors.white,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1
  },
  saveButtonText: {
    fontSize: 20 / fontScale,
    fontWeight:'400',
    color: colors.white,
  },
  cancelButtonText: {
    fontSize: 20 / fontScale,
    fontWeight:'400',
  },
  customHeaderForDropDown: {
    alignSelf:'center',
    fontSize: 24 / fontScale,
    fontWeight:'600',
  },
  customHeaderForDropDownView: {
    width:'100%', 
    alignItems:'center', 
    justifyContent:'center', 
    borderBottomWidth:0.5,
    borderBottomColor:colors.lightdark,
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
    height:'80%',
    // borderRadius: colors.lightgray,
    borderWidth:0.5,
    borderColor:colors.lightgray,
    borderRadius:5, 
    backgroundColor:colors.lightgray, 
    flexDirection:'row', 
    
  },
  timePickingField: {
    width:'82%', 
    alignItems:'center',
    justifyContent:'center',
    
  },
  displayedPickingTime: {
    fontSize: 14 / fontScale, 
    color:'black'
  },
  arrowDownIcon: {
    alignSelf:'center',
    bottom:'20%',
    right:'30%'
  },
  titleForTimePickingField: {
    fontSize: 14 / fontScale
  },
  hourSection: {
    flex: 3
  },
  hourContentContainer: {
    flex: 7,
    paddingLeft: 15,
  },
  openAndCloseHourContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:'100%',
  }
})

export const addImage = StyleSheet.create({
  addImageSection: {
   flex: 2,
   // backgroundColor:'red'
  },
  addImageSectionTitleContainer: {
    flex: 0.5
  }
})

export const nextBtn = StyleSheet.create({
  nextBtnContainer: {
    alignItems:'center',
    justifyContent:'center',
    width:'30%',
    alignSelf:'flex-end',
    backgroundColor:colors.lightorange,
    borderRadius:'15%',
    height:'5%',
    marginRight:'5%',
    marginBottom:'10%',
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  nextBtnLabel: {
    fontSize: 21 / fontScale,
    fontWeight:'700',
    color:'white',

  }
})

export const describeServicePageContainer = StyleSheet.create({
  describeServicePageContainer: {
    flex: 1,
    paddingHorizontal:'3%',    
    backgroundColor:colors.white,
    justifyContent:'space-evenly',

  }
})