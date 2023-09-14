/**
 * A component that displays the text content of the review on the review card.
 *
 * @function
 * @param {Object} props - The props passed to the ReviewContent component.
 * @param {string} props.content - The text content of the review.
 * @returns {JSX.Element} - A component that displays the review text content.
 */

import React from 'react';
import { Card, Text } from 'react-native-paper';
const ReviewContent = ({content}) => (
  // Ultilize Card.Content component from react native paper to render the portion that display content on the review card. Go to reac-native-paper document for references
  <Card.Content>
    <Text variant='bodyMedium'>{content}</Text>
  </Card.Content>
)
export default ReviewContent;