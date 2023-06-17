// ResourceCard Component
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Feather, FontAwesome, Entypo, EvilIcons, Ionicons } from "@expo/vector-icons";
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const ResourceCardContainer = ({cardStyle, children}) => (
  <View style={cardStyle}>
      {children}
  </View>)

const CardTitle = ({title, onPress, titleStyle}) => (
  <TouchableOpacity onPress={onPress}>
      <Text style={titleStyle}>{title}</Text>
  </TouchableOpacity>
)
const CardContent = ({cardContentStyle, children}) => (
  <View style={cardContentStyle}>
      {children}
  </View>
) 
const RatingAndReview = ({rating, ratingContainerStyle, textStyle, review }) => (
  <View style={ratingContainerStyle}>
        <FontAwesome
          name="star"
          size={14}
          color="black"
        />
        <Text style={textStyle}> {rating} </Text>
        <Entypo
          name="dot-single"
          size={20}
          color="black"
        />
        <Text style={textStyle}>
          {" "}
          {review} Reviews
        </Text>
  </View>
)

const Description = ({description, descriptionTextStyle, descriptionContainer}) => (
  <View style={{width:'100%', flexWrap: 'wrap', flexDirection:'row', paddingVertical:10}}>
        <Text style={descriptionTextStyle}>{description}</Text>
  </View>
)

const ContactInfo = ({location, number, contactContainerStyle, contactInfoText}) => (
    location ?
      <View style={contactContainerStyle}>
        <EvilIcons
          name="location"
          size={20}
          color="black"
          
        />
        <Text style={contactInfoText}>{location}</Text>
      </View>
        : 
        <View style={contactContainerStyle}>
          <Ionicons
              name="ios-call-outline"
              size={20}
              color="black"
        />
        <Text style={contactInfoText}>{number}</Text>
        </View>
)
const ResourceImage = ({picture, styles}) => (
  <View style={styles.imageContainer}>
              <Image
                source={
                  typeof picture === "string" ? { uri: picture } : picture
                }
                style={styles.image}
                resizeMode="cover"
              />
    
              <TouchableOpacity
                style={styles.bookmarkButton}
                onPress={() => {
                  /* Bookmark function */
                }}
              >
                <View style={styles.whitebox}>
                  <Feather name="bookmark" size={17} color="black" />
                </View>
              </TouchableOpacity>

              <TouchableOpacity style = {styles.editbtn}>
                <Text style = {styles.edtbtntxt}> edit </Text>
            </TouchableOpacity>
  </View>
)
const PublishedResCard = ({ item, navigation, fullPageServiceName}) => {
  const {fontScale} = useWindowDimensions()
  const styles = makeStyle(fontScale)
    return (
      <ResourceCardContainer cardStyle={styles.card}>
          <CardContent cardContentStyle={styles.cardContent}>
              <CardTitle title={item.name} titleStyle={styles.title}/>
              <RatingAndReview rating={item.rating} ratingContainerStyle={styles.rating} textStyle={styles.ratingAndReviewText} review={item.reviews}/>
              <Description description={item.desc} descriptionTextStyle={styles.description}/>
              <ContactInfo location={item.location} contactContainerStyle={styles.contactContainerStyle} contactInfoText={styles.contactInfoText}/>
              <ContactInfo number={item.number} contactContainerStyle={styles.contactContainerStyle} contactInfoText={styles.contactInfoText}/>
          </CardContent>

          <ResourceImage picture={item.image} styles={styles}/>
      </ResourceCardContainer>
        
    );
};

const makeStyle = fontScale => StyleSheet.create({
    card: {
      flexDirection: "row",
      marginBottom: 10,
      backgroundColor: "#fff",
      borderRadius: 10,
      borderColor: "#285943",
      shadowColor: 'grey',
      shadowOffset: {width: 0, height: 5},
      shadowOpacity: 1,
      shadowRadius: 3,
      elevation: 10,
      height: 239,
      borderWidth: 1,
      margin: 14,
    },
    imageContainer: {
     // position: "relative",
      padding:10, 
      flex:1,
      alignItems:'center',
      //backgroundColor:'red',
      justifyContent:'space-between'
      
    },
    image: {
      width: '100%',
      height: '80%',
      borderRadius: 12,
      marginTop: 10,
  
    },
    bookmarkButton: {
      position: "absolute",
      top: 20,
      right: 10,
     // zIndex: 1,
      backgroundColor: "transparent",
    },
    cardContent: {
      flex: 2,
      padding: 10,
    },
    title: {
      fontSize: 20 / fontScale,
      fontWeight: "bold",
      color: "#E87F10",
    },
    description: {
      fontSize: 16 / fontScale,
     
    },
    whitebox: {
      width: 25 / fontScale,
      height: 27 / fontScale,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      margin: 10,
      borderRadius: 4,
    },
    rating: {
      display: "flex",
      // marginTop: 5,
      // marginBottom: 10,
      // marginLeft: 1,
      flexDirection: "row",
      alignItems: "center",
      paddingVertical:5
    },
    ratingAndReviewText: {
      fontWeight: '700',
      fontSize: 14 / fontScale
    },
  
    contactContainerStyle: {
      display: "flex",
      flexDirection: "row",
      alignItems: 'center',
      marginBottom:'2%'
    },
    editbtn: {
        width: '60%',
        height: '10%',
        borderRadius: 5,
        backgroundColor: '#F78154',
        justifyContent:'center',
        alignItems:'center',
        alignSelf: 'flex-end',
    },

    edtbtntxt: {
        color: 'white',
        fontSize: 16 / fontScale,
        fontWeight: 'bold',
    },
    contactInfoText: {
      fontSize: 16 / fontScale
    }
  });

  export default PublishedResCard;