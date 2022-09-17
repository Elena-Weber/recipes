import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import FavoritesContextProvider from './store/context/favorites-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // it's an object with 2 obligatory components: Navigator and Screen
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from './screens/CategoriesScreen';
import Favorites from './screens/Favorites';
import MealsScreen from './screens/MealsScreen';
import MealDetails from './screens/MealDetails';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#20686c'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: 'white'},
        drawerContentStyle: {backgroundColor: '#20686c'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#20686c',
        drawerActiveBackgroundColor: '#6bc4a6'
      }}
    >
      <Drawer.Screen
        name="All Drawer Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({color, size}) =>
            <Ionicons
              name="list"
              size={size}
              color={color}
            />,
          title: 'All categories' // always overwrites name
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={Favorites}
        options={{
          drawerIcon: ({color, size}) =>
            <Ionicons
              name="heart"
              size={size}
              color={color}
            />
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
          // applies to all screens by default except Drawer
            screenOptions={{
              headerStyle: {backgroundColor: '#20686c'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: 'white'}
            }}
          >
            <Stack.Screen
              name="Categories"
              component={DrawerNavigator}
              options={{
                // title: 'All categories',
                headerShown: false // hides title
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
              options={{
                title: 'Details' // always overwrites name
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}