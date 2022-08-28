import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import MealData from '../components/MealData';
import Subtitle from '../components/MealDetails/Subtitle';
import List from '../components/MealDetails/List';
import { MEALS } from '../data/dummy-data';

function MealDetails({ route }) { // route comes with navigation

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <ScrollView style={styles.rootContainer}>
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
            <View style={styles.container}>
                <View style={styles.detailsContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients}/>
                    <Subtitle>Directions</Subtitle>
                    <List data={selectedMeal.steps}/>
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetails;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: '#20686c',
    },
    detailsText: {
        color: '#005236',
    },
    container: {
        alignItems: 'center',
    },
    detailsContainer: {
        maxWidth: '80%',
    }
})