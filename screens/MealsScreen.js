import { MEALS } from '../data/dummy-data';
import {View, Text, StyleSheet} from 'react-native';

function MealsScreen() {
    return (
        <View style={styles.container}>
            <Text>Meals</Text>
        </View>
    )
};

export default MealsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});