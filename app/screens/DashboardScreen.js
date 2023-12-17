import { ScrollView, StyleSheet, Text, View,   StatusBar } from 'react-native';
import colors from '../config/colors';

function DashboardScreen(props) {
    return (
        <ScrollView contentContainerStyle={styles.contentContainerStyle} keyboardShouldPersistTaps='handled'>
            <ScrollView style={styles.scrollView}>
                <View style={styles.stats}>
                    {/* Need to add basic ass stats
                    maybe something to go to previous workouts */}
                    <Text>Name: Eric Hunter</Text>
                    <Text>Todays date</Text>
                </View>
                <View style={styles.today}>
                    {/* This will list out the current days workout */}
                    <View style={styles.workout}>
                        <Text>Workout Name</Text>
                        <Text>Workout duration</Text>
                    </View>
                </View>
                <View style={styles.tomorrow}>
                    {/* Tomorrows container will hold the next workout */}
                    <View style={styles.workout}>
                        <Text>Workout Name</Text>
                        <Text>Workout duration</Text>
                    </View>
                </View>
   
                </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contentContainerStyle: {
        flex: 1,
        // backgroundColor: colors.background
        paddingTop: StatusBar.currentHeight,
    },
    stats: {
        backgroundColor: colors.primary,
        // flex: 2
        height: 70
    },
    scrollView: {
        // backgroundColor: colors.background
    },
    today: {
        // backgroundColor: colors.white,
        // flex: 1
        height: 70, 
    },
    tomorrow: {
        // backgroundColor: colors.black,
        // flex: 1
        height: 70
    },
    workout: {
        backgroundColor:'rgba(214, 214, 214, 1)',
        marginHorizontal: 30,
        borderRadius: 10,
        shadowColor: '#D3D3D3',
        shadowOffset: {width: 30, height: 30},
        shadowRadius: 4,
        height: 70,
        elevation: 4,

    }
})

export default DashboardScreen;