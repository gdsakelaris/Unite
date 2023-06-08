import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, Pressable} from 'react-native';
import { FontAwesome, EvilIcons } from '@expo/vector-icons';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const ServicePageContainer = ({styles, children}) => (
  <View style={styles.container}>
    {children}
  </View>
)
const ServiceImage = ({source, styles}) => (
  <View style={styles.serviceImageStyle}> 
      <Image source={require('../images/food.jpeg')} style={styles.imageStyle}/>
  </View>
)

const ServiceInfo = ({styles}) => (
  <View style={styles.serviceInfoStyle}>
      <View style={styles.infoStyle1}>
          <Text style={styles.serviceTitleStyle} >Anchor Church</Text>
          <Text>
            <FontAwesome name="star" size={14} color="black" />
            <Text>3.0</Text>
          </Text>
          <Text style={styles.numberOfReviewStyle}>6 Reviews</Text>  
      </View> 

      <View style={styles.infoStyle2}>
          <EvilIcons name="location" size={18} color="black" />
          <Text>Austin, Texas</Text>
      </View>           
  </View>
)
const servicesDetail = [
  {
    optionTitle: 'About', 
    detail: 'Anchor Church is a Christ-centered community. We worship together each Sunday at 9:00 AM and have small group ministry in various locations & at various times throughout the week.  We desire each gathering adds value to your life. We specialize in encouraging people to experience their destiny as an individual designed for beauty and fulfillment. We have an especially strong focus in the arts, the infallible Word of God, and growing in relationships with Jesus through meaningful relationships.'
  },
  {optionTitle: 'Hours', detail: 'hours page'},
  {optionTitle: 'Media', detail: 'media page'}

]
const ServiceDetail = ({styles,detailOption, setdetailOption}) => (
  <View style={styles.serviceDetailStyle}>
      <View style={styles.servicesDetailInnerContainer}>
          <View style={styles.serviceDetailOptionContainer}>
              {/* About */}
              <ServiceOption styles={styles} title='About' setdetailOption={setdetailOption} detailOption={detailOption} index={0}/>
              {/* Hours */}
              <ServiceOption styles={styles} title='Hours' setdetailOption={setdetailOption} detailOption={detailOption} index={1}/>
               
               {/* Media */}
               <ServiceOption styles={styles} title='Media' setdetailOption={setdetailOption} detailOption={detailOption} index={2}/>
          </View>
          {detailOption && <ServiceOptionDetail detailOption={detailOption}/>}

      </View>
  </View>
)
const ServiceOption = ({title, setdetailOption, detailOption, index, styles}) => (
<View style={[styles.serviceDetailOptionStyle, {borderBottomWidth: detailOption.optionTitle === title && 4}]}>
    <Pressable onPress={() => setdetailOption(servicesDetail[index])}>
      <Text style={styles.serviceDetailOptionTextStyle}>{title}</Text>
    </Pressable>
</View>
)
const ServiceOptionDetail = ({detailOption}) => (
  <View style={{flexWrap:'wrap', flexDirection:'row'}}> 
        <Text>{detailOption && detailOption.detail}</Text>    
  </View>

)
const ServicesFullPage = () => {

  const [detailOption, setdetailOption] = useState(servicesDetail[0])
  const {fontScale} = useWindowDimensions()
  const styles = makeStyle(fontScale)
  return (
    <ServicePageContainer styles={styles}>
      <ServiceImage styles={styles}/>
      <ServiceInfo styles={styles}/>
      <ServiceDetail styles={styles} detailOption={detailOption} setdetailOption={setdetailOption}/>

    </ServicePageContainer>
  );
}
const makeStyle = (fontScale) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  serviceImageStyle: {
    flex: 4,
    //backgroundColor:'blue',
    padding: '2%',
    justifyContent:'flex-end'

  },
  imageStyle: {
    width: '100%',
    height: '70%',
    borderRadius: '12%'
  },
  serviceInfoStyle: {
    flex: 1,
    //backgroundColor:'red'
  },
  infoStyle1: {
    flexDirection:'row',
    padding: '2%',
    justifyContent:'space-between',
    alignItems:'baseline'
  },
  serviceTitleStyle: {
      fontSize:30 / fontScale,
      fontWeight:'bold'
  },
  numberOfReviewStyle: {
     textDecorationLine:'underline',
     fontWeight:'500'
  },

  infoStyle2: {
    paddingHorizontal: '2%',
    flexDirection:'row',

  },
  serviceDetailStyle: {
    flex: 4,
   // backgroundColor:'green'
  },
  serviceDetailOptionStyle: {
    width:'20%', 
    justifyContent:'center',
    borderBottomColor:'#FE7940'
  },
  serviceDetailOptionTextStyle: {
    fontSize:'26%', 
    fontWeight:'300'
  },
  servicesDetailInnerContainer: {
    width:'100%', 
    height:'15%', 
    borderBottomColor:'black', 
    borderBottomWidth:0.5

  },
  serviceDetailOptionContainer: {
    width:'85%', 
    height:'100%', 
    flexDirection:'row', 
    justifyContent:'space-between',
    paddingHorizontal: '2%'
  }
});
export default ServicesFullPage;