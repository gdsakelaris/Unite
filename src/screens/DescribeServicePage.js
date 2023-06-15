import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
import { MaterialIcons, Ionicons, Feather } from '@expo/vector-icons';
import CustomModalDatetimePicker from '../components/CustomModalDatetimePicker';
import { useState } from 'react';
import ImageInputList from '../components/ImageInputList';


const Title = ({titleOnLine1, titleOnLine2, styles}) => (
  <View style={styles.titleContainer} >
    <Text style={styles.titleStyle}>{titleOnLine1}</Text>
    <Text style={styles.titleStyle}>{titleOnLine2}</Text>
  </View>
)

const AboutSection = () => (
  <View style={styles.sectionContainer}>
    <View style={styles.titleSectionContainer}>
      <Text style={styles.titleSection}>
          1 About
      </Text>
    </View>
    <View style={styles.aboutTextInputContainer}>
      <View style={styles.aboutTitleTextInputContainer}>
          <Text style={styles.title}>
              Title:
          </Text>
          <TextInput style={styles.titleTextInput} clearButtonMode='always'/>
      </View>
      <TextInput style={styles.descriptionTextInput} multiline={true} clearButtonMode='always'/>
    </View>
  </View>
)


const HourOption = ({date, setVisible, openTime, setDayClicked}) => {
  let openAt = ''
  let closeAt = ''
  let isOpen = ''
  for (let weekDay of openTime) {
    if (weekDay.date === date) {
      openAt = weekDay.openAt
      closeAt = weekDay.closeAt
      isOpen = weekDay.isOpen
    }
  }

  return isOpen === 'Open' ? (
    <View style={styles.availableDayContainer}>
    <Text style={styles.availableDay}>
      {date}:
    </Text>
    <DropDownButton setVisible={setVisible} value={openAt} setDayClicked={setDayClicked} date={date}/>
    <Text style={styles.availableDay}>
      to
    </Text>
    <DropDownButton setVisible={setVisible} value={closeAt} setDayClicked={setDayClicked} date={date}/>
  </View>

  ) : <View style={styles.availableDayContainer}>
  <Text style={styles.availableDay}>
    {date}:
  </Text>
  <DropDownButton setVisible={setVisible} value={'Closed'} setDayClicked={setDayClicked} date={date}/>
</View>

}
const DropDownButton = ({setVisible, value, setDayClicked, date}) => {
  return (<View style={styles.dropDownButtonContainer}>
    <View style={{ width:'82%', alignItems:'center'}}>
      <Text style={{fontSize:14, color:'black', }}>{value}</Text>
    </View>
    <TouchableOpacity onPress={() => {setVisible(true)
                                      setDayClicked(date)}} >
      <MaterialIcons name="keyboard-arrow-down" size={20} color="black" style={styles.arrowDownIcon}/>
    </TouchableOpacity>
  </View>)
}
const HourSection = ({setVisible, openTime, setDayClicked}) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  return (
  <View style={[styles.sectionContainer, {flex: 3}]}>
    <View style={styles.titleSectionContainer}>
      <Text style={styles.titleSection}>
          2 Hours
      </Text>
    </View>
    <View style={[styles.sectionContainer, {flex: 7}]}>
      {days.map((e,i) => (
        <HourOption date={e} setVisible={setVisible} key={i.toString()} openTime={openTime} setDayClicked={setDayClicked}/>
      ))}
    </View>
  </View>)
}

const MediaOption = ({icon, placeholder}) => (
  <View style={[styles.mediaOption, {marginTop:'4%'}]}>
    {icon === "phone" ?
                      <Feather name={icon} size={24} color="black" />
                      :<Ionicons name={icon} size={24} color="black" />}
    <TextInput style={styles.mediaOptionTextInput} placeholder={placeholder} clearButtonMode='always'/>
    
  </View>

)
const MediaSection = () => (
  <View style={[styles.sectionContainer, {flex: 1}]}>
    <View style={styles.titleSectionContainer}>
      <Text style={styles.titleSection}>
          3 Media
      </Text>
    </View>
    <View style={styles.mediaOptionContainer}>
        <MediaOption icon={'globe-sharp'} placeholder={'www.https://myweb'}/>
        <MediaOption icon={'phone'} placeholder={'777-777-7777'}/>
    </View>

  </View>
)

const LocationSection = () => (
  <View style={[styles.sectionContainer, {flex: 1, marginTop:'4%'}]}>
    <View style={styles.titleSectionContainer}>
      <Text style={styles.titleSection}>
          4 Location
      </Text>
    </View>
    <View style={[styles.mediaOptionContainer,{bottom:'10%'}]}>
        <MediaOption icon={'md-location-outline'} placeholder={'www.https://myweb'}/>
    </View>
  </View>
)

const AddImageSection = ({imageUris, addImageUri, removeImageUri}) => (
  <View style={[styles.sectionContainer, {flex: 1.5}]}>
    <View style={styles.titleSectionContainer}>
      <Text style={styles.titleSection}>
          5 Add Image
      </Text>
    </View>
    <ImageInputList imageUris={imageUris} onAddImage={addImageUri} onRemoveImage={removeImageUri}></ImageInputList>

  </View>
)

const NextButton = () => (
  <View style={styles.nextButtonContainer}>
    <TouchableOpacity style={styles.nextButtonView} >
        <Text style={styles.nextButtonText}>Next</Text>
    </TouchableOpacity>
  </View>
)
const DescribeServicePage = () => {
  const [visible, setVisible] = useState(false)
  const [openTime, setOpentime] = useState([
    {date: 'Sunday', openAt: '0:00', closeAt: '0:00', isOpen: 'Open'},
    {date: 'Monday', openAt: '0:00', closeAt: '0:00', isOpen: 'Open'},
    {date: 'Tuesday', openAt: '0:00', closeAt: '0:00', isOpen: 'Open'},
    {date: 'Wednesday', openAt: '0:00', closeAt: '0:00', isOpen: 'Open'},
    {date: 'Thursday', openAt: '0:00', closeAt: '0:00', isOpen: 'Open'},
    {date: 'Friday', openAt: '0:00', closeAt: '0:00', isOpen: 'Open'},
    {date: 'Saturday', openAt: '0:00', closeAt: '0:00', isOpen: 'Open'},
  ])
  const [dateclicked, setDayClicked] = useState('')
  const [imageUris, setImageUris] = useState([])
  const addImageUri = (uri) => setImageUris([...imageUris, uri])
  const removeImageUri = (uri) => setImageUris(imageUris.filter(imageUri => imageUri !== uri)) 
  return (
    
      <View style={styles.container}>
          <Title titleOnLine1={'Describe your'} titleOnLine2={'service'}  styles={styles}/>
          <AboutSection/>
          <HourSection setVisible={setVisible} openTime={openTime} setDayClicked={setDayClicked}/>
          <MediaSection/>
          <LocationSection/>
          <AddImageSection imageUris={imageUris} addImageUri={addImageUri} removeImageUri={removeImageUri} /> 
          <NextButton/>
          <CustomModalDatetimePicker visible={visible} setVisible={setVisible} setOpenTime={setOpentime} openTime={openTime} dateClicked={dateclicked}/>
      </View>
     
    

  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight:25
  },
  titleContainer: {
    flex: 1, 
    padding: 20,
  
  },
  titleStyle : {
    fontSize: 40,
    fontWeight: '600',
  },
  sectionContainer: {
    flex: 2, 
    paddingLeft: 20,
  
  },
  titleSectionContainer: {
    flex: 1
  },
  titleSection: {
    fontSize: 18, 
    fontWeight:'700'

  },
  aboutTextInputContainer: {
    flex: 4, 
    paddingLeft: 20
  },
  aboutTitleTextInputContainer: {
    flexDirection:'row', 
    justifyContent:'space-between'
  },
  title: {
    right: 5, 
    fontSize:16, 
    alignSelf:'center', 
    fontWeight:'400'
  },
  titleTextInput: {
    width: '70%',
    height:'100%', 
    borderRadius:'#F4F4F4', 
    borderWidth:0.15, 
    borderRadius:5, 
    backgroundColor:'#F4F4F4', 
    paddingVertical:3, 
    paddingHorizontal:20
  },
  descriptionTextInput: {
    height:'70%', 
    borderRadius:'#F4F4F4', 
    borderWidth:0.15, 
    borderRadius:5, 
    backgroundColor:'#F4F4F4',  
    paddingHorizontal:10, 
    marginTop: 12
  },
  availableDayContainer: {
    flexDirection:'row', 
    flex: 1, 
    justifyContent:'space-between'
  },
  availableDay: {
    fontSize:14
  },
  dropDownButtonContainer: {
    width: '30%', 
    height:'70%', 
    borderRadius:'#F4F4F4', 
    borderWidth:0.15, 
    borderRadius:5, 
    backgroundColor:'#F4F4F4', 
    flexDirection:'row', 
    justifyContent:'space-between'
  },
  arrowDownIcon: {
    alignSelf:'center'

  },
  mediaOptionContainer: {
    paddingLeft: 20, 
    flex: 3, 
    justifyContent:'space-around',
    
  },
  mediaOption: {
    paddingLeft:8, 
    flexDirection:'row', 
    justifyContent:'space-between', 
    width:'53%',
  },
  mediaOptionTextInput: {
    borderRadius:'#F4F4F4', 
    borderWidth:0.15, 
    borderRadius:5, 
    backgroundColor:'#F4F4F4',  
    paddingHorizontal:10, 
    width:'80%', 
    height:'80%'
  },
  nextButtonContainer: {
    flex: 1, 
    alignItems:'flex-end'
  },
  nextButtonView: {
    backgroundColor: '#F78154', 
    width:'30%', 
    height:'50%', 
    justifyContent:'center', 
    alignItems:'center', 
    borderRadius:'15%'
  },
  nextButtonText: {
    fontSize:30, 
    fontWeight:'700', 
    color:'white'

  }

});

export default DescribeServicePage;