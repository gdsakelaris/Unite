/**
 * DescribeServicePage component.
 * This screen is used by volunteers to enter information about the resource they provide.
 *
 * @component
 * @param {object} navigation - The navigation object provided by React Navigation.
 * @returns {JSX.Element} DescribeServicePage component
 */


import DescribeServicePageContainer from "./subscreens/DescribeServicePageContainer";
import AboutSection from "./subscreens/AboutSection";
import HourSection from "./subscreens/HourSection";
import MediaSection from "./subscreens/MediaSection";
import LocationSection from "./subscreens/LocationSection";
import ImageSection from "./subscreens/ImageSection";
import NextBtn from "./subscreens/NextBtn";
import ScreenTitle from "../../components/ScreenTitle";
import { title as styles } from "./css";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useResourceContext } from "../../context/ResourceProvider";
import resourceDataCompletenessChecker from "../../utils/resourceDataCompletenessChecker";

const DescribeServicePage = ({navigation}) => {
  const {resource} = useResourceContext()
  return (
    <DescribeServicePageContainer>
        {/* Render the screen title */}
        <ScreenTitle titleMessage={'Describe your service'} style={styles.titleStyle} numberOfLines={2}/>
        <KeyboardAwareScrollView nestedScrollEnabled >
            {/* Render the sections for describing the service */}
            <AboutSection/>
            <HourSection/>
            <MediaSection/>
            <LocationSection/>
            <ImageSection/>
        </KeyboardAwareScrollView>
        {/* Render the NextBtn for navigation */}
        <NextBtn onPress={() => {
          //check if all the fields in the resource have been entered except images 
          const allFilled = resourceDataCompletenessChecker(resource)
          //if all the fields have been entered. Move to publish page
          if (allFilled) navigation.navigate('Third Step')
          
          //otherwise giver alert to user
          else alert("Some fields has not been filled out.")

        }}/>
    </DescribeServicePageContainer>
  )

}
export default DescribeServicePage;