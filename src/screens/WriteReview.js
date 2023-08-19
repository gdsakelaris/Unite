import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ImageInputList from "../components/ImageInputList";

const WriteReview = () => {
  const [rating, setRating] = useState(0);

  const handleStarPress = (selectedRating) => {
    setRating(selectedRating);
  };

  const [value, onChangeText] = useState("");
  const [remainingChars, setRemainingChars] = useState(1000);

  const handleTextChange = (text) => {
    onChangeText(text);
    setRemainingChars(1000 - text.length); // Update the character count based on your maximum character limit
  };

  const [imageUris, setImageUris] = useState([]);
  const addImageUri = (uri) => setImageUris([...imageUris, uri]);
  const removeImageUri = (uri) =>
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));

  const AddImageSection = ({
    imageUris,
    addImageUri,
    removeImageUri,
    sectionIndex,
  }) => (
    <View style={styles.sectionContainer}>
      <ImageInputList />
    </View>
  );

  const renderStar = (position) => {
    const starIcon = rating >= position ? "star" : "star-o";
    return (
      <TouchableOpacity
        key={position}
        onPress={() => handleStarPress(position)}
        style={styles.starButton}
      >
        <FontAwesome name={starIcon} size={26} color="black" />
      </TouchableOpacity>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.heading}>Rate your overall experience</Text>

        <View style={styles.starContainer}>
          {[1, 2, 3, 4, 5].map((position) => renderStar(position))}
        </View>

        <Text style={styles.heading}>Add Photo or Video</Text>

        <View style={styles.imageSectionContainer}>
          <AddImageSection
            imageUris={imageUris}
            addImageUri={addImageUri}
            removeImageUri={removeImageUri}
            sectionIndex={0}
          />
        </View>

        <Text style={styles.heading}>Write your Review</Text>

        <TextInput
          editable
          multiline
          onChangeText={handleTextChange} // Update the onChangeText callback
          placeholder="Enter your review"
          value={value}
          style={styles.Txtinput}
          maxLength={1000}
        />

        <Text style={styles.remainingChars}>
          {remainingChars}/1000 characters
        </Text>

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Submit Review</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "3.58%",
    backgroundColor: "white",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: "10%",
  },
  starContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: "5%",
    marginBottom: "7%",
  },
  starButton: {
    marginRight: "1%",
  },
  sectionContainer: {
    marginRight: "1%",
    marginTop: "5%",
    flex: 1,
  },
  imageSectionContainer: {
    display: "flex",
    flexDirection: "row",
  },
  imageInput: {
    width: "100%",
    aspectRatio: 0.5, // Adjust the aspect ratio as per your requirement
  },

  Txtinput: {
    width: 361,
    height: 125,
    borderRadius: 5,
    backgroundColor: "#F4F4F4",
    marginTop: "3%",
    padding: "3%",
  },

  remainingChars: {
    position: "absolute",
    bottom: 115,
    right: 25,
    color: "gray",
    fontSize: 12,
  },

  submitButton: {
    alignSelf: "center",
    marginTop: "5%",
    backgroundColor: "#F78154",
    width: "75%",
    height: "7%",
    borderRadius: 21,
    alignItems: "center",
    padding: "1.5%",
    marginTop: "10%",
  },

  submitText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default WriteReview;
``;
