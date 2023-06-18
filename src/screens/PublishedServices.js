import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import img from "../images/Dummyresource.png";
import { AntDesign } from "@expo/vector-icons";
import PublishedResCard from "../components/PublishedResourseCard";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";

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
  const { fontScale } = useWindowDimensions();
  const styles = makeStyle(fontScale);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headin}>My Published Services</Text>

      <ScrollView>
        <PublishedResCard item={resourceData} hasEditButton={true} />
        <PublishedResCard item={resourceData}  hasEditButton={true}/>
        <PublishedResCard item={resourceData} hasEditButton={true}/>
      </ScrollView>

      <TouchableOpacity style={styles.addbtn}>
        <AntDesign name="plus" size={34 / fontScale} color="white" />
        <Text style={styles.addbtntext}> Add </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const makeStyle = fontScale => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  headin: {
    fontSize: 36 / fontScale,
    fontWeight: "bold",
    padding: 14,
    maxWidth: 327,
  },

  addbtn: {
    display: "flex",
    flexDirection: "row",
    width: '40%',
    height: '7%',
    backgroundColor: "#F78154",
    borderRadius: '15%',
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    top: "90%",
    left: "30%",
  },

  addbtntext: {
    fontWeight: "bold",
    color: "white",
    fontSize: 26 / fontScale,
  },
});

export default PublishedServices;
