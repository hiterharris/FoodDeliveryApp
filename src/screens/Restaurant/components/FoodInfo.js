import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated
} from "react-native";
import { icons, COLORS, SIZES, FONTS } from '../../../constants';
import { getOrderQty } from '../helpers';

const FoodInfo = (props) => {
    const { restaurant, orderItems, setOrderItems } = props;
    const scrollX = new Animated.Value(0);

    const editOrder = (action, name, photo, menuId, price) => {
        let orderList = orderItems.slice()
        let item = orderList.filter(a => a.menuId == menuId)

        if (action == "+") {
            if (item.length > 0) {
                let newQty = item[0].qty + 1
                item[0].qty = newQty
                item[0].total = item[0].qty * price
            } else {
                const newItem = {
                    menuId: menuId,
                    name: name,
                    photo: photo,
                    qty: 1,
                    price: price,
                    total: price
                }
                orderList.push(newItem)
            }

            setOrderItems(orderList)
        } else {
            if (item.length > 0) {
                if (item[0]?.qty > 0) {
                    let newQty = item[0].qty - 1
                    item[0].qty = newQty
                    item[0].total = newQty * price
                }
            }

            setOrderItems(orderList)
        }
    }

    return (
        <Animated.ScrollView
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
                { nativeEvent: { contentOffset: { x: scrollX } } }
            ], { useNativeDriver: false })}
        >
            {
                restaurant?.menu.map((item, index) => (
                    <View
                        key={`menu-${index}`}
                        style={{ alignItems: 'center' }}
                    >
                        <View style={{ height: SIZES.height * 0.35 }}>
                            {/* Food Image */}
                            <Image
                                source={item.photo}
                                resizeMode="cover"
                                style={{
                                    width: SIZES.width,
                                    height: "100%"
                                }}
                            />

                            {/* Quantity */}
                            <View
                                style={{
                                    position: 'absolute',
                                    bottom: - 20,
                                    width: SIZES.width,
                                    height: 50,
                                    justifyContent: 'center',
                                    flexDirection: 'row'
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        width: 50,
                                        backgroundColor: COLORS.white,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderTopLeftRadius: 25,
                                        borderBottomLeftRadius: 25
                                    }}
                                    onPress={() => editOrder("-", item.name, item.photo, item.menuId, item.price)}
                                >
                                    <Text style={{ ...FONTS.body1 }}>-</Text>
                                </TouchableOpacity>

                                <View
                                    style={{
                                        width: 50,
                                        backgroundColor: COLORS.white,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Text style={{ ...FONTS.h2 }}>{getOrderQty(orderItems, item.menuId)}</Text>
                                </View>

                                <TouchableOpacity
                                    style={{
                                        width: 50,
                                        backgroundColor: COLORS.white,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderTopRightRadius: 25,
                                        borderBottomRightRadius: 25
                                    }}
                                    onPress={() => editOrder("+", item.name, item.photo, item.menuId, item.price)}
                                >
                                    <Text style={{ ...FONTS.body1 }}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Name & Description */}
                        <View
                            style={{
                                width: SIZES.width,
                                alignItems: 'center',
                                marginTop: 15,
                                paddingHorizontal: SIZES.padding * 2
                            }}
                        >
                            <Text style={{ marginVertical: 10, textAlign: 'center', ...FONTS.h2 }}>{item.name} - {item.price.toFixed(2)}</Text>
                            <Text style={{ ...FONTS.body3 }}>{item.description}</Text>
                        </View>

                        {/* Calories */}
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: 10
                            }}
                        >
                            <Image
                                source={icons.fire}
                                style={{
                                    width: 20,
                                    height: 20,
                                    marginRight: 10
                                }}
                            />

                            <Text style={{
                                ...FONTS.body3, color: COLORS.darygray
                            }}>{item.calories.toFixed(2)} cal</Text>
                        </View>
                    </View>
                ))
            }
        </Animated.ScrollView>
    )
}

export default FoodInfo;