//this file will make the instruction card component which instructs the volunteer how to publish their resource
/**
 * @file InstructionCard.js
 * @description This file makes a instruction card component that display on the GetStarted screen, which instructs user how to create resource
 * @param {string} title - Name of the instruction card
 * @param {string} instruction - Content of the instruction card
 * @param {string} source - Image of the instruction card
 * @returns {JSX.Element} The instruction card component 
 */
import React from 'react';
import {Card} from 'react-native-paper';
import {Image} from 'react-native';
import {instructionCard as styles} from '../css';

const InstructionCard = ({title, instruction, source}) => (
  //Ultilized Card component from react native paper to make the card component more easier without needing to write a lot of code. Check out Card component in react native paper for references 
  <Card.Title
    title={title}
    subtitle={instruction}
    right={() => <Image source={{uri: source}} style={styles.image}/>}
    subtitleNumberOfLines={15}
    titleStyle={styles.title}
    style={styles.container}
    subtitleStyle={styles.subTitle}
  />
)
export default InstructionCard;