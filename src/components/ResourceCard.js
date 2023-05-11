// ResourceCard Component
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ResourceCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.desc}</Text>
        <Text style={styles.details}>
          Score: {item.score}, Location: {item.location}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            /* Bookmark function */
          }}
        >
          <Text style={styles.buttonText}>Bookmark</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={
            typeof item.image === "string" ? { uri: item.image } : item.image // Use local image directly
          }
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row", // change this line
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 5,
    height: 200, // set card height
  },
  imageContainer: {
    padding: 10,
  },
  image: {
    width: 100,
    height: "100%",
    borderRadius: 10,
  },
  cardContent: {
    padding: 10,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 10,
  },
  details: {
    fontSize: 12,
    color: "#888",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#76c4f5",
    padding: 2, // Reduced padding
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
  },
});

export default ResourceCard;
