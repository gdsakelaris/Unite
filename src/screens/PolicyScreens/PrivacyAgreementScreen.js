/**
 * @file PrivacyAgreementScreen.js
 * @description This file contains a component that displays paragraphs about the privacy of the app.
 */

import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import { _r_text, effectivedate } from './privacyAgreementContent';
import { policyScreen as styles } from './css';

/**
 * Component to display the Privacy Agreement of the app.
 *
 * @component
 * @returns {JSX.Element} - A JSX element representing the Privacy Agreement Screen.
 */
const PrivacyAgreementScreen = () => {    
    return (
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.subHeader}>{effectivedate}</Text>
            <Text style={styles.content}>{_r_text}</Text>
            </ScrollView>
        </View>
    );
}
export default PrivacyAgreementScreen;