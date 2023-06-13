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
import PublishedResCard from "../components/PublishedResourseCard";

const PublishedServices = () => {
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
      <Text style={styles.headin}>My Published Services</Text>

      <ScrollView>
        <PublishedResCard item={resourceData} />
        <PublishedResCard item={resourceData} />
        <PublishedResCard item={resourceData} />
      </ScrollView>

      <TouchableOpacity style={styles.addbtn}>
        <AntDesign name="plus" size={34} color="white" />
        <Text style={styles.addbtntext}> Add </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  headin: {
    fontSize: 36,
    fontWeight: "bold",
    padding: 14,
    maxWidth: 327,
  },

  addbtn: {
    display: "flex",
    flexDirection: "row",
    width: 155,
    height: 42,
    backgroundColor: "#F78154",
    borderRadius: 15,
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    top: "90%",
    left: "30%",
  },

  addbtntext: {
    fontWeight: "bold",
    color: "white",
    fontSize: 24,
    //paddingTop: 2,
  },
});

export default PublishedServices;
