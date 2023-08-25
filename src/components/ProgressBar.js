/**
 * Displays a progress bar indicating the progress through steps.
 *
 * @component
 * @param {number} step - The current step of progress (1 to 4).
 * @returns {JSX.Element} The ProgressBar component.
 */

import React from 'react';
import { View } from 'react-native';
import { progressBar as styles } from './css';

const ProgressBar = ({step}) => {

    // The step must be a number between 1 and 4
    // It defines the styles for each step's appearance

    return (
        <View style={styles.wholeBar}>
            <View style={styles.internalBar}>
                <View style={styles.progressPartActiv}></View>
                <View style={step <=1? styles.progressPartNotActiv: styles.progressPartActiv}></View>
            </View>
            <View style={styles.internalBar}>
                <View style={step <=1? styles.progressPartNotActiv: styles.progressPartActiv}></View>
                <View style={step <=2? styles.progressPartNotActiv: styles.progressPartActiv}></View>
            </View>
            <View style={styles.internalBar}>
                <View style={step <=2? styles.progressPartNotActiv: styles.progressPartActiv}></View>
                <View style={step <=3? styles.progressPartNotActiv: styles.progressPartActiv}></View>
            </View>
        </View>
    )
}

export default ProgressBar;