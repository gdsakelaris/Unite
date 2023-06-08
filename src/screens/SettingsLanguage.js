import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const languageOptions = [
  { label: "English" },
  { label: "Spanish" },
  { label: "French" },
  { label: "Germany" },
  { label: "Italian" },
  { label: "Russian" },
  { label: "Mandarin Chinese" },
  { label: "Arabic" },
];

const Setting_lang = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageSelection = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <View style={styles.container}>
      <View style={styles.details_container}>
        {languageOptions.map((option) => (
          <TouchableOpacity
            key={option.label}
            style={[
              styles.rowContainer,
              selectedLanguage === option.label && styles.selectedRowContainer,
            ]}
            onPress={() => handleLanguageSelection(option.label)}
          >
            <Text style={styles.languageText}>
              {option.label}
            </Text>
            {selectedLanguage === option.label && (
              <Entypo name="check" size={24} color="black" />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  details_container: {
    margin: "3%",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 21,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingHorizontal: 10,
    height: 65,
  },
  selectedRowContainer: {
    backgroundColor: "#F0F0F0",
  },
  languageText: {
    marginLeft: 16,
    flex: 1,
    fontSize: 16,
  },
});

export default Setting_lang;
