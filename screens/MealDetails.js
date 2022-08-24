import { Text, View, Image, StyleSheet } from "react-native";
import MealData from "../components/MealData";
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
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Ingredients</Text>
            </View>
            {selectedMeal.ingredients.map((ingredient) => (
                <Text key={ingredient}>
                    {ingredient}
                </Text>
            ))}
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Directions</Text>
            </View>
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
    subtitle: {
        color: 'yellow',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer: {
        padding: 6,
        marginVertical: 4,
        marginHorizontal: 24,
        borderBottomColor: 'yellow',
        borderBottomWidth: 2,
    }
})