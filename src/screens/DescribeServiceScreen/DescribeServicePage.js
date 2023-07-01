//Describe Service screen which will be used for the volunteer to enter the information about the resource they provides 
import DescribeServicePageContainer from "./subscreens/DescribeServicePageContainer";
import Title from "./subscreens/Title";
import AboutSection from "./subscreens/AboutSection";
import HourSection from "./subscreens/HourSection";
import MediaSection from "./subscreens/MediaSection";
import LocationSection from "./subscreens/LocationSection";
import ImageSection from "./subscreens/ImageSection";
import NextBtn from "./subscreens/NextBtn";
const DescribeServicePage = ({navigation}) => {
  return (
    <DescribeServicePageContainer>
      <Title/>
      <AboutSection/>
      <HourSection/>
      <MediaSection/>
      <LocationSection/>
      <ImageSection/>
      <NextBtn navigation={navigation}/>
    </DescribeServicePageContainer>
  )

}
export default DescribeServicePage;