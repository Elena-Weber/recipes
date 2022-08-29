import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // it's an object with 2 obligatory components: Navigator and Screen
import { createDrawerNavigator } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';
import MealDetails from './screens/MealDetails';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function drawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="first" />
      <Drawer.Screen name="second" />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
        // applies to all screens by default
          screenOptions={{
              headerStyle: {backgroundColor: '#20686c'},
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