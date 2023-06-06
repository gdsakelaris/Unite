import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import img from "../images/Bookmark_dummy.png";

const bookmarkData = [
  {
    id: 1,
    name: "Name of Resource",
    location: "Austin, Texas",
    phoneNumber: "603-678-976",
  },
  {
    id: 2,
    name: "Name of Resource",
    location: "Austin, Texas",
    phoneNumber: "603-678-976",
  },
  {
    id: 3,
    name: "Name of Resource",
    location: "Austin, Texas",
    phoneNumber: "603-678-976",
  },
  {
    id: 4,
    name: "Name of Resource",
    location: "Austin, Texas",
    phoneNumber: "603-678-976",
  },
  {
    id: 5,
    name: "Name of Resource",
    location: "Austin, Texas",
    phoneNumber: "603-678-976",
  },
  // Add more bookmarkData objects as needed
];

const Bookmark_Services = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {bookmarkData.map((data) => (
          <View style={styles.resourceBox} key={data.id}>
            <Image source={img} style={styles.image} />
            <View style={styles.detailsBox}>
              <Text style={styles.heading}>{data.name}</Text>
              <View style={styles.locationContainer}>
                <EvilIcons
                  name="location"
                  size={20}
                  color="black"
                  style={styles.icon1}
                />
                <Text style={styles.phoneNumber}>{data.location}</Text>
              </View>
              <View style={styles.locationContainer}>
                <Ionicons
                  name="ios-call-outline"
                  size={15}
                  color="black"
                  style={styles.icon2}
                />
                <Text style={styles.phoneNumber}>{data.phoneNumber}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  resourceBox: {
    flexDirection: "row",
    width: "90%",
    height: 103,
    backgroundColor: "white",
    marginTop: 37,
    marginBottom: -6,
    marginHorizontal: 13,
    borderRadius: 12,
    padding: 10,
    shadowColor: "#A9a9a9",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.55,
    shadowRadius: 3,
    elevation: 20,
    borderColor: "#285943",
    borderWidth: 0.5,
  },

  detailsBox: {
    marginLeft: 31,
    width: "70%",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 20,
    color: "#E87F10",
    fontWeight: "bold",
    marginBottom: 12,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  icon1: {
    marginRight: -1,
    marginLeft: -4,
  },
  icon2: {
    marginRight: -1,
  },

  phoneNumber: {
    marginLeft: 4,
  },
  removeButton: {
    position: "absolute",
    bottom: 17,
    right: 10,
    width: 80,
    height: 25,
    backgroundColor: "#F24E1E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: 105,
  },

  removeButtonText: {
    color: "white",
    fontSize: 12,
  },
});

export default Bookmark_Services;
