import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';
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

    return <MealsList items={displayedMeals} />
}

export default MealsScreen;