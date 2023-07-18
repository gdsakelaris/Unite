//this file will contain the css of all the components
import { StyleSheet } from "react-native";
import {fontScale, colors} from '../base'
export const imageInputList = StyleSheet.create({
  inputListContainer: {
    flexDirection:'row',
    // width:'100%',
    paddingLeft:10,
    // height:'60%',
  },
  scrollViewContent: {
    flex: 1,
    width:'100%',
    // height:'100%'
    alignItems:'center',
  }
})

export const imageInput = StyleSheet.create({
  imageInputContainer: {
    backgroundColor: '#dcdcdc',
    borderRadius: 10, 
    height: 100,
    width: '27%',
    justifyContent:'center',
    alignItems:'center',
    overflow:'hidden',
    marginRight:'3%'

  },
  image: {
    width:'100%',
    height:'100%'
  }
})

export const servicecard = StyleSheet.create({
  cardStyle: {
    width: '45%',
    height: '25%',
    marginBottom: '5%',
    borderWidth: 0.05,
    borderRadius: 12,
    overflow:'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardTitleContainer: {
    position: 'absolute',
    backgroundColor: colors.white ,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    top: '70%',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    height: '30%'
  },
  cardTitleContainerClicked: {
    position: 'absolute',
    backgroundColor: colors.orange ,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    top: '70%',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    height: '30%'
  },
  cardTitle: {
    fontSize: 18 / fontScale,
    fontWeight: '400'
  },
  cardTitleClicked: {
    fontSize: 18 / fontScale,
    fontWeight: '700',
    color: colors.white
  },
})

export const searchBar = StyleSheet.create({
  searhBarDefaultStyle: {
    backgroundColor:'white', 
    borderColor:'black', 
    marginHorizontal:'3%', 
    borderWidth:1
  }
})

export const reviewCard = StyleSheet.create({
  container: {
    borderColor:'transparent',
    backgroundColor:colors.white
  },
  titleText: {
    fontWeight:'600',
  },
  titleMargin: {
    marginLeft:'7%'
  },
  fiveStars: {
    flexDirection:'row', 
    justifyContent:'space-between',
    marginRight: 10
  },
  postedDateStyle: {
    fontWeight: '300',
  }
})

export const resourceCard = StyleSheet.create({
  resourceCardContainer: {
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderColor: "#285943",
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 10,
    height: 239,
    borderWidth: 1,
    margin: 14,
  },
  imageContainer: {
    padding:10, 
    flex:1,
    alignItems:'center',
    justifyContent:'space-between'
    
  },
  image: {
    width: '100%',
    height: '80%',
    borderRadius: 12,
    marginTop: 10,

  },
  bookmarkButton: {
    position: "absolute",
    top: 20,
    right: 10,
    backgroundColor: colors.transparent,
  },

  resourceCardContent: {
    flex: 2,
    padding: 10,
  },
  resourceCardTitle: {
    fontSize: 20 / fontScale,
    fontWeight: "bold",
    color: colors.orange,
  },
  resourceCardDescriptionContainer: {
    width:'100%', 
    flexWrap: 'wrap', 
    flexDirection:'row', 
    paddingVertical:10
  },
  resourceCardDescription: {
    fontSize: 16 / fontScale,
   
  },
  whiteBox: {
    width: 25 / fontScale,
    height: 27 / fontScale,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 4,
  },
  orangeBox: {
    width: 25 / fontScale,
    height: 27 / fontScale,
    backgroundColor: colors.orange,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 4,
  },

  resourceCardRatingContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical:5
  },
  resourceCardRatingAndReview: {
    fontWeight: '700',
    fontSize: 14 / fontScale
  },

  resourceCardContactInfoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    marginBottom:'2%'
  },
  editbtn: {
       width: '60%',
      height: '12%',
      borderRadius: 5,
      backgroundColor: colors.lightorange,
      justifyContent:'center',
      alignItems:'center',
      alignSelf: 'flex-end',
  },

  edtbtntxt: {
      color: colors.white,
      fontSize: 16 / fontScale,
      fontWeight: 'bold',
      width:'100%',
      height:'100%',
      top:'10%'
      
  },
  resourceCardcontactInfo: {
    fontSize: 16 / fontScale
  }
})

export const dialog = StyleSheet.create({
  dialogDefaultTitleStyle: {
    textAlign:'center'
  }
})

export const switchStyle = StyleSheet.create({
  switchBtnText: {
    color: colors.white, 
    fontSize: 14
  }
})

export const screenTitle = StyleSheet.create({
  screenTitle: {
    fontSize: 40 / fontScale,
    fontWeight: 'bold'
  }
})