import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function Setting_lang() {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageSelection = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.details_container}>
        <TouchableOpacity
          style={[
            styles.rowContainer,
            selectedLanguage === "English" && styles.selectedRowContainer,
          ]}
          onPress={() => handleLanguageSelection("English")}
        >
          <Text style={{ marginLeft: 16, flex: 1, fontSize: 16 }}>
            English{" "}
          </Text>
          {selectedLanguage === "English" && (
            <Entypo name="check" size={24} color="black" />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.rowContainer,
            selectedLanguage === "Spanish" && styles.selectedRowContainer,
          ]}
          onPress={() => handleLanguageSelection("Spanish")}
        >
          <Text style={{ marginLeft: 16, flex: 1, fontSize: 16 }}>Spanish</Text>
          {selectedLanguage === "Spanish" && (
            <Entypo name="check" size={24} color="black" />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.rowContainer,
            selectedLanguage === "French" && styles.selectedRowContainer,
          ]}
          onPress={() => handleLanguageSelection("French")}
        >
          <Text style={{ marginLeft: 16, flex: 1, fontSize: 16 }}>French </Text>
          {selectedLanguage === "French" && (
            <Entypo name="check" size={24} color="black" />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.rowContainer,
            selectedLanguage === "Germany" && styles.selectedRowContainer,
          ]}
          onPress={() => handleLanguageSelection("Germany")}
        >
          <Text style={{ marginLeft: 16, flex: 1, fontSize: 16 }}>
            Germany{" "}
          </Text>
          {selectedLanguage === "Germany" && (
            <Entypo name="check" size={24} color="black" />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.rowContainer,
            selectedLanguage === "Italian" && styles.selectedRowContainer,
          ]}
          onPress={() => handleLanguageSelection("Italian")}
        >
          <Text style={{ marginLeft: 16, flex: 1, fontSize: 16 }}>
            Italian{" "}
          </Text>
          {selectedLanguage === "Italian" && (
            <Entypo name="check" size={24} color="black" />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.rowContainer,
            selectedLanguage === "Russian" && styles.selectedRowContainer,
          ]}
          onPress={() => handleLanguageSelection("Russian")}
        >
          <Text style={{ marginLeft: 16, flex: 1, fontSize: 16 }}>
            Russian{" "}
          </Text>
          {selectedLanguage === "Russian" && (
            <Entypo name="check" size={24} color="black" />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.rowContainer,
            selectedLanguage === "Mandarin Chinese" &&
              styles.selectedRowContainer,
          ]}
          onPress={() => handleLanguageSelection("Mandarin Chinese")}
        >
          <Text style={{ marginLeft: 16, flex: 1, fontSize: 16 }}>
            Mandarin Chinese{" "}
          </Text>
          {selectedLanguage === "Mandarin Chinese" && (
            <Entypo name="check" size={24} color="black" />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.rowContainer,
            selectedLanguage === "Arabic" && styles.selectedRowContainer,
          ]}
          onPress={() => handleLanguageSelection("Arabic")}
        >
          <Text style={{ marginLeft: 16, flex: 1, fontSize: 16 }}>Arabic </Text>
          {selectedLanguage === "Arabic" && (
            <Entypo name="check" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 16,
  },

  flex_container: {
    display: "flex",
    flexDirection: "row",
    margin: "3%",
    alignItems: "center",
    paddingTop: 1,
    paddingBottom: 15,
  },

  Font: {
    fontSize: 22,
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
  
});
