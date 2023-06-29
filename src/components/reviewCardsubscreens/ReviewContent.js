//make a portion to display the reviewer text in the reviewer card
import React from 'react';
import { Card, Text } from 'react-native-paper';
const ReviewContent = ({content}) => (
  <Card.Content>
    <Text variant='bodyMedium'>{content}</Text>
  </Card.Content>
)
export default ReviewContent;