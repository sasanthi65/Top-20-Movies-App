import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from "./navigation/StackNavigation";

export default function Root(){
    return(
        <NavigationContainer>
            <StackNavigation/>
        </NavigationContainer>
    )
}