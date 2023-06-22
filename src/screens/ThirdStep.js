import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { EvilIcons, Ionicons, FontAwesome } from "@expo/vector-icons";
import dummy from "../images/Rectangle.png";

const content =
  "Anchor Church is a Christ-centered community. We worship together each Sunday at 9:00 AM and have small group ministry in various locations & at various times throughout the week.  We desire each gathering adds value to your life. We specialize in encouraging people to experience their destiny as an individual designed for beauty and fulfillment. We have an especially strong focus in the arts, the infallible Word of God, and growing in relationships with Jesus through meaningful relationships.";

const ThirdStep = () => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Preview</Text>

      <Image source={dummy} style={styles.image} />

      <View style={styles.resource}>
        <Text style={styles.resourceName}> Anchor Church</Text>

        <View style={styles.rating}>
          <FontAwesome name="star" size={14} color="black" />
          <Text style={styles.bold}> 0.0 </Text>

          <Text style={styles.review}>0 Review</Text>
        </View>
      </View>

      <Text style={styles.location}>Austin, Texas</Text>

      <View style={styles.detailsContainer}>
        <TouchableOpacity
          style={[
            styles.detailsButton,
            selectedButtonIndex === 0 && styles.selectedButton,
          ]}
          onPress={() => setSelectedButtonIndex(0)}
        >
          <Text style={styles.detailsText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.detailsButton,
            selectedButtonIndex === 1 && styles.selectedButton,
          ]}
          onPress={() => setSelectedButtonIndex(1)}
        >
          <Text style={styles.detailsText}>Hours</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.detailsButton,
            selectedButtonIndex === 2 && styles.selectedButton,
          ]}
          onPress={() => setSelectedButtonIndex(2)}
        >
          <Text style={styles.detailsText}>Media</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{content}</Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Publish</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "3.58%",
    backgroundColor: "white",
    marginTop: "-4%",
  },

  heading: {
    fontSize: 32,
    fontWeight: "bold",
  },

  image: {
    width: "100%",
    height: "35%",
    marginTop: "4%",
    borderRadius: "15%",
  },

  resourceName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: "5%",
  },

  rating: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "6%",
  },
  bold: {
    fontWeight: "bold",
    marginRight: 10,
    fontSize: 16,
  },

  resource: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  review: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
    textDecorationLine: "underline",
  },

  location: {
    marginTop: "1.5%",
    marginLeft: "7.5%",
  },

  detailsText: {
    fontSize: 20,
  },

  detailsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start", // Aligns the buttons to the left
    alignItems: "center", // Centers the buttons vertically
    marginLeft: "1.5%",
    marginTop: "7%",
    paddingBottom: 15,
  },

  descriptionContainer: {
    height: 200,
    width: "100%",
    paddingTop: "2%",
    paddingHorizontal: "3%",
  },

  description: {
    fontSize: 14,
  },

  button: {
    width: "80%",
    height: 41,
    backgroundColor: "#F78154",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 43,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: "8%",
    marginBottom: "4%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  detailsButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#1D2370",
  },
  selectedButton: {
    borderBottomColor: "#F78154",
    borderBottomWidth: 3,
  },
});

export default ThirdStep;
