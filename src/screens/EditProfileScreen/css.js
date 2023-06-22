import { StyleSheet } from "react-native"
import { fontScale, colors } from "../../base"
export const editProfileContainer = StyleSheet.create({
  editProfileContainer: {
    flex: 1,
    backgroundColor: colors.white
  }
})

export const editProfile = StyleSheet.create({
  editProfilePictureContainer: {
    flex: 3,
    alignItems:'center',
    justifyContent:'center'
  },
  profilePictureView: {
    width: '45%',
    height: '69%',
    borderRadius:'100%',
    backgroundColor: colors.white,
    bottom:'10%'
   
  },
  profilePicture: {
    width:'100%',
    height:'100%',
    borderRadius:'100%'
  },
})

export const editProfileInfoContainer = StyleSheet.create({
  editProfileInfoContainer: {
    flex: 7,
    bottom:'2%'
  },
})

export const editProfileBtn = StyleSheet.create({
  editProfilePictureButtonView: {
    position:'absolute',
    width: '18%',
    height: 33,
    borderRadius: '50%',
    backgroundColor:'#167EE6',
    justifyContent:'center',
    alignItems:'center',
    bottom: '5%', 
    left: '68%'
  },
})

export const editProfileInfo = StyleSheet.create({
  editProfileInfoField: {
    width:'100%',
    height: '13%',
    marginBottom: '8%',
    marginLeft: '8%',
    justifyContent:'space-around'
  },
  editProfileInfoTitle: {
    fontSize: 20 / fontScale,
    fontWeight:'700',
    color:'#d3d3d3'
  },
  contentTextStyle: {
    width:'100%',
    height:'40%',
    fontSize: 20/ fontScale,
    fontWeight:'700',
    borderBottomWidth: 0.199
  }
})