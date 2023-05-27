import React, { useState } from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';
const PrivacyAgreementScreen = () => {

    //this is just some test data to simulate getting something from the api, replace it with an actual call
    //this is just some test data to simulate getting something from the api, replace it with an actual call
    //this is just some test data to simulate getting something from the api, replace it with an actual call
    const _response = new Object();
    
    //for now, it will just take paragraphs and put them in the same
    //if we need different types of headers, i can add that logic
    _response.data = [
        "This Privacy Policy describes how Resilience, Inc collects, uses, and discloses personal information when you use our Unite mobile application. By accessing or using the App, you agree to the terms of this Privacy Policy.",
        
        "","Information We Collect",
        "1.1 Personal Information: When you use the App, we may collect personal information that can be used to identify you, such as your name, email address, phone number, and any other information you provide voluntarily.",
        "1.2 Usage Data: We may also collect certain information about how you use the App, including your IP address, device type, operating system, and app usage statistics. This information is collected in a manner that does not personally identify you.",
        
        "","How We Use Your Information",
        "2.1 Providing and Improving the App: We use the information we collect to provide you with the App's features and functionalities and to improve the overall user experience. This includes analyzing user behavior, conducting research and analysis, and optimizing the App's performance.",
        "2.2 Communication: We may use your personal information to send you important updates, notifications, and promotional materials related to the App. You can opt-out of receiving promotional communications at any time by following the instructions provided in the communication....",
    ];
    _response.effectivedate = "Effective as of 18 May 2023";


    var jsonString = JSON.stringify(_response);
    //this is just some test data to simulate getting something from the api, replace it with an actual call
    //this is just some test data to simulate getting something from the api, replace it with an actual call
    //this is just some test data to simulate getting something from the api, replace it with an actual call
    
    
    //for now, it will just take paragraphs and put them in the same
    //if we need different types of headers, i can add that logic

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
                        <Text style={styles.headerText}>&lt;= </Text>
                        // <Image source={backArrowImage} style={styles.backArrow} />
                    )}
                </Pressable>

                <Text style={styles.headerText}>Privacy Agreement</Text>
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

export default PrivacyAgreementScreen;