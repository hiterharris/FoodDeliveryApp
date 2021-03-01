import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { categoryData, restaurantData, initialCurrentLocation } from '../../assets/data';
import { Header, RestaurantList, MainCategories } from './components'

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
            <MainCategories categories={categories} selectedCategory={selectedCategory} onSelectCategory={onSelectCategory} />
            <Header currentLocation={currentLocation} />
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