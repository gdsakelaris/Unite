//this file will create a card for the provided service that will be displayed in the HomeScreen (user's flow) and First Step (volunteer's flow)
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { servicecard as styles } from "./css";
const ServiceCard = ({ picture, title, style, onPress}) => {
  return (
    <TouchableOpacity
        style={[styles.cardStyle, style]} onPress={onPress}>
        <Image
          source={ picture !== null
            ? { uri: picture }
            : { uri: "https://placehold.co/400?text=No+image+available" }}
          style={styles.cardImage}
          resizeMode='cover' />
        <View
          style={styles.cardTitleContainer}>
          <Text
            style={styles.cardTitle}>
              {title}
          </Text>
        </View>
      </TouchableOpacity>
  );
};
export default ServiceCard;
