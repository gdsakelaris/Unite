import React, { useState } from 'react';
import { View, Image, ScrollView, Pressable, Text } from 'react-native';
import { star, location } from './icons';
import {
  serviceFullPageDetail as styles,
  serviceOption as optionStyles,
  serviceOptionDetail as optionDetailStyles,
  serviceFullPageImage as imageStyles,
  serviceFullPageInfo as infoStyles,
  serviceFullPageContainer as containerStyles,
} from './css';


const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


// Helper function to format time as AM/PM
const formatTime = (time) => {
  const date = new Date(`2023-08-21T${time}`);
  return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
};

const HoursSection = ({ hours }) => {
  const renderDaySchedule = (dayName, schedule) => (
    <View key={dayName} style={styles.daySchedule}>
      <Text>{daysOfWeek[dayName - 1]}:</Text>
      <Text>{schedule ? `${formatTime(schedule.open_time)} to ${formatTime(schedule.close_time)}` : 'Closed'}</Text>
    </View>
  );

  return (
    <View style={styles.hoursContainer}>
      {Object.keys(hours).map((day) => (
        <View key={day} style={styles.dayColumn}>
          {renderDaySchedule(day, hours[day])}
        </View>
      ))}
    </View>
  );
};

// Define a component for rendering the Media section
const MediaSection = ({ website, phone }) => (
  <View>
    <Text>{website}</Text>
    <Text>{phone}</Text>
  </View>
);

// Define a component for rendering the About section
const AboutSection = ({ description }) => (
  <Text>{description}</Text>
);

const ServiceOption = ({ title, setDetailOption, detailOption, index }) => (
  <View
    style={[
      optionStyles.serviceDetailOptionStyle,
      { borderBottomWidth: detailOption === index ? 4 : 0 },
    ]}
  >
    <Pressable onPress={() => setDetailOption(index)}>
      <Text style={optionStyles.serviceDetailOptionTextStyle}>{title}</Text>
    </Pressable>
  </View>
);

const ServiceOptionDetail = ({ detailOption, resource }) => (
  <View style={optionDetailStyles.serviceOptionDetail}>
    <ScrollView>
      {detailOption === 1 && <HoursSection hours={resource.hours} />}
      {detailOption === 2 && <MediaSection website={resource.website} phone={resource.phone} />}
      {detailOption === 0 && <AboutSection description={resource.description} />}
    </ScrollView>
  </View>
);

const ServicePageImage = ({ source }) => (
  <View style={imageStyles.serviceImageStyle}>
    <Image source={require('../../images/food.jpeg')} style={imageStyles.imageStyle} />
  </View>
);

const ServicePageInfo = () => (
  <View style={infoStyles.serviceInfoStyle}>
    <View style={infoStyles.infoStyle1}>
      <Text style={infoStyles.serviceTitleStyle}>Anchor Church</Text>
      <Text>
        {star}
        <Text>3.0</Text>
      </Text>
      <Text style={infoStyles.numberOfReviewStyle}>6 Reviews</Text>
    </View>

    <View style={infoStyles.infoStyle2}>
      {location}
      <Text>Austin, Texas</Text>
    </View>
  </View>
);

const ServicesFullPage = ({ route }) => {
  const [detailOption, setDetailOption] = useState(0);
  const { resource } = route.params;

  return (
    <View style={containerStyles.serviceFullPagecontainer}>
      <ServicePageImage />
      <ServicePageInfo />
      <View style={styles.serviceDetailStyle}>
        <View style={styles.servicesDetailInnerContainer}>
          <View style={styles.serviceDetailOptionContainer}>
            <ServiceOption title='About' setDetailOption={setDetailOption} detailOption={detailOption} index={0} />
            <ServiceOption title='Hours' setDetailOption={setDetailOption} detailOption={detailOption} index={1} />
            <ServiceOption title='Media' setDetailOption={setDetailOption} detailOption={detailOption} index={2} />
          </View>
          {detailOption !== 0 && <ServiceOptionDetail detailOption={detailOption} resource={resource} />}
        </View>
      </View>
    </View>
  );
};

export default ServicesFullPage;
