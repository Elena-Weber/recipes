import { View, Text, StyleSheet } from 'react-native';

function Subtitle({children}) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: '#005236',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer: {
        padding: 6,
        marginVertical: 4,
        marginHorizontal: 12,
        borderBottomColor: '#bc4f07',
        borderBottomWidth: 2,
    }
})