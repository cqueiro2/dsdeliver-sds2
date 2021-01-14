import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home/Index";
import Orders from './Orders/Index';


const stack = createStackNavigator()

export default function Routes(){
   return (

    <NavigationContainer>
        <stack.Navigator
           headerMode= "none"
           screenOptions={{
               cardStyle: {
                   backgroundColor:'#FFF'
               }
           }}
         >
         <stack.Screen name="Home" component={Home}></stack.Screen>
         <stack.Screen name="Orders" component={Orders}></stack.Screen>
        </stack.Navigator>
        
    </NavigationContainer>
   )
}