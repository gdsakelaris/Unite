//Bookmarked service screen
import React, { useEffect, useState } from 'react';
import img from '../../images/Dummyresource.png';
import BookmarkedScreenContainer from './subscreens/BookmarkedScreenContainer';
import BookmarkedCard from './subscreens/BookmarkedCard';

//mockup data for testing purpose (Later on, this data will be retrieved from database)
import { getSavedResourcesByUserId } from './mockupData'; // Import the new function
import { ScrollView } from 'react-native';
import { useAuth } from '../../context/AuthProvider';

// ... (other imports)

const BookmarkedServices = () => {
    const userId = 1;
    const [savedResources, setSavedResources] = useState([]);

    useEffect(() => {
        const getSavedResources = async () => {
            try {
                const resources = await getSavedResourcesByUserId(userId);
                setSavedResources(resources);
            } catch (error) {
                console.error("Error fetching saved resources:", error);
            }
        };

        getSavedResources();
    }, []); // Empty dependency array to run the effect only once

    // Rest of your code

    if (savedResources === null) {
        // Return a loading indicator or a message while fetching data
        return <p>Loading...</p>;
    }

    return (
        <BookmarkedScreenContainer>
            <ScrollView>
                {savedResources.map((resource, i) => (
                    <BookmarkedCard
                        cardName={resource.name}
                        location={resource.location}
                        phoneNumber={resource.phoneNumber}
                        source={img}
                        resourceId={'id'}
                        key={i.toString()}
                    />
                ))}
            </ScrollView>
        </BookmarkedScreenContainer>
    );
};

export default BookmarkedServices;