import { Text, View, Image, StyleSheet } from "react-native";
import MealData from '../components/MealData';
import Subtitle from '../components/MealDetails/Subtitle';
import { MEALS } from '../data/dummy-data';

function MealDetails({ route }) { // route comes with navigation

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <View>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
            <Text style={styles.title}>
                {selectedMeal.title}
            </Text>
            <MealData
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailsText}
            />
            <Subtitle>Ingredients</Subtitle>
            {selectedMeal.ingredients.map((ingredient) => (
                <Text key={ingredient}>
                    {ingredient}
                </Text>
            ))}
            <Subtitle>Directions</Subtitle>
            {selectedMeal.steps.map((step) => (
                <Text key={step}>
                    {step}
                </Text>
            ))}
        </View>
    )
}

export default MealDetails;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailsText: {
        color: 'white',
    },
})