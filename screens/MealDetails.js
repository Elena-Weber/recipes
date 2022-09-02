import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { useLayoutEffect } from 'react';
import MealData from '../components/MealData';
import Subtitle from '../components/MealDetails/Subtitle';
import List from '../components/MealDetails/List';
import HeaderBtn from '../components/HeaderBtn';
import { MEALS } from '../data/dummy-data';

function MealDetails({ route, navigation }) { // route comes with navigation

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerBtnHandler() {
        console.log("pressed")
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <HeaderBtn
                    onPressBtn={headerBtnHandler}
                    icon="heart"
                    color="white"
                />
                }
        })
    }, [navigation, headerBtnHandler]);

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
        margin: 12,
        textAlign: 'center',
        color: '#20686c',
        borderBottomColor: '#fe982a',
        borderBottomWidth: 2,
        paddingBottom: 3,
        borderStyle: 'dashed'
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