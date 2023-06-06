import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ResourceCard from "../components/ResourceCard";
import img from "../images/Dummyresource.png";
import { AntDesign } from "@expo/vector-icons";

const Health_Resource = () => {
  const resourceData = {
    name: "Name of Resource",
    desc: "Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor., dolor sit amet..",
    score: 9,
    location: "Austin, Texas",
    image: img,
    rating: "3.0",
    reviews: 6,
    number: "603-678-976",
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sortbutton}>
        <Text> Sort by</Text>
        <AntDesign name="down" size={18} color="black" style={styles.arrow} />
      </TouchableOpacity>
      <ScrollView>
        <ResourceCard item={resourceData} />
        <ResourceCard item={resourceData} />
        <ResourceCard item={resourceData} />
        <ResourceCard item={resourceData} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  sortbutton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 14,
    maxWidth: 94,
    height: 31,
    borderRadius: 20,
    padding: 4,
    borderWidth: 1,
    borderColor: "grey",
  },

  arrow: {
    margin: 2,
  },
});

export default Health_Resource;