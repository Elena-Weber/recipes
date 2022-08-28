import { StatusBar } from 'expo-status-bar';
import { Text, Button, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // it's an object with 2 obligatory components: Navigator and Screen
import CategoriesScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';
import MealDetails from './screens/MealDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
        // applies to all screens by default
          screenOptions={{
              headerStyle: {backgroundColor: '#005236'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: 'white'}
            }}
        >
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: 'All categories'
            }}
          />
          <Stack.Screen
            name="Meals"
            component={MealsScreen}
            // alternative dynamic title setting
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <Stack.Screen
            name="Meal"
            component={MealDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}