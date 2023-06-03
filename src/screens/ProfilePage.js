import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import img from "../images/Reslogo.png";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function ProfilePage({ navigation }) {
  return (
    <View style={styles.appContainer}>
      <View style={styles.img_container}>
        <View style={styles.circle}>
          <Image source={img} style={styles.Image} />
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={{ color: "#fff" }}> Edit Profile </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.details_container}>
        <TouchableOpacity style={styles.rowContainer}>
          <FontAwesome name="bookmark" size={24} color="#ff4500" />
          <Text style={{ marginLeft: 20, flex: 1 }}>Bookmarked Services</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rowContainer} onPress={() => navigation.navigate('SettingsNavigation')}>
          <Ionicons name="settings-sharp" size={24} color="#ff4500" />
          <Text style={{ marginLeft: 15, flex: 1 }}>Settings</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rowContainer}>
          <Entypo name="help-with-circle" size={24} color="#ff4500" />
          <Text style={{ marginLeft: 16, flex: 1 }}>Help</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rowContainer}>
          <Ionicons name="log-out-outline" size={24} color="#ff4500" />
          <Text style={{ marginLeft: 16, flex: 1 }}>Log Out</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  img_container: {
    flex: 1,
    backgroundColor: "#ffe4df",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  details_container: {
    flex: 1.2,
    paddingHorizontal: 20,
  },
  Image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    borderRadius: 100,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  editButton: {
    backgroundColor: "green",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
