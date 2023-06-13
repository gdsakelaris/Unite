import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, TextInput} from 'react-native';
import { MaterialIcons, Ionicons, Feather } from '@expo/vector-icons';



const Title = ({titleOnLine1, titleOnLine2, styles}) => (
  <View style={styles.titleContainer} >
    <Text style={styles.titleStyle}>{titleOnLine1}</Text>
    <Text style={styles.titleStyle}>{titleOnLine2}</Text>
  </View>
)

const AboutSection = () => (
  <View style={{flex: 2, paddingLeft: 20}}>
    <View style={{flex: 1}}>
      <Text style={{fontSize: 18, fontWeight:'700'}}>
          1 About
      </Text>
    </View>
    <View style={{flex: 4, paddingLeft: 20}}>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={{right: 5, fontSize:16, alignSelf:'center', fontWeight:'400'}}>
              Title:
          </Text>
          <TextInput style={{width: '70%',height:'100%', borderRadius:'#F4F4F4', borderWidth:0.15, borderRadius:5, backgroundColor:'#F4F4F4', paddingVertical:3, paddingHorizontal:20}}></TextInput>
      </View>
      <TextInput style={{height:'70%', borderRadius:'#F4F4F4', borderWidth:0.15, borderRadius:5, backgroundColor:'#F4F4F4',  paddingHorizontal:10, marginTop: 12,}} multiline={true} ></TextInput>
    </View>

  </View>
)

const HourOption = ({date}) => (
  <View style={{flexDirection:'row', flex: 1, justifyContent:'space-between' }}>
    <Text style={{fontSize: 14}}>
      Sunday:
    </Text>
    <DropDownButton />
    <Text>
      to
    </Text>
    <DropDownButton />


  </View>

)
const DropDownButton = () => (
  <View style={{width: '30%', height:'70%', borderRadius:'#F4F4F4', borderWidth:0.15, borderRadius:5, backgroundColor:'#F4F4F4', flexDirection:'row', justifyContent:'flex-end'}}>
    <TouchableOpacity >
      <MaterialIcons name="keyboard-arrow-down" size={20} color="black" style={{alignSelf:'center'}}/>
    </TouchableOpacity>
  </View>
)
const HourSection = () => (
  <View style={{flex: 3,  paddingLeft: 20}}>
    <View style={{flex: 1}}>
      <Text style={{fontSize: 18, fontWeight:'700'}}>
          2 Hours
      </Text>
    </View>
    <View style={{paddingLeft:20, flex: 7}}>
      <HourOption></HourOption>
      <HourOption></HourOption>
      <HourOption></HourOption>
      <HourOption></HourOption>
      <HourOption></HourOption>
      <HourOption></HourOption>
      <HourOption></HourOption>
    </View>
  </View>
)

const MediaOption = ({icon, placeholder}) => (
  <View style={{paddingLeft:8, flexDirection:'row', justifyContent:'space-between', width:'53%' }}>
    {icon === "phone" ?
                      <Feather name={icon} size={24} color="black" />
                      :<Ionicons name={icon} size={24} color="black" />}
    <TextInput style={{ borderRadius:'#F4F4F4', borderWidth:0.15, borderRadius:5, backgroundColor:'#F4F4F4',  paddingHorizontal:10, width:'80%', height:'80%'}} placeholder={placeholder}/>
    
  </View>

)
const MediaSection = () => (
  <View style={{flex: 1, paddingLeft: 20}}>
    <View style={{flex: 1}}>
      <Text style={{fontSize: 18, fontWeight:'700'}}>
          3 Media
      </Text>
    </View>
    <View style={{paddingLeft: 20, flex: 3, justifyContent:'space-around'}}>
        <MediaOption icon={'globe-sharp'} placeholder={'www.https://myweb'}/>
        <MediaOption icon={'phone'} placeholder={'777-777-7777'}/>
    </View>

  </View>
)

const LocationSection = () => (
  <View style={{flex: 1, paddingLeft:20}}>
    <View style={{flex: 1}}>
      <Text style={{fontSize: 18, fontWeight:'700'}}>
          4 Location
      </Text>
    </View>
    <View style={{paddingLeft: 20, flex: 3, justifyContent:'space-around'}}>
        <MediaOption icon={'md-location-outline'} placeholder={'www.https://myweb'}/>
    </View>

  </View>
)

const AddImageSection = () => (
  <View style={{flex: 1.5, padding: 20}}>
    <View style={{flex: 1}}>
      <Text style={{fontSize: 18, fontWeight:'700'}}>
          5 Add Image
      </Text>
    </View>

  </View>
)

const NextButton = () => (
  <View style={{flex: 1, alignItems:'flex-end'}}>
    <TouchableOpacity style={{backgroundColor: '#F78154', width:'30%', height:'50%', justifyContent:'center', alignItems:'center', borderRadius:'15%'}} >
        <Text style={{fontSize:30, fontWeight:'700', color:'white'}}>Next</Text>
    </TouchableOpacity>
  </View>
)
const DescribeServicePage = () => {
  return (
    
      <View style={styles.container}>
          <Title titleOnLine1={'Describe your'} titleOnLine2={'service'}  styles={styles}/>
          <AboutSection/>
          <HourSection/>
          <MediaSection/>
          <LocationSection/>
          <AddImageSection/>
          <NextButton/>
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
    

  }
});

export default DescribeServicePage;