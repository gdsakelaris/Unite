import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CustomSwitch from 'react-native-custom-switch';



export default function Setting_connected() {
  const [switch1On, setSwitch1On] = useState(true);
  const [switch2On, setSwitch2On] = useState(true);
  const [switch3On, setSwitch3On] = useState(true);

  const toggleSwitch1 = () => {
    setSwitch1On(previousState => !previousState);
  };

  const toggleSwitch2 = () => {
    setSwitch2On(previousState => !previousState);
  };

  const toggleSwitch3 = () => {
    setSwitch3On(previousState => !previousState);
  };







  return (
    <View style={styles.container}>


      <View style={styles.details_container}>
        <TouchableOpacity style={styles.rowContainer}>
          <Text style={{ marginLeft: 15, flex: 1, fontSize: 16 }}>Google</Text>
          <CustomSwitch
            onSwitch={toggleSwitch1}
            onSwitchReverse={toggleSwitch1}
            buttonWidth={25}
            switchWidth={58}
            buttonPadding={2}
            switchBackgroundColor={switch1On ? '#0F993E' : '#AD2525'}
            switchLeftTextStyle={{ fontSize: 10 }}
            switchLeftText="ON"
            switchRightTextStyle={{ fontSize: 10 }}
            switchRightText="OFF"

          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rowContainer}>
          <Text style={{ marginLeft: 15, flex: 1, fontSize: 16 }}>Facebook</Text>
          <CustomSwitch
            onSwitch={toggleSwitch2}
            onSwitchReverse={toggleSwitch2}
            buttonWidth={25}
            switchWidth={58}
            buttonPadding={2}
            switchBackgroundColor={switch2On ? '#0F993E' : '#AD2525'}
            switchLeftTextStyle={{ fontSize: 10 }}
            switchLeftText="ON"
            switchRightTextStyle={{ fontSize: 10 }}
            switchRightText="OFF"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rowContainer}>
          <Text style={{ marginLeft: 15, flex: 1, fontSize: 16 }}>Twitter</Text>
          <CustomSwitch
            onSwitch={toggleSwitch3}
            onSwitchReverse={toggleSwitch3}
            buttonWidth={25}
            switchWidth={58}
            buttonPadding={2}
            switchBackgroundColor={switch3On ? '#AD2525' : '#0F993E'}
            switchLeftTextStyle={{ fontSize: 10 }}
            switchLeftText="ON"
            switchRightTextStyle={{ fontSize: 10 }}
            switchRightText="OFF"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 16,
  },

  flex_container: {
    display: "flex",
    flexDirection: "row",
    margin: 15,
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
    marginRight: 6,
  }
});
