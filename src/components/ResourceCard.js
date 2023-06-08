// ResourceCard Component
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons, Ionicons } from "@expo/vector-icons";

const ResourceCard = ({ item, navigation, fullPageServiceName}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <TouchableOpacity onPress={() => navigation.navigate(fullPageServiceName)}>
            <Text style={styles.title}>{item.name}</Text>
          </TouchableOpacity>
          <View style={styles.rating}>
            <FontAwesome
              style={{ marginBottom: -2 }}
              name="star"
              size={14}
              color="black"
            />
            <Text style={styles.bold}> {item.rating} </Text>
            <Entypo
              style={{ marginLeft: -7 }}
              name="dot-single"
              size={20}
              color="black"
            />
            <Text style={{ marginLeft: -7, fontWeight: "bold" }}>
              {" "}
              {item.reviews} Reviews
            </Text>
          </View>

          <Text style={styles.description}>{item.desc}</Text>

          

          <View style={styles.row}>
            <EvilIcons
              name="location"
              size={20}
              color="black"
              style={styles.icon1}
            />
            <Text>{item.location}</Text>
          </View>
          <View style={styles.row}>
            <Ionicons
              name="ios-call-outline"
              size={15}
              color="black"
              style={styles.icon2}
            />
            <Text>{item.number}</Text>
          </View>
          
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={
              typeof item.image === "string" ? { uri: item.image } : item.image // Use local image directly
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
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  card: {
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#285943",
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity:1,
    shadowRadius: 3,
    elevation: 10,
    height: 200,
    borderWidth: 1,
    margin: 14,
  },
  imageContainer: {
    position: "relative",
    padding: 10,
  },
  image: {
    width: 109,
    height: 156,
    borderRadius: 12,
    marginTop: 10,
   
   

  },
  bookmarkButton: {
    position: "absolute",
    top: 20,
    right: 10,
    zIndex: 1,
    backgroundColor: "transparent",
  },
  cardContent: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#E87F10",
  },
  description: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 10,
    flexWrap: 'wrap',
    maxWidth: '100%',
    maxHeight: '100%'
  },
  details: {
    fontSize: 12,
    color: "#888",
    marginBottom: 10,
  },
  whitebox: {
    width: 24,
    height: 24,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 4,
  },
  rating: {
    display: "flex",
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  bold: {
    fontWeight: "bold",
  },

  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    marginLeft: -2, 
  },

  icon1: {
    marginRight: 2,
    

  },

  icon2: {
    marginLeft: 3,
    marginRight: 4,
  }

});

export default ResourceCard;
