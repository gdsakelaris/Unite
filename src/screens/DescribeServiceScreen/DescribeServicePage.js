//Describe Service screen which will be used for the volunteer to enter the information about the resource they provides 
import DescribeServicePageContainer from "./subscreens/DescribeServicePageContainer";
import AboutSection from "./subscreens/AboutSection";
import HourSection from "./subscreens/HourSection";
import MediaSection from "./subscreens/MediaSection";
import LocationSection from "./subscreens/LocationSection";
import ImageSection from "./subscreens/ImageSection";
import NextBtn from "./subscreens/NextBtn";
import ScreenTitle from "../../components/ScreenTitle";
import { title as styles } from "./css";
import {ScrollView, View} from "react-native";
const DescribeServicePage = ({navigation}) => {
  return (
    <DescribeServicePageContainer>
      <ScreenTitle titleMessage={'Describe your service'} style={styles.titleStyle} numberOfLines={2}/>
      <ScrollView>
        <AboutSection/>
        <HourSection/>
        <MediaSection/>
        <LocationSection/>
        <ImageSection/>
      </ScrollView>
      <NextBtn navigation={navigation} navigateTo={'Third Step'}/>
    </DescribeServicePageContainer>
  )

}
export default DescribeServicePage;