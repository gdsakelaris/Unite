import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons, SimpleLineIcons, Entypo} from '@expo/vector-icons';


const Profile = () => {
  return (
    <View style={styles.container}>
        {/* container for profile image and edit photo button */}
        <View style={styles.userProfileInfoContainer}>
              {/* image container */}
              <View style={styles.imageProfileContainer} >
                  {/* Profileimage */}
                  <Image source={require('../images/resilienceLogo.jpeg')} style={styles.imageStyle} resizeMode='cover'/>
              </View>

              {/* edit profile button */}
              <TouchableOpacity style={styles.editProfileButtonContainer}>
                  <Text style={styles.editButtonTextStyle}
                        adjustsFontSizeToFit={true}    //text will be resized automatically when the size of its container changes
                        minimumFontScale={0.5}   //this prop indicates how much the size of text will be scaled down (half of the size, in this ccase)
                        > 
                            edit profile
                  </Text>
              </TouchableOpacity>

        </View>

        {/* container for list of options*/}
        <View style={styles.listOfOptionsContainer}>
            {/* Bookmarked Services View */}
            <View style={styles.servicesContainer}>
                {/* icon for bookmarked service */}
                <Ionicons 
                      name="bookmark-sharp" 
                      size={24} 
                      color="#ff4500" 
                      adjustsFontSizeToFit={true}
                      minimumFontScale={0.5}
                      style={styles.servicesIcon}/>
                {/* Clickable Text */}
                <TouchableOpacity 
                      style={styles.servicesClickableTextContainer}>
                    <Text 
                        style={styles.clickableTextStyle}
                        adjustsFontSizeToFit={true}
                        minimumFontScale={0.5}
                        >
                            Bookmarked Services
                        </Text>
                </TouchableOpacity>
                {/*View More Arrow Icon */}
                <TouchableOpacity 
                      style={styles.viewMoreArrowContainerforService}>
                  <SimpleLineIcons 
                        name="arrow-right" 
                        size={18} 
                        color="black" 
                        adjustsFontSizeToFit={true}
                        minimumFontScale={0.5}/>
                </TouchableOpacity>

            </View>

            {/* Settings View*/}
            <View style={styles.servicesContainer}>
                {/* icon for setting */}
                <Ionicons name="settings-sharp" 
                          size={24}
                          color="#ff4500" 
                          adjustsFontSizeToFit={true}
                          minimumFontScale={0.5}
                          style={styles.servicesIcon} />
                 {/* Clickable Text */}
                 <TouchableOpacity 
                      style={styles.servicesClickableTextContainer}>
                    <Text 
                        style={styles.clickableTextStyle}
                        adjustsFontSizeToFit={true}
                        minimumFontScale={0.5}
                        >
                            Settings
                        </Text>
                </TouchableOpacity>

                {/*View More Arrow Icon */}
                <TouchableOpacity 
                      style={styles.viewMoreArrowContainerforService}>
                  <SimpleLineIcons 
                        name="arrow-right" 
                        size={18} 
                        color="black" 
                        adjustsFontSizeToFit={true}
                        minimumFontScale={0.5}/>
                </TouchableOpacity>
            </View>

            {/* Help View*/}
            <View style={styles.servicesContainer}>
                {/* icon for help */}
                <Entypo name="help-with-circle" 
                        size={24}
                        color="#ff4500" 
                        adjustsFontSizeToFit={true}
                        minimumFontScale={0.5}
                        style={styles.servicesIcon} />
                {/* Clickable Text */}
                <TouchableOpacity 
                      style={styles.servicesClickableTextContainer}>
                    <Text 
                        style={styles.clickableTextStyle}
                        adjustsFontSizeToFit={true}
                        minimumFontScale={0.5}
                        >
                            Help
                        </Text>
                </TouchableOpacity>
                {/*View More Arrow Icon */}
                <TouchableOpacity 
                      style={styles.viewMoreArrowContainerforService}>
                  <SimpleLineIcons 
                        name="arrow-right" 
                        size={18} 
                        color="black" 
                        adjustsFontSizeToFit={true}
                        minimumFontScale={0.5}/>
                </TouchableOpacity>
            </View>

            {/* Log Out View */}

            <View style={[styles.servicesContainer, {borderBottomWidth:0}]}>
                 {/* icon for log out */}
                 <Entypo name="log-out" 
                          size={24}
                          color="#ff4500" 
                          adjustsFontSizeToFit={true}
                          minimumFontScale={0.5}
                          style={styles.servicesIcon}/>
                {/* Clickable Text */}
                <TouchableOpacity 
                      style={styles.servicesClickableTextContainer}>
                    <Text 
                        style={styles.clickableTextStyle}
                        adjustsFontSizeToFit={true}
                        minimumFontScale={0.5}
                        >
                            Log Out
                        </Text>
                </TouchableOpacity>
                {/*View More Arrow Icon */}
                <TouchableOpacity 
                      style={styles.viewMoreArrowContainerforService}>
                  <SimpleLineIcons 
                        name="arrow-right" 
                        size={18} 
                        color="black" 
                        adjustsFontSizeToFit={true}
                        minimumFontScale={0.5}/>
                </TouchableOpacity>
            </View>

            <View style={styles.freeSpace}>
                
            </View>
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  userProfileInfoContainer: {
    flex: 5,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#ffe4e1'
  },
  imageProfileContainer: {
    width: '36%',
    height: '38%',
    borderRadius:'80%',
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    top:'5%'
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius:'100%'
  },
  editProfileButtonContainer: {
    width: '30%',
    height: '10%',
    borderRadius:'8%',
    backgroundColor: '#2e8b57',
    marginTop:'3%',
    justifyContent:'center',
    alignItems:'center',
    top:'5%',
    padding: 5
  },
  editButtonTextStyle: {
    fontSize: 19,
    color:'white',
    fontWeight:'500'
  },


  listOfOptionsContainer: { 
    flex: 7,
    backgroundColor:'white'
  },
  servicesContainer: {
    flex:2,
    backgroundColor:'white',
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth: 0.25
  },
  servicesIcon: {
    marginLeft:'5%'

  },
  servicesClickableTextContainer: {
    marginLeft:'3%'

  },
  clickableTextStyle:{
    fontSize: 19,
    fontWeight:'500'

  },
  viewMoreArrowContainerforService: {
    flex: 1,
    alignItems:'flex-end',
    marginRight: '5%'
    
  },
  freeSpace: {
    flex: 5,
    flexDirection:'row',
    paddingTop:'5%'
    
  }




});
export default Profile;