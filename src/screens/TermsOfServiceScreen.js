import React, { useState } from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';


const TermsOfServiceScreen = () => {

    //this is just some test data to simulate getting something from the api, replace it with an actual call
    //this is just some test data to simulate getting something from the api, replace it with an actual call
    //this is just some test data to simulate getting something from the api, replace it with an actual call
    const _response = new Object();
    
    //for now, it will just take paragraphs and put them in the same
    //if we need different types of headers, i can add that logic
    _response.data = [
        "These Terms of Service (\"Terms\") govern your use of the Unite mobile application (the \"App\") provided by Resilience, Inc (\"we,\" \"us,\" or \"our\"). By accessing or using the App, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please refrain from using the App.",
        
        "","App License",
        "1.1 Grant of License: Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App for your personal, non-commercial use.",
        "1.2 Restrictions: You shall not: (a) copy, modify, or distribute the App; (b) reverse engineer, decompile, or disassemble the App; (c) remove or alter any proprietary notices or labels on the App; (d) use the App for any illegal, harmful, or unauthorized purposes; or (e) attempt to gain unauthorized access to the App or its related systems or networks.",
        
        "","User Content",
        "2.1 User Content License: By submitting any content, including but not limited to text, images, videos, or audio recordings (\"User Content\"), through the App, you grant us a non-exclusive, worldwide, royalty-free, perpetual, irrevocable, and sublicensable right to use, reproduce, modify, adapt, publish, translate, distribute, and display the User Content for the purposes of providing and promoting the App.",
        "2.2 Responsibility for User Content: You are solely responsible for.....",
    ];
    _response.effectivedate = "Effective as of 18 May 2023";
    var jsonString = JSON.stringify(_response);
    //this is just some test data to simulate getting something from the api, replace it with an actual call
    //this is just some test data to simulate getting something from the api, replace it with an actual call
    //this is just some test data to simulate getting something from the api, replace it with an actual call


    //once we get the data from the backend, we'll parse
    let privacy_agreement_obj = JSON.parse(jsonString);
    let vals = privacy_agreement_obj.data;
    const effectivedate = privacy_agreement_obj.effectivedate;
    //the shape will be data:[[paragraphs of the agreement, style choice]]


    //template pressable item for the back button
    const [timesPressed, setTimesPressed] = useState(0);

    let textLog = '';
    if (timesPressed > 1) {
        textLog = timesPressed + 'x onPress';
    } else if (timesPressed > 0) {
        textLog = 'onPress';
    }


    //in the return loop, we'll export that data as paragraphs
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable
                    onPress={() => {//this will be where the backbutton gets placed
                    }}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white', //change the color of the background when the arrow is pressed
                        },
                        styles.wrapperCustom,
                    ]}>
                    {({ pressed }) => (
                        //<Text style={styles.headerText}>&lt;= </Text>
                        <Image source={backArrowImage} style={styles.backArrow} />
                    )}
                </Pressable>

                <Text style={styles.headerText}>Terms of Service</Text>
            </View>
            <ScrollView style={styles.contentContainer}>
            <Text style={styles.subHeader}>{effectivedate}</Text>
                {vals.map((line, index) => (
                    <View key={index}>
                        {renderText(line)}
                    </View>
                ))}

            </ScrollView>

            

        </View>
    );
}

const renderText = (line) => {
    return (
        <Text style={styles.paragraphText}>{line}</Text>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 29,
        paddingRight: 33,
        paddingTop: 50,
        paddingBottom: 102,
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'left',
        paddingTop: 16,       
    },
    backArrow: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',

    },
    subHeader: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 32,        
        paddingBottom: 16,
    },
    content: {
        paddingHorizontal: 10,
        marginTop: 16,
    },
    settingOptText: {
        fontSize: 18,
    },
});

export default TermsOfServiceScreen;