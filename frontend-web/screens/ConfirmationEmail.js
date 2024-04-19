import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../constants/colors';

const ConfirmationEmail = ({ navigation }) => {
    const handleConfirmation = () => {
        // Perform email confirmation actions here
        navigation.navigate('Login'); // Redirect to the login page after confirmation
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <LinearGradient
                style={{ flex: 1 }}
                colors={[COLORS.secondary, COLORS.white]}
            >
                <View style={styles.container}>
                    <Ionicons name="mail-open-outline" size={100} color={COLORS.primary} />
                    <Text style={styles.heading}>Confirm Your Email</Text>
                    <Text style={styles.text}>
                        Please click the button below to confirm your email address.
                    </Text>
                    <TouchableOpacity
                        onPress={handleConfirmation}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Confirm Email</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
        color: COLORS.black,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        color: COLORS.black,
        marginBottom: 20,
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.white,
    },
});

export default ConfirmationEmail;
