/**
 * BookmarkedServices component.
 * This component displays a list of bookmarked services.
 *
 * @component
 * @returns {JSX.Element} BookmarkedServices component
 */


import React, { useEffect, useState } from 'react';
import img from '../../images/Dummyresource.png';
import BookmarkedScreenContainer from './subscreens/BookmarkedScreenContainer';
import BookmarkedCard from './subscreens/BookmarkedCard';
import { ScrollView } from 'react-native';
import { useAuth } from '../../context/AuthProvider';
import {getbookmarkedresources} from '../../utils/api/bookmarkservices'

// ... (other imports)

const BookmarkedServices = () => {

    //get userToken to authethicate with backend when fetching bookmarked resources
    const {userToken} = useAuth()
    //a state variable that store all the bookmarked resources after fetching from the backend
    const [savedResources, setSavedResources] = useState([]);

    useEffect(() => {
        // const getSavedResources = async () => {
        //     try {
        //         const resources = await getbookmarkedresources(userToken, setSavedResources);
        //         setSavedResources(resources);
        //     } catch (error) {
        //         console.error("Error fetching saved resources:", error);
        //     }
        // };

        // getSavedResources();

        // Fetch and set bookmarked resources when the component mounts
        getbookmarkedresources(userToken, setSavedResources)
    }, []); // Empty dependency array to run the effect only once

    // Rest of your code

    // if (savedResources === null) {
    //     // Return a loading indicator or a message while fetching data
    //     return <p>Loading...</p>;
    // }

    return (
        <BookmarkedScreenContainer>
            <ScrollView>
                 {/* Map through all bookmarked resources retrieved from the backend and render BookmarkedCard for each */}
                {savedResources && savedResources.map((resource, i) => (
                    <BookmarkedCard
                        cardName={resource.name}
                        location={resource.address}
                        phoneNumber={resource.phoneNumber}
                        source={img}
                        resourceId={resource.id}
                        key={i.toString()}
                    />
                ))}
            </ScrollView>
        </BookmarkedScreenContainer>
    );
};

export default BookmarkedServices;