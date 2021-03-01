import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { icons, SIZES, COLORS, FONTS } from '../../constants';

const Header = ({ route, navigation }) => {
    const { currentLocation } = props;
    return (
        <View style={{ flexDirection: 'row', height: 50 }}>
            <TouchableOpacity style={{ width: 50, paddingLeft: SIZES.padding * 2, justifyContent: 'center' }} onPress={() => navigation.goBack()}>
                <Image
                    source={icons.back}
                    resizeMode='contain'
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ widht: '70%', height: '100%', backgroundColor: COLORS.lightGray3, alignItems: 'center', justifyContent: 'center', borderRadius: SIZES.radius }}>
                    <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
                </View>
            </View>
            <TouchableOpacity style={{ width: 50, paddingRight: SIZES.padding, justifyContent: 'center' }}>
                <Image
                    source={icons.basket}
                    resizeMode='contain'
                    style={{ height: 30, width: 30 }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Header;