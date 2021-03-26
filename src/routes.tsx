import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Highlights } from './pages/Highlights';

const AppStack = createStackNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyle: {
                        backgroundColor: "#f0f0f5"
                    }
                }}
            >
                <AppStack.Screen name="/" component={Highlights} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}