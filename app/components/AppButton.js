import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import colors from '../config/colors';

const primary = colors.primary
const white = colors.white

function AppButton({fill = primary, text = white, ...props}) {
    return (
        <TouchableOpacity style={{ backgroundColor: fill, ...styles.button, }}>
            <Text style={{ color: text, ...styles.text}}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
    },
    text: {
        fontSize: 18,
        textTransform: 'uppercase',
        letterSpacing: 2,
        fontWeight: 'bold'
    }
})

export default AppButton;