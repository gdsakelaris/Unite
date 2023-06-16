import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const Card = ({ picture, title, style, onPress}) => {
  const { fontScale } = useWindowDimensions()
  const styles = makeStyle(fontScale)
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

const makeStyle = fontScale => StyleSheet.create({
  cardStyle: {
    width: '45%',
    height: '25%',
    marginBottom: '5%',
    borderWidth: 0.05,
    borderRadius: 12,
    overflow:'hidden'
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardTitleContainer: {
    position: 'absolute',
    backgroundColor: "#FFF",
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    top: '70%',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    height: '30%'
  },
  cardTitle: {
    fontSize: 20 / fontScale,
    fontWeight: '500'
  }
});

export default Card;
