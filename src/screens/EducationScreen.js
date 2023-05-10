import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Dropdown from "../components/Dropdown";
import ResourceCard from "../components/ResourceCard";

const EducationScreen = () => {
  const [sortBy, setSortBy] = useState("Sort By");
  const [sortedData, setSortedData] = useState([]);

  const mockData = Array.from({ length: 10 }).map((_, i) => ({
    id: `${i}`,
    name: `Resource ${i + 1}`,
    score: Math.round(Math.random() * 5),
    desc: `Description ${i + 1}`,
    location: `Location ${i + 1}`,
    phone: `12345${i}`,
    image: require("../images/placeholder.jpg"),
  }));

  useEffect(() => {
    let sortedArray = [...mockData];
    if (sortBy === "Name") {
      sortedArray.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "Location") {
      sortedArray.sort((a, b) => a.location.localeCompare(b.location));
    }
    setSortedData(sortedArray);
  }, [sortBy]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Education</Text>
      </View>

      <View style={styles.sortByContainer}>
        <Dropdown onSelect={setSortBy} />
      </View>

      <FlatList
        data={sortedData}
        renderItem={({ item }) => <ResourceCard item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  sortByContainer: {
    marginBottom: 10,
  },
});

export default EducationScreen;
