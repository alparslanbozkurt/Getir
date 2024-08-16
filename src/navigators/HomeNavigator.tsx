import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { Image } from "react-native";

// StackNavigator'ı oluştur
const Stack = createStackNavigator();

// HomeNavigator fonksiyonu
function HomeNavigator() {
    return (
        <Stack.Navigator>
            {/* Home ekranı için bir Stack.Screen bileşeni */}
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    // Başlık stilini ayarla
                    headerStyle: {backgroundColor:'#5C3EBC'},
                    // Başlık kısmında bir logo göster
                    headerTitle: () => (
                        <Image
                            source={require('../../assets/getirlogo.png')}
                            style={{width:70, height:30, marginLeft:140}}
                        />
                    )
                }}
            />
        </Stack.Navigator>
    );
}

export default HomeNavigator;
