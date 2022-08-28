import { StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function HeaderBtn({icon, color, onPressBtn}) {
    return (
        <Pressable
            onPress={onPressBtn}
            style={({pressed}) => pressed && styles.pressed}
        >
            <Ionicons
                name={icon}
                size={24}
                color={color}
                />
        </Pressable>
    )
}

export default HeaderBtn;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    }
})