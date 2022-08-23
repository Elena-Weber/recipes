import { View, FlatList, StyleSheet } from 'react-native';
import { useLayoutEffect } from 'react';
import Meal from '../components/Meal';
import { MEALS, CATEGORIES } from '../data/dummy-data';

function MealsScreen({ route, navigation }) { // route comes with navigation

    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => { // like useEffect but displayed without delay, simultaneously with other constants' reading
        const catTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: catTitle
        });
    }, [catId, navigation]); // dependencies, when to update the screen

    function renderMealItem(itemData) {

        const item = itemData.item;

        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        };

        return (
            <Meal {...mealItemProps} /> // transfers all props
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});