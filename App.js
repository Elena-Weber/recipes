import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // it's an object with 2 obligatory components: Navigator and Screen
import CategoriesScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
        // applies to all screens automatically
          screenOptions={{
              headerStyle: {backgroundColor: 'black'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: 'gray'}
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}