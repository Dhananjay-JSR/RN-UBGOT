// import StartUpPage from "./Components/StartupPage";
import HomePage from './Components/Screens/HomePage';
import InspirePage from './Components/Screens/InspirePage';
import LoginPage from './Components/Screens/LoginPage';
import SignUpPage from './Components/Screens/SignUpPage';
import MeditatePage from './Components/Screens/MeditatePage';
import NurturePage from './Components/Screens/NurturerPage';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './Components/Screens/DrawerNavigator';
import YourFavroites from './Components/Screens/YourFavroitesPage';
import CourseOverView from './Components/Screens/CourseOverView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={SignUpPage}
        />
        <Stack.Screen name="Login"   options={{
            headerShown: false,
          }} component={LoginPage} />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Main"
          component={DrawerNavigator}
        />
        <Stack.Screen
          name="Fav"
          options={{
            title: 'Your Pinned Items Will Appear Here',
          }}
          component={YourFavroites}
        />
        <Stack.Screen
          name="Course"
          options={{
            headerShown: false,
          }}
          component={CourseOverView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
