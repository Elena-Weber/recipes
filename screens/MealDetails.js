import { Text, View, Image } from "react-native";
import MealData from "../components/MealData";
import { MEALS } from '../data/dummy-data';

function MealDetails({ route }) { // route comes with navigation

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <View>
            <Image source={{uri: selectedMeal.imageUrl}} />
            <Text>
                {selectedMeal.title}
            </Text>
            <MealData
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
            />
            <Text>Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient) => (
                <Text key={ingredient}>
                    {ingredient}
                </Text>
            ))}
            <Text>Directions</Text>
            {selectedMeal.steps.map((step) => (
                <Text key={step}>
                    {step}
                </Text>
            ))}
        </View>
    )
}

export default MealDetails;