import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { useContext } from 'react';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';

function Favorites() {

    const favoriteMealsContext = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter((meal) =>
        favoriteMealsContext.ids.includes(meal.id)
    );

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    No favorite meals yet.
                </Text>
                <Image
                    source={{uri: 'https://images.unsplash.com/photo-1600335895229-6e75511892c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}}
                    style={{width: 300, height: 400, margin: 40}} />
                <Text style={styles.text}>
                    Time to add some!   ;)
                </Text>
            </View>
        )
    } else {
        return <MealsList items={favoriteMeals} />
    }
}

export default Favorites;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'red'
    }
});