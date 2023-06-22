import DescribeServicePageContainer from "./subscreens/DescribeServicePageContainer";
import Title from "../PickLanguageScreen/subscreens/Title";
import AboutSection from "./subscreens/AboutSection";
import HourSection from "./subscreens/HourSection";
import MediaSection from "./subscreens/MediaSection";
import LocationSection from "./subscreens/LocationSection";
import ImageSection from "./subscreens/ImageSection";
import NextBtn from "./subscreens/NextBtn";
const DescribeServicePage = () => {
  return (
    <DescribeServicePageContainer>
      <Title/>
      <AboutSection/>
      <HourSection/>
      <MediaSection/>
      <LocationSection/>
      <ImageSection/>
      <NextBtn/>
    </DescribeServicePageContainer>
  )

}
export default DescribeServicePage;