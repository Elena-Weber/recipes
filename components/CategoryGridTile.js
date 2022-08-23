import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTile({title, color, whenPressed}) { // destructuring props

    return (
        <View style={styles.card}>
            <Pressable
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => [styles.container, pressed ? styles.containerPressed : null]}
                onPress={whenPressed}
            >
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
};

export default CategoryGridTile;

const styles = StyleSheet.create({
    card: {
        flex: 1, // occupies all available space
        margin: 16,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        elevation: 4, // shadow on Android
        backgroundColor: 'white', // everything below this one is for shadow on Apple, including this bg color
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width:0, height: 2},
        shadowRadius: 8,
    },
    container: {
        flex: 1,
    },
    containerPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
});