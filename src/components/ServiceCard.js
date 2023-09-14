/**
 * Creates a card for a provided service.
 *
 * @component
 * @param {string} picture - URL of the service's image.
 * @param {string} title - Title of the service.
 * @param {Object} style - Additional styles for the service card.
 * @param {Function} onPress - Handler function when the card is pressed.
 * @param {boolean} isSelected - Indicates if the card is selected (Used for selecting kind of service when creating resource)
 * @returns {JSX.Element} The ServiceCard component.
 */

import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {servicecard as styles} from "./css";

const ServiceCard = ({picture, title, style, onPress, isSelected}) => {

  return (
    <TouchableOpacity
      style={[
        styles.cardStyle,
        style
      ]}
      onPress={onPress}
    >
      {/* Image of the service card */}
      <View style={isSelected ? styles.cardTitleClicked : styles.cardImage}>
        <Image
          style={styles.imageIcon}
          source={picture !== null
            ? {uri: picture}
            : {uri: "https://placehold.co/400?text=No+image+available"}}
          // resizeMode='cover'
          />
        {/* Name of the service card */}
      </View>
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
