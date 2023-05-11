import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Card = ({ picture, title }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={
          picture !== null
            ? { uri: picture }
            : { uri: "https://placehold.co/400?text=No+image+available" }
        }
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#000", // replace with your desired color
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200, // adjust as needed
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
  },
});

export default Card;
