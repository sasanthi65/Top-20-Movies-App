import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailedScreen from "../screens/DetailedScreen";
import PopularMoviesScreen from "../screens/PopularMoviesScreen";

const Stack = createNativeStackNavigator();
export default function StackNavigation(){
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Popular Movies">
            <Stack.Screen name="Popular Movies" component={PopularMoviesScreen} />
            <Stack.Screen name="Details" component={DetailedScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    );
}