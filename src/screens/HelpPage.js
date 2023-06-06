import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { EvilIcons, AntDesign } from "@expo/vector-icons";

const HelpPage = () => {
  const detailedInfo = [
    { label: "Signing up with Unite", detail: "To update the app, go to the app store on your device and search for the app. If an update is available, you will see an option to update the app. Alternatively, you can enable automatic updates in your device's settings." },
    { label: "How to update your email address", detail: "To update the app, go to the app store on your device and search for the app. If an update is available, you will see an option to update the app. Alternatively, you can enable automatic updates in your device's settings." },
    { label: "How to reset your password", detail: "To update the app, go to the app store on your device and search for the app. If an update is available, you will see an option to update the app. Alternatively, you can enable automatic updates in your device's settings." },
    { label: "How to update the app", detail: "To update the app, go to the app store on your device and search for the app. If an update is available, you will see an option to update the app. Alternatively, you can enable automatic updates in your device's settings." },
    { label: "How to bookmark services", detail: "To update the app, go to the app store on your device and search for the app. If an update is available, you will see an option to update the app. Alternatively, you can enable automatic updates in your device's settings." },
  ];

  const [expandedOptions, setExpandedOptions] = useState([]);

  const handleClick = (option) => {
    setExpandedOptions((prevExpandedOptions) => {
      if (prevExpandedOptions.includes(option)) {
        return prevExpandedOptions.filter((expandedOptions) => expandedOptions !== option);
      } else {
        return [...prevExpandedOptions, option];
      }
    });
  };

  return (
    <View style={styles.container}>
        <ScrollView>
      <Text style={styles.heading}>Hi, how can we help you?</Text>
      <View style={styles.searchBarContainer}>
      <View style={styles.searchBarView}>
          <TextInput
            style={styles.searchBar}
            placeholder={"Search..."}
            autoCapitalize={false}
            autoComplete={false}
            clearButtonMode={true}
            inputMode={"text"}
          />
          <EvilIcons name="search" size={30} color="black" style={styles.searchIcon} />
        </View>
      </View>

      {detailedInfo.map((item, index) => (
        <TouchableOpacity
          style={styles.settingOptContainer}
          key={index}
          onPress={() => handleClick(item.label)}
        >
          <View style={styles.optionContainer}>
            <Text style={styles.question}>{item.label}</Text>
            <View style={styles.settingButton}>
              <AntDesign
                name={expandedOptions.includes(item.label) ? "up" : "down"}
                size={20}
                color="black"
              />
            </View>
          </View>
          {expandedOptions.includes(item.label) && (
            <View style={styles.detailContainer}>
              <Text style={styles.detailText}>{item.detail}</Text>
            </View>
          )}
        </TouchableOpacity>
      ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    heading: {
      fontSize: 24,
      fontWeight: "bold",
      marginLeft: 20,
    },
    searchBarContainer: {
      justifyContent: "center",
      alignItems: "center",
      Maxwidth: "100%",
      Maxheight: "10%",
      marginBottom: 28.5,
      marginTop: 14,
    },
    searchBarView: {
      width: 362,
      height: 42,
      borderColor: "black",
      borderWidth: 1,
      backgroundColor: "#FFF",
      borderRadius: 12,
      flexDirection: "row",
      shadowColor: "#171717",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 3,
      elevation: 20,
    },
    searchBar: {
        flex: 1,
        paddingHorizontal: 50,
        fontSize: 15,
    },
    searchIcon: {
      position: "absolute",
      top: "22%",
      left: "4%",
    },
    settingOptContainer: {
      borderBottomWidth: 0.25,
      borderColor: "black",
      paddingHorizontal: "4%",
      paddingTop: "2%",
    },
    optionContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: 70,
    },
    question: {
      fontSize: 16,
      color: "#E87F10",
    },
    settingButton: {
      paddingRight: "4%",
    },
    detailContainer: {
      paddingBottom: 10,
      paddingRight: 5
    },
    detailText: {
      fontSize: 14,
      color: "black",
    },
  });
  

export default HelpPage;
