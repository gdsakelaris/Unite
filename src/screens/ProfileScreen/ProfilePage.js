import ProfileContainer from "./subscreens/ProfileContainer"
import ProfileOption from "./subscreens/ProfileOption"
import ProfileOptionsPortion from "./subscreens/ProfileOptionsPortion"
import ProfileImage from "./subscreens/ProfileImage"
const ProfilePage = ({ navigation }) => (
  <ProfileContainer>
    <ProfileImage navigation={navigation}/>
    <ProfileOptionsPortion>
      <ProfileOption optionName={'Bookmarked Services'} iconName={'bookmark'} navigateTo={'BookmarkedServices'} navigation={navigation}/>
      <ProfileOption optionName={'View Published Service'} iconName={'md-document-outline'} navigateTo={'BookmarkedServices'} navigation={navigation}/>
      <ProfileOption optionName={'Settings'} iconName={'settings-sharp'} navigateTo={'SettingsNavigation'} navigation={navigation}/>
      <ProfileOption optionName={'Help'} iconName={'help-with-circle'} navigateTo={'Help'} navigation={navigation}/>
      <ProfileOption optionName={'Log Out'} iconName={'log-out-outline'} navigateTo={'BookmarkedServices'} navigation={navigation}/>
    </ProfileOptionsPortion>
  
  </ProfileContainer>
)
export default ProfilePage;