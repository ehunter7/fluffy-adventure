import {  ImageBackground, StyleSheet, View, TextInput, Text, SafeAreaView, ScrollView } from 'react-native';

import AppButton from '../components/AppButton'

import colors from '../config/colors';

function WelcomeScreen() {
    return (
        <ScrollView contentContainerStyle={styles.contentContainerStyle} keyboardShouldPersistTaps='handled'>
            <ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
                <SafeAreaView>
                    <View style={styles.container}>
                        <TextInput placeholder="Email . . ." placeholderTextColor="white" keyboardType="email-address" clearButtonMode='while-editing' style={styles.input}/>
                        <TextInput placeholder="Password . . ." placeholderTextColor="white" keyboardType="password" autoComplete='password' textContentType='password' secureTextEntry="true" style={styles.input}/>
                        <View style={styles.buttonMargin}>
                            <AppButton  fill={colors.primary}>Sign In</AppButton>
                        </View>
                    </View>
                    <View>        
                        <Text style={styles.link}>Forgot Username or password?</Text>
                        <Text style={styles.link}>Create an Account</Text>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center'
    },
    buttonMargin: {
        marginTop: 20, marginBottom: 10},
    container: {
        padding:10,
        backgroundColor: 'rgba(108, 117, 125, 0.8)',
        borderRadius: 5,
        margin: 40,
    },
    contentContainerStyle: {
        flexGrow: 1
    },
    input: {
        height: 40,
        borderBottomColor: '#adb5bd',
        borderBottomWidth: 1,
        placeholderTextColor: colors.white,
        fontSize: 18,
        color: colors.white,
        marginTop: 10,
        marginBottom: 10,
        letterSpacing: 1,
    },
    link: {
        color: colors.white,
        backgroundColor: 'rgba(108, 117, 125, 0.25)',
        fontSize: 18,
        flexWrap: 'wrap',
        alignSelf: 'flex-start',
        alignSelf: 'center',
        letterSpacing: 1,
        margin: 10
    }
})

export default WelcomeScreen;