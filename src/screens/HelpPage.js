import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import SearchBar from "../components/SearchBar";

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
  const {fontScale} = useWindowDimensions()
  const styles = makeStyle(fontScale)
  return (
    <View style={styles.container}>
        <ScrollView>
      <Text style={styles.heading}>Hi, how can we help you?</Text>
      <View style={styles.searchBarContainer}>
        <SearchBar style={styles.searchBarView}/>
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

const makeStyle = fontScale => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    heading: {
      fontSize: 26 / fontScale,
      fontWeight: "bold",
      marginLeft: 20,
    },
    searchBarContainer: {
      width: '100%',
      height: '6%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal:'2%',
      marginVertical:'7%'
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
      height: 90,
      
    },
    question: {
      fontSize: 21 / fontScale,
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
      fontSize: 16 / fontScale,
      color: "black",
    },
  });
  

export default HelpPage;
