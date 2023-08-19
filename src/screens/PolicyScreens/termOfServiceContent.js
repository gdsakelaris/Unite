import React, { useState } from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

//import styles from '../../css/screens/TermsOfServiceScreenStyles';
import { policyScreen as styles } from './css';


const TermsOfServiceScreen = () => {

    // This is just some test data to simulate getting something from the API, replace it with an actual call
    const _response = new Object();
    
    // For now, it will just take paragraphs and put them in the same
    // If we need different types of headers, I can add that logic
    _response.data = [
        "These Terms of Service (\"Terms\") govern your use of the Unite mobile application (the \"App\") provided by Resilience, Inc (\"we,\" \"us,\" or \"our\"). By accessing or using the App, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please refrain from using the App.",
        
        "\n\nApp License",
        "1.1 Grant of License: Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App for your personal, non-commercial use.",
        "1.2 Restrictions: You shall not: (a) copy, modify, or distribute the App; (b) reverse engineer, decompile, or disassemble the App; (c) remove or alter any proprietary notices or labels on the App; (d) use the App for any illegal, harmful, or unauthorized purposes; or (e) attempt to gain unauthorized access to the App or its related systems or networks.",
        
        "\n\nUser Content",
        "2.1 User Content License: By submitting any content, including but not limited to text, images, videos, or audio recordings (\"User Content\"), through the App, you grant us a non-exclusive, worldwide, royalty-free, perpetual, irrevocable, and sublicensable right to use, reproduce, modify, adapt, publish, translate, distribute, and display the User Content for the purposes of providing and promoting the App.",
        "2.2 Responsibility for User Content: You are solely responsible for....."
    ];
    
    _response.effectivedate = "Effective as of 18 May 2023";
    var jsonString = JSON.stringify(_response);
    
    // Once we get the data from the backend, we'll parse it
    let response_obj = JSON.parse(jsonString);
    let _r_text = response_obj.data.join('\n'); // Join the array elements with line breaks
    const effectivedate = response_obj.effectivedate;
    
    return (
        <View style={styles.container}>
            <ScrollView style={styles.contentContainer}>
                <Text style={styles.subHeader}>{effectivedate}</Text>
                <Text style={styles.content}>{_r_text}</Text>
            </ScrollView>
        </View>
    );
}

export default TermsOfServiceScreen;
