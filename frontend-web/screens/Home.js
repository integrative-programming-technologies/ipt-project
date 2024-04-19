import { View, Text, Pressable, Image, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Home = ({ navigation }) => {

    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.grey, COLORS.black]}
        >
            
            <View style={{ flex: 1 }}>
                <View>
                    

                    <Image
                        source={require("../assets/hamloy.png")}
                        style={{
                            height: 300,
                            width: 300,
                            borderRadius: 20,
                            position: "absolute",
                            top: 80,
                            left: 30,

                        }}
                    />
                </View>

                {/* content  */}

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 350,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: COLORS.grey,
                        textAlign: 'center'
                    }}
                    >HAMLOY APP!</Text>
                    

                    <Button
                        title="LOG OUT"
                        onPress={() => navigation.navigate("Login")}
                        style={{
                            marginTop: 22,
                            width: "100%"
                        }}
                    />

                    

                    
                </View>
            </View>
        </LinearGradient>
    )
}

export default Home