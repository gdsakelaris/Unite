import React from 'react';
import { Text } from 'react-native-paper';
import { helpOptDetail as styles } from '../css';
const ExpandedView = ({detail}) => (
    <Text style={styles.detailText}>{detail}</Text>
)
export default ExpandedView;