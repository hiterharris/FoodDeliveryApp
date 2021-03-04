import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { COLORS, icons } from '../../constants';
import { categoryData, restaurantData, initialCurrentLocation } from '../../assets/data';
import { RestaurantList, MainCategories } from './components'
import { Header } from '../../components';


const Home = ({navigation}) => {

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)

    const onSelectCategory = (category) => {
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title={currentLocation.streetName} clickHandler={() => navigation.navigate("Cart")} icon={icons.nearby} />
            <MainCategories categories={categories} selectedCategory={selectedCategory} onSelectCategory={onSelectCategory} />
            <RestaurantList currentLocation={currentLocation} restaurants={restaurants} categories={categories} navigation={navigation} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
})

export default Home;