
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import BookScreen from '../screens/BookScreen';
import ChatScreen from '../screens/ChatScreen';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import ProfilePage from '../screens/ProfilePage';
import ProfileNavigation from './ProfileNavigation';
import { FontAwesome } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#2f95dc",
        }}
      >
        <Tab.Screen
          name="Book"
          component={BookScreen}
          options={{
            tabBarLabel: "Book",
            tabBarIcon: ({ color, size }) => (
              <Icon name="book-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarLabel: "Chat",
            tabBarIcon: ({ color, size }) => (
              <Icon name="chatbubbles-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            ),
          }}
        />
        
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarLabel: "Map",
            tabBarIcon: ({ color, size }) => (
              <Icon name="map-outline" color={color} size={size} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen
          name="ProfileNavigation"
          component={ProfileNavigation}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Icon name="person-outline" color={color} size={size} />
            ),
            headerShown:false
            
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomNavigation;
