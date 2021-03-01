import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabProps } from './tabProps';

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: { borderTopWidth: 0 }
            }}
        >
            {tabProps.map((tab, index) => {
                return (
                <Tab.Screen
                    key={index}
                    name={tab.name}
                    component={tab.component}
                    options={tab.options}
                />
                )
 
            })}
        </Tab.Navigator>
    )
}

export default Tabs;