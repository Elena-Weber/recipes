import { Pressable, View, Text, StyleSheet } from "react-native";

function CategoryGridTile({title, color}) {
    return (
        <View style={styles.card}>
            <Pressable style={styles.container}>
                <View style={styles.innerContainer}>
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
        borderRadius: 8,
        // borderColor: 'teal',
        // borderStyle: 'dotted',
        // borderWidth: 1,
        elevation: 4, // shadow on Android
        backgroundColor: 'white', // everything below this one is for shadow on Apple including bg color
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width:0, height: 2},
        shadowRadius: 8,
    },
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
});