import { View, Pressable, Text, Image, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealData from '../components/MealData';

function Meal({ id, title, imageUrl, duration, complexity, affordability }) { // props destructuring

    const navigation = useNavigation();

    function mealPicPressHandler() {
        navigation.navigate('Meal', { // takes you to screen with this name
            mealId: id // sends this data there
        });
    };

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#005236' }}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                onPress={mealPicPressHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </View>
                    <MealData
                        duration={duration}
                        affordability={affordability}
                        complexity={complexity}
                    />
                </View>
            </Pressable>
        </View>
    );
}

export default Meal;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: '#005236',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
        color: '#20686c',
    },
});