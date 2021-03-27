import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Highlights } from './pages/Highlights';
import { Shops } from './pages/Shops';
import { Favorites } from './pages/Favorites';
import { Cart } from './pages/Cart';
import { More } from './pages/More';
import { WoWOffers } from './pages/WoWOffers';

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarVisible: false,
                }}
            >
                <Tab.Screen name="/" component={Highlights} />
                <Tab.Screen name="/shops" component={Shops} />
                <Tab.Screen name="/favorites" component={Favorites} />
                <Tab.Screen name="/cart" component={Cart} />
                <Tab.Screen name="/more" component={More} />
                <Tab.Screen name="/wow/offers" component={WoWOffers} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}