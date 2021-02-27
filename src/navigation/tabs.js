import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { COLORS } from '../constants';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { tabProps } from './tabProps';

const Tab = createBottomTabNavigator()

const CustomTabBar = (props) => {
    if (isIphoneX()) {
        return (
            <View>
                <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 30, backgroundColor: COLORS.white}}>

                </View>
                <BottomTabBar {...props.props} />
            </View>
        )
    } else {
        <BottomTabBar {...props.props} />
    }
}

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: { borderTopWidth: 0, backgroundColor: 'transparent' }
            }}
            tabBar={(props) => (
                <CustomTabBar props={props}/>
            )}
        >
            {tabProps.map(tab => {
                return (
                <Tab.Screen
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